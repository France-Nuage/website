import { BaseModel, column, computed, hasMany } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import Version from '#models/service/version'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Service extends BaseModel {
  public static table = 'service.services'

  @computed()
  public get object() {
    return 'service'
  }

  @column({ isPrimary: true, columnName: 'service__id' })
  declare id: string

  @column()
  declare name: string

  @column.dateTime({ autoCreate: true })
  declare created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updated_at: DateTime

  @hasMany(() => Version)
  declare versions: HasMany<typeof Version>
}
