import { BaseModel, column, computed, hasMany } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Role from '#models/iam/role'

export default class RoleGroup extends BaseModel {
  public static table = 'iam.role_groups'

  @computed()
  public get object() {
    return 'group'
  }

  @column({ isPrimary: true, columnName: 'role_group__id' })
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

  @hasMany(() => Role)
  declare roles: HasMany<typeof Role>
}
