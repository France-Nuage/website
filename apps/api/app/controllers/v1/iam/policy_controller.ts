import { HttpContext } from '@adonisjs/core/http'
import PolicyPolicy from '#policies/iam/policy_policy'
import db from '@adonisjs/lucid/services/db'

const filterModelKey = {
  organization: 'organizationId',
  folder: 'folderId',
  project: 'projectId',
}

const filterSQLKey = {
  organization: 'organization__id',
  folder: 'folder__id',
  project: 'project__id',
}

export default class PoliciesController {
  async index({ response, bouncer, params }: HttpContext) {
    await bouncer.with(PolicyPolicy).authorize('index')

    const rows = await db
      .from('member.users as u')
      .join('iam.user_resource_policy_binding as b', 'u.id', 'b.member__id')
      .join('iam.resource_policy as p', 'b.policy__id', 'p.policy__id')
      .where(`p.${filterSQLKey[params.resource]}`, params.resourceId)
      .groupBy('b.role__id')
      .select('b.role__id')
      .select(db.raw('array_agg(DISTINCT u.email) as members'))

    return response.ok({
      bindings: rows.map((row) => ({
        role: row.role__id,
        members: row.members,
      })),
      // etag: 'BwWWja0YfJA=',
      // version: 3,
    })
  }
}
