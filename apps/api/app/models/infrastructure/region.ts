import { BaseModel, belongsTo, column, hasOne } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import type { BelongsTo, HasOne } from '@adonisjs/lucid/types/relations'
import { Zone } from '#models/infrastructure/zone'
import { Country } from '#models/localisation/country'

export class Region extends BaseModel {
  public static table = 'infrastructure.regions'

  @column({ isPrimary: true, columnName: 'region__id' })
  declare id: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Zone)
  declare zones: BelongsTo<typeof Zone>

  @hasOne(() => Country)
  declare country: HasOne<typeof Country>
}
