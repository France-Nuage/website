import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { Region } from '#models/infrastructure/region'

export class Country extends BaseModel {
  public static table = 'localisation.countries'

  @column({ isPrimary: true, columnName: 'country__id' })
  declare id: string

  @column.dateTime({ autoCreate: true })
  declare created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updated_at: DateTime

  @belongsTo(() => Region)
  declare regions: BelongsTo<typeof Region>
}
