import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'
import PolicyPolicy from '#policies/iam/policy_policy'

const filterSQLKey = {
  organization: 'organization__id',
  folder: 'folder__id',
  project: 'project__id',
}

export default class MembersController {
  /**
   * Display a list of resource
   */
  async index({ response, params, bouncer }: HttpContext) {
    await bouncer.with(PolicyPolicy).authorize('index')

    const rows = await db
      .from('member.users as u')
      .join('iam.user_resource_policy_binding as b', 'u.id', 'b.member__id')
      .join('iam.resource_policy as p', 'b.policy__id', 'p.policy__id')
      .where(`p.${filterSQLKey[params.resource]}`, params.resourceId)
      .groupBy('u.email')
      .select('u.email as member')
      .select(db.raw('array_agg(DISTINCT b.role__id) as roles'))

    return response.ok({
      bindings: rows.map((row) => ({
        member: row.member,
        roles: row.roles,
      })),
      // etag: "BwWWja0YfJA=",
      // version: 3
    })
  }

  /**
   * Handle form submission for the create action
   */
  async store({ response, params, request }: HttpContext) {
    return response.notImplemented({
      params: params,
      request: request,
    })
  }

  /**
   * Show individual record
   */
  async show({ response, params, request }: HttpContext) {
    return response.notImplemented({
      params: params,
      request: request,
    })
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ response, params, request }: HttpContext) {
    return response.notImplemented({
      params: params,
      request: request,
    })
  }

  /**
   * Delete record
   */
  async destroy({ response, params, request }: HttpContext) {
    return response.notImplemented({
      params: params,
      request: request,
    })
  }
}
