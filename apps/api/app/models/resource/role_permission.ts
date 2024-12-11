import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Role from '#models/iam/role'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class RolePermission extends BaseModel {
  public static table = 'iam.role__permission'

  @column({ isPrimary: true, columnName: 'role__id' })
  declare roleId: string

  @column({ isPrimary: true, columnName: 'service__id' })
  declare serviceId: string

  @column({ isPrimary: true, columnName: 'permission_service__id' })
  declare permissionServiceId: string

  @column({ isPrimary: true, columnName: 'permission_type__id' })
  declare permissionTypeId: string

  @column({ isPrimary: true, columnName: 'permission_verb__id' })
  declare permissionVerbId: string

  @belongsTo(() => Role, { localKey: 'roleId', foreignKey: 'roleId' })
  declare role: BelongsTo<typeof Role>
}
