import User from '#models/user'
import Folder from '#models/resource/folder'
import { BasePolicy } from '@adonisjs/bouncer'
import { AuthorizerResponse } from '@adonisjs/bouncer/types'

export default class FolderPolicy extends BasePolicy {
  /**
   * Every logged-in user can list an organization
   */
  index(user: User) {
    return false
  }

  /**
   * Every logged-in user can show a folder
   */
  show(user: User, folder: Folder): AuthorizerResponse {
    return false
  }

  /**
   * Every logged-in user can store a folder
   */
  store(user: User): AuthorizerResponse {
    return false
  }

  /**
   * Only the folder creator can update the folder
   */
  update(user: User, folder: Folder): AuthorizerResponse {
    return false
  }

  /**
   * Only the folder creator can destroy the folder
   */
  destroy(user: User, folder: Folder): AuthorizerResponse {
    return true
  }
}
