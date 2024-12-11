import User from '#models/user'
import Organization from '#models/resource/organization'
import { AuthorizerResponse } from '@adonisjs/bouncer/types'
import authorization from '#services/authorization'
import { inject } from '@adonisjs/core'
import BasePolicy from '#policies/BasePolicy'

@inject()
export default class OrganizationPolicy extends BasePolicy {
  /**
   * Every logged-in user can list an organization
   */
  index(user: User) {
    return authorization.check(['resourcemanager.organizations.get'], user)
  }

  /**
   * Every logged-in user can show an organization
   */
  show(user: User): AuthorizerResponse {
    return authorization.check(['resourcemanager.organizations.get'], user, {
      type: 'organization',
      id: this.ctx.params.id,
    })
  }

  /**
   * Every logged-in user can store an organization
   */
  store(user: User): AuthorizerResponse {
    return false
  }

  /**
   * Only the organization creator can update the organization
   */
  update(user: User, organization: Organization): AuthorizerResponse {
    return false
  }

  /**
   * Only the organization creator can destroy the organization
   */
  destroy(user: User, organization: Organization): AuthorizerResponse {
    return false
  }
}
