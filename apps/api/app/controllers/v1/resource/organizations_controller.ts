import type { HttpContext } from '@adonisjs/core/http'
import { createOrganizationValidator } from '#validators/v1/resource/organization'
import OrganizationService from '#services/v1/resource/OrganizationService'
import organizationService from '#services/v1/resource/OrganizationService'
import OrganizationPolicy from '#policies/resource/organization_policy'

export default class OrganizationsController {
  /**
   * Display a list of resource
   */
  async index({ auth, request, bouncer }: HttpContext) {
    await bouncer.with(OrganizationPolicy).authorize('index')
    const user = await auth.getUserOrFail()
    return await OrganizationService.list(request.qs().includes, user)
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response, bouncer }: HttpContext) {
    await bouncer.with(OrganizationPolicy).authorize('store')
    const payload = await request.validateUsing(createOrganizationValidator)
    const organization = await organizationService.create({ ...payload })

    return response.created(organization)
  }

  /**
   * Show individual record
   */
  async show({ params, response, bouncer }: HttpContext) {
    await bouncer.with(OrganizationPolicy).authorize('show')
    const organization = await OrganizationService.get(params.id)

    if (!organization) {
      return response.notFound(`Organization ${params.id} not found`)
    }

    return response.ok(organization)
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response, bouncer }: HttpContext) {
    await bouncer.with(OrganizationPolicy).authorize('update')
    return response.notImplemented({
      params: params,
      request: request,
    })
  }

  /**
   * Delete record
   */
  async destroy({ params, response, request, bouncer }: HttpContext) {
    await bouncer.with(OrganizationPolicy).authorize('destroy')
    return response.notImplemented({
      params: params,
      request: request,
    })
  }
}
