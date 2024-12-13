import BasePolicy from '#policies/BasePolicy'
import authorization from '#services/authorization'
import User from '#models/user'

export default class PolicyPolicy extends BasePolicy {
  /**
   * Every logged-in user can list an organization
   */
  index(user: User) {
    return authorization.check(
      [
        'resourcemanager.projects.getIamPolicy',
        'resourcemanager.organizations.getIamPolicy',
        'resourcemanager.folders.getIamPolicy',
      ],
      user
    )
  }
}
