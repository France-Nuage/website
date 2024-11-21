import type { HttpContext } from '@adonisjs/core/http'
import { createOrganizationValidator } from '#validators/v1/iam/organization'
import Organization from '#models/iam/organization'

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
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createOrganizationValidator)
    const organization = await Organization.create({ ...payload })

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
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}
