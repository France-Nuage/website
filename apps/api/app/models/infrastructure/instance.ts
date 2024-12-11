import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import type { HasOne } from '@adonisjs/lucid/types/relations'

export class Instance extends BaseModel {
  public static table = 'infrastructure.instances'

  @column({ isPrimary: true, columnName: 'instance__id' })
  declare id: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasOne(() => Instance)
  declare cluster: HasOne<typeof Instance>
}
