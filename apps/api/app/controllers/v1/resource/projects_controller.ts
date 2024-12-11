import type { HttpContext } from '@adonisjs/core/http'
import Project from '#models/resource/project'
import RequestQueryBuilder from '../../../utils/RequestQueryBuilder.js'
import ProjectPolicy from '#policies/resource/project_policy'

export default class ProjectsController {
  /**
   * Display a list of resource
   */
  async index({ response, params, request, bouncer }: HttpContext) {
    await bouncer.with(ProjectPolicy).authorize('index')

    return response.notImplemented({
      params: params,
      request: request,
    })
  }

  /**
   * Handle form submission for the create action
   */
  async store({ response, params, request, bouncer }: HttpContext) {
    await bouncer.with(ProjectPolicy).authorize('store')

    return response.notImplemented({
      params: params,
      request: request,
    })
  }

  /**
   * Show individual record
   */
  async show({ params, response, request, bouncer }: HttpContext) {
    await bouncer.with(ProjectPolicy).authorize('show')
    const project = await new RequestQueryBuilder(Project.query())
      .withIncludes(request.qs().includes)
      .applyWhere([['id', '=', params.id]])
      .firstOrFail()

    if (!project) {
      response.notFound(`Project ${params.id} not found`)
    }

    return response.ok(project)
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ response, params, request, bouncer }: HttpContext) {
    await bouncer.with(ProjectPolicy).authorize('update')

    return response.notImplemented({
      params: params,
      request: request,
    })
  }

  /**
   * Delete record
   */
  async destroy({ response, params, request, bouncer }: HttpContext) {
    await bouncer.with(ProjectPolicy).authorize('destroy')

    return response.notImplemented({
      params: params,
      request: request,
    })
  }
}
