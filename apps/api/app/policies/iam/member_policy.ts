import BasePolicy from '#policies/BasePolicy'
import authorization from '#services/authorization'
import User from '#models/user'

export default class MemberPolicy extends BasePolicy {
  /**
   * Every logged-in user can list an organization
   */
  async index(user: User) {
    await this.init()
    return authorization.check(
      [
        'resourcemanager.projects.getIamPolicy',
        'resourcemanager.organizations.getIamPolicy',
        'resourcemanager.folders.getIamPolicy',
      ],
      user,
      this.resources
    )
  }

  async show(user: User) {
    await this.init()
    return authorization.check(
      [
        'resourcemanager.projects.getIamPolicy',
        'resourcemanager.organizations.getIamPolicy',
        'resourcemanager.folders.getIamPolicy',
      ],
      user,
      this.resources
    )
  }
}
