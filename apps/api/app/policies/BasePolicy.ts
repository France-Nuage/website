import { BasePolicy as BouncerBasePolicy } from '@adonisjs/bouncer'
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'

@inject()
export default class BasePolicy extends BouncerBasePolicy {
  public resource: { id: string | string[] | undefined; type: string } = { type: null, id: null }

  constructor(protected ctx: HttpContext) {
    super()
    if (this.ctx) {
      if (ctx.request.headers()['x-project']) {
        this.resource = { type: 'project', id: ctx.request.headers()['x-project'] }
      } else if (ctx.request.headers()['x-folder']) {
        this.resource = { type: 'folder', id: ctx.request.headers()['x-folder'] }
      } else if (ctx.request.headers()['x-organization']) {
        this.resource = { type: 'organization', id: ctx.request.headers()['x-organization'] }
      }
    }
  }
}
