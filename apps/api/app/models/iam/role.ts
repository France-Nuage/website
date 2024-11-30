import { BaseModel, belongsTo, column, computed } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import RoleGroup from '#models/iam/role_group'

export default class Role extends BaseModel {
  public static table = 'iam.roles'

  @computed()
  public get object() {
    return 'role'
  }

  @column({ isPrimary: true, columnName: 'role__id' })
  declare id: string

  @column()
  declare name: string

  @column()
  declare title: string

  @column()
  declare description: string

  @column.dateTime({ autoCreate: true })
  declare created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updated_at: DateTime

  @belongsTo(() => RoleGroup)
  declare group: BelongsTo<typeof RoleGroup>
}
