import { BaseModel, belongsTo, column, computed, hasMany } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import Project from '#models/resource/project'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import User from '#models/user'
import Account from '#models/billing/Account'

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
  declare environment__id: string

  @column({ columnName: 'owner__id' })
  declare owner__id: number

  @column({ columnName: 'account__id' })
  declare account__id: string

  @column.dateTime({ autoCreate: true })
  declare created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updated_at: DateTime

  @hasMany(() => Project)
  declare projects: HasMany<typeof Project>

  @belongsTo(() => Account)
  declare account: BelongsTo<typeof Account>

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>
}
