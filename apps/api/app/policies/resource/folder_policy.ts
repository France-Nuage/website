import User from '#models/user'
import Folder from '#models/resource/folder'
import { AuthorizerResponse } from '@adonisjs/bouncer/types'
import BasePolicy from "#policies/BasePolicy";
import authorization from "#services/authorization";

export default class FolderPolicy extends BasePolicy {
  /**
   * Every logged-in user can list an organization
   */
  async index(user: User): Promise<AuthorizerResponse> {
    await this.init()
    return authorization.check(['resourcemanager.folders.list'], user, this.resources)
  }

  /**
   * Every logged-in user can show a folder
   */
  async show(user: User, folder: Folder): Promise<AuthorizerResponse> {
    await this.init()
    return authorization.check(['resourcemanager.folders.get'], user, this.resources)
  }

  /**
   * Every logged-in user can store a folder
   */
  async store(user: User): Promise<AuthorizerResponse> {
    await this.init()
    return authorization.check(['resourcemanager.folders.create'], user, this.resources)
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
