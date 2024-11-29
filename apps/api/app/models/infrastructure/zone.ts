import { BaseModel, belongsTo, column, hasOne } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import type { BelongsTo, HasOne } from '@adonisjs/lucid/types/relations'
import { Cluster } from '#models/infrastructure/cluster'
import { Region } from '#models/infrastructure/region'

export class Zone extends BaseModel {
  public static table = 'infrastructure.zones'

  @column({ isPrimary: true, columnName: 'zone__id' })
  declare id: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Cluster)
  declare clusters: BelongsTo<typeof Cluster>

  @hasOne(() => Region)
  declare region: HasOne<typeof Region>
}
