import { BaseModel, column, computed, hasMany } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import Organization from '#models/resource/organization'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Account extends BaseModel {
  public static table = 'billing.accounts'

  @computed()
  public get object() {
    return 'project'
  }

  @column.dateTime({ autoCreate: true })
  declare created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updated_at: DateTime

  @hasMany(() => Organization)
  declare organizations: HasMany<typeof Organization>
}
