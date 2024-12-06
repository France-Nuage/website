import { BaseModel, column, computed, hasMany } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Account from '#models/resource/Account'

export default class Organization extends BaseModel {
  public static table = 'resource.organizations'

  @computed()
  public get object() {
    return 'organization'
  }

  @column({ isPrimary: true, columnName: 'organization__id' })
  declare id: string

  @column()
  declare name: string

  @column({ columnName: 'environment__id' })
  declare environmentId: string

  @column({ columnName: 'owner__id' })
  declare ownerId: number

  @column({ columnName: 'account__id' })
  declare accountId: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Account)
  declare accounts: HasMany<typeof Account>
}
