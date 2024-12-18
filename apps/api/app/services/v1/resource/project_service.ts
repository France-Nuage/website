import RequestQueryBuilder from '../../../utils/RequestQueryBuilder.js'
// import User from '#models/user'
import Project from '#models/resource/project'

export default {
  get: async function (id: string, includes: Array<string>) {
    return new RequestQueryBuilder(Project.query())
      .withIncludes(includes)
      .applyWhere([['id', '=', id]])
      .firstOrFail()
  },
  list: async function (
    includes: Array<string>
    // user?: User
  ) {
    return new RequestQueryBuilder(Project.query())
      .withIncludes(includes)
      .withPagination(1, 10)
      .apply()
  },
  // create: async function (includes) {},
  // post: async function (body) {},
  // update: async function (id, body) {},
  // delete: async function (id) {},
}
