import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import Role from '#models/iam/role'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'

export default class Permission extends BaseModel {
  public static table = 'iam.permissions'

  @column({ isPrimary: true, columnName: 'permission__id' })
  declare id: string

  @column()
  declare name: string

  @column()
  declare title: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @manyToMany(() => Role)
  declare roles: ManyToMany<typeof Role>
}
