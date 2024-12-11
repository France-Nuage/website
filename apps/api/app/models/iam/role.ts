import { BaseModel, column, computed, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import RolePermission from '#models/iam/role_permission'

export default class Role extends BaseModel {
  public static table = 'iam.roles'

  @computed()
  public get object() {
    return 'role'
  }

  @column({ isPrimary: true, columnName: 'role__id' })
  declare id: string

  @column({ columnName: 'service__id' })
  declare serviceId: string

  @column()
  declare description: string

  @hasMany(() => RolePermission, { foreignKey: 'roleId' })
  declare permissions: HasMany<typeof RolePermission>
}
