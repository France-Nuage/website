import type { HttpContext } from '@adonisjs/core/http'
import { createAccountValidator } from '#validators/v1/resource/account'
import Account from '#models/resource/Account'
import Project from '#models/resource/project'

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
}
