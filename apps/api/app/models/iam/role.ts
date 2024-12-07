import { BaseModel, column, computed, manyToMany } from '@adonisjs/lucid/orm'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'
import Permission from '#models/iam/permission'

export default class Role extends BaseModel {
  public static table = 'iam.roles'

  @computed()
  public get object() {
    return 'role'
  }

  @column({ isPrimary: true, columnName: 'role__id' })
  declare id: string

  @column({ isPrimary: true, columnName: 'service__id' })
  declare serviceId: string

  @column()
  declare description: string

  @manyToMany(() => Permission)
  declare permissions: ManyToMany<typeof Permission>
}
