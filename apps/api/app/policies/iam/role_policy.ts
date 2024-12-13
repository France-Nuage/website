import BasePolicy from '#policies/BasePolicy'
import authorization from '#services/authorization'
import User from '#models/user'

export default class RolePolicy extends BasePolicy {
  /**
   * Every logged-in user can list an organization
   */
  index(user: User) {
    this.init()
    return authorization.check(['cloudasset.assets.listIamRoles'], user, this.resources)
  }

  /**
   * Every logged-in user can list an organization
   */
  show(user: User) {
    this.init()
    return authorization.check(['cloudasset.assets.listIamRoles'], user, this.resources)
  }
}
