import type { HttpContext } from '@adonisjs/core/http'
import { createOrganizationValidator } from '#validators/v1/iam/organization'
import Organization from '#models/resource/organization'

export default class OrganizationsController {
  /**
   * Display a list of resource
   */
  async index({ auth, response }: HttpContext) {
    const user = await auth.getUserOrFail()
    const organizations = await Organization.query()
      .where('owner__id', '=', user.id)
      .paginate(1, 10)

    return response.ok(organizations)
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
  async show({ params, response }: HttpContext) {
    const organization = await Organization.find(params.id)

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
