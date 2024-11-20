import { BaseModel, column, computed, hasMany } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Organization from '#models/iam/organization'

export default class Environment extends BaseModel {
  public static table = 'iam.environments'

  @computed()
  public get object() {
    return 'environment'
  }

  @column({ isPrimary: true, columnName: 'environment__id' })
  declare id: string

  @column()
  declare name: string

  @column.dateTime({ autoCreate: true })
  declare created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updated_at: DateTime

  @hasMany(() => Organization)
  declare organizations: HasMany<typeof Organization>
}
