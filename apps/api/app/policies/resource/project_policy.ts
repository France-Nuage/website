// import User from '#models/user'
// import Project from '#models/resource/project'
import { BasePolicy } from '@adonisjs/bouncer'
import { AuthorizerResponse } from '@adonisjs/bouncer/types'

export default class ProjectPolicy extends BasePolicy {
  /**
   * Every logged-in user can list an organization
   */
  index(): AuthorizerResponse {
    return false
  }

  /**
   * Every logged-in user can show a project
   */
  show(): AuthorizerResponse {
    return false
  }

  /**
   * Every logged-in user can store a project
   */
  store(): AuthorizerResponse {
    return false
  }

  /**
   * Only the project creator can update the project
   */
  update(): AuthorizerResponse {
    return false
  }

  /**
   * Only the project creator can destroy the project
   */
  destroy(): AuthorizerResponse {
    return false
  }
}
