import { BaseModel, belongsTo, column, computed, manyToMany } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'
import GroupRole from '#models/iam/group_role'
import Permission from '#models/iam/permission'

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

  @belongsTo(() => GroupRole)
  declare group: BelongsTo<typeof GroupRole>

  @manyToMany(() => Permission)
  declare permissions: ManyToMany<typeof Permission>
}
