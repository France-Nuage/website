import type { HttpContext } from '@adonisjs/core/http'
import { createOrganizationValidator } from '#validators/v1/resource/organization'
import Organization from '#models/resource/organization'
import RequestQueryBuilder from '../../../utils/RequestQueryBuilder.js'

export default class OrganizationsController {
  /**
   * Display a list of resource
   */
  async index({ auth, request }: HttpContext) {
    const user = await auth.getUserOrFail()

    return new RequestQueryBuilder(Organization.query())
      .withIncludes(request.qs().includes)
      .applyWhere([['owner__id', '=', user.id]])
      .withPagination(1, 10)
      .apply()
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response, auth }: HttpContext) {
    const payload = await request.validateUsing(createOrganizationValidator)
    const user = await auth.getUserOrFail()

    const organization = await Organization.create({ ...payload, owner__id: user.id })

    return response.created(organization)
  }

  /**
   * Show individual record
   */
  async show({ params, response, request }: HttpContext) {
    const organization = await new RequestQueryBuilder(Organization.query())
      .withIncludes(request.qs().includes)
      .applyWhere([['id', '=', params.id]])
      .firstOrFail()

    if (!organization) {
      response.notFound(`Organization ${params.id} not found`)
    }

    return response.ok(organization)
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    return response.notImplemented({
      params: params,
      request: request,
    })
  }

  /**
   * Delete record
   */
  async destroy({ params, response, request }: HttpContext) {
    return response.notImplemented({
      params: params,
      request: request,
    })
  }
}
