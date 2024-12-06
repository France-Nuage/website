import type { HttpContext } from '@adonisjs/core/http'
import { createAccountValidator } from '#validators/v1/resource/account'
import Account from '#models/resource/Account'
import Project from '#models/resource/project'
import RequestQueryBuilder from '../../../utils/RequestQueryBuilder.js'

export default class AccountsController {
  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createAccountValidator)
    const account = await Account.create({ ...payload, organization__id: payload.organization__id })

    await Project.create({ name: 'Production', account__id: account.id })

    return response.created(account)
  }

  /**
   * Show individual record
   */
  async show({ params, response, request }: HttpContext) {
    const account = await new RequestQueryBuilder(Account.query())
      .withIncludes(request.qs().includes)
      .applyWhere([['id', '=', params.id]])
      .firstOrFail()

    if (!account) {
      response.notFound(`Account ${params.id} not found`)
    }

    return response.ok(account)
  }
}
