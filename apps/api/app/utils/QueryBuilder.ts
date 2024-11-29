// RequestQueryBuilder.js
class RequestQueryBuilder {
  private queryParams: any

  constructor(queryParams) {
    this.queryParams = queryParams
  }

  applyQuery(query) {
    this.applyIncludes(query)
    this.applyFilters(query)
    this.applySort(query)
    this.applyPagination(query)
    return query
  }

  applyIncludes(query) {
    const includes = this.queryParams.includes
    if (includes) {
      const includeList = includes.split(',')
      includeList.forEach((include) => {
        const relations = include.split('.')
        this.preloadRelation(query, relations)
      })
    }
  }

  preloadRelation(query, relations) {
    if (relations.length === 0) return

    const [relation, ...restRelations] = relations
    query.preload(relation, (nestedQuery) => {
      if (restRelations.length > 0) {
        this.preloadRelation(nestedQuery, restRelations)
      }
    })
  }

  applyFilters(query) {
    const filters = this.queryParams.filter
    if (filters) {
      Object.keys(filters).forEach((operator) => {
        const fields = filters[operator]
        Object.keys(fields).forEach((field) => {
          const value = fields[field]
          const fieldParts = field.split('.')
          this.applyFilterToQuery(query, operator, fieldParts, value)
        })
      })
    }
  }

  applyFilterToQuery(query, operator, fieldParts, value) {
    if (fieldParts.length === 1) {
      const field = fieldParts[0]
      this.applyOperator(query, operator, field, value)
    } else {
      const [relation, ...restFields] = fieldParts
      query.whereHas(relation, (relatedQuery) => {
        this.applyFilterToQuery(relatedQuery, operator, restFields, value)
      })
    }
  }

  applyOperator(query, operator, field, value) {
    switch (operator) {
      case '_eq':
        query.where(field, '=', value)
        break
      case '_ne':
        query.whereNot(field, value)
        break
      case '_lt':
        query.where(field, '<', value)
        break
      case '_gt':
        query.where(field, '>', value)
        break
      case '_lte':
        query.where(field, '<=', value)
        break
      case '_gte':
        query.where(field, '>=', value)
        break
      case '_like':
        query.where(field, 'LIKE', `%${value}%`)
        break
      default:
        break
    }
  }

  applySort(query) {
    const sort = this.queryParams.sort
    if (sort) {
      const fields = sort.split(',')
      fields.forEach((field) => {
        let direction = 'asc'
        if (field.startsWith('-')) {
          direction = 'desc'
          field = field.substring(1)
        }
        query.orderBy(field, direction)
      })
    }
  }

  applyPagination(query) {
    const page = Number.parseInt(this.queryParams.page, 10) || 1
    const perPage = Number.parseInt(this.queryParams.perPage, 10) || 10

    if (this.queryParams.page || this.queryParams.perPage) {
      query.paginate(page, perPage)
    }
  }
}

export default RequestQueryBuilder
