import BasePolicy from '#policies/BasePolicy'
import authorization from '#services/authorization'
import User from '#models/user'

export default class BillingPolicy extends BasePolicy {
  async index(user: User) {
    await this.init()
    return authorization.check([], user, this.resources)
  }

  async show(user: User) {
    await this.init()
    return authorization.check([], user, this.resources)
  }

  async store(user: User) {
    await this.init()
    return authorization.check([], user, this.resources)
  }

  async update(user: User) {
    await this.init()
    return authorization.check([], user, this.resources)
  }

  async destroy(user: User) {
    await this.init()
    return authorization.check([], user, this.resources)
  }
}
