import User from '#models/user'
import Project from '#models/resource/project'
import { BasePolicy } from '@adonisjs/bouncer'
import { AuthorizerResponse } from '@adonisjs/bouncer/types'

export default class ProjectPolicy extends BasePolicy {
  /**
   * Every logged-in user can list an organization
   */
  index(user: User) {
    return false
  }

  /**
   * Every logged-in user can show a project
   */
  show(user: User, project: Project): AuthorizerResponse {
    return false
  }

  /**
   * Every logged-in user can store a project
   */
  store(user: User): AuthorizerResponse {
    return false
  }

  /**
   * Only the project creator can update the project
   */
  update(user: User, project: Project): AuthorizerResponse {
    return false
  }

  /**
   * Only the project creator can destroy the project
   */
  destroy(user: User, project: Project): AuthorizerResponse {
    return false
  }
}
