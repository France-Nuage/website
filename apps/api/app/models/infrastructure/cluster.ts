import { BaseModel, belongsTo, column, hasOne } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import type { BelongsTo, HasOne } from '@adonisjs/lucid/types/relations'
import { Instance } from '#models/infrastructure/instance'
import { Zone } from '#models/infrastructure/zone'

export class Cluster extends BaseModel {
  public static table = 'infrastructure.clusters'

  @column({ isPrimary: true, columnName: 'cluster__id' })
  declare id: string

  @column.dateTime({ autoCreate: true })
  declare created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updated_at: DateTime

  @belongsTo(() => Instance)
  declare instances: BelongsTo<typeof Instance>

  @hasOne(() => Zone)
  declare zone: HasOne<typeof Zone>
}
