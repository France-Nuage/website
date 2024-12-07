import RequestQueryBuilder from '../../../utils/RequestQueryBuilder.js'
import Organization from '#models/resource/organization'
import User from '#models/user'

export default OrganizationService = {
  get: async function (id: string, includes: Array<string>, user: User) {
    return new RequestQueryBuilder(Organization.query())
      .withIncludes(includes)
      .applyWhere([['id', '=', id]])
      .firstOrFail()
  },
  list: async function (includes: Array<string>, user: User) {
    return new RequestQueryBuilder(Organization.query())
      .withIncludes(includes)
      .withPagination(1, 10)
      .apply()
  },
  create: async function (body: { [_: string]: string | number | null }, user: User) {
    return await Organization.create(body)
  },
  update: async function (id, body, user: User) {},
  delete: async function (id, user: User) {},
}
