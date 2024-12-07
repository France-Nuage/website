import RequestQueryBuilder from "../../../utils/RequestQueryBuilder.js";
import Folder from "#models/resource/folder";
import User from "#models/user";
import Project from "#models/resource/project";

export default FolderService = {
  get: async function (id: string, includes: Array<string>) {
    return new RequestQueryBuilder(Folder.query())
      .withIncludes(includes)
      .applyWhere([['id', '=', id]])
      .firstOrFail()
  },
  list: async function (includes: Array<string>, user: User) {
    return new RequestQueryBuilder(Folder.query())
      .withIncludes(includes)
      .withPagination(1, 10)
      .apply()
  },
  create: async function (includes) {},
  post: async function (body) {
    const folder = await Folder.create(body)
    await Project.create({ name: 'Production', account__id: folder.id })
    return
  },
  update: async function (id, body) {},
  delete: async function (id) {},
}
