import {BaseModel, belongsTo, column, computed, hasMany} from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import Project from '#models/iam/project'
import type {BelongsTo, HasMany} from '@adonisjs/lucid/types/relations'
import Environment from "#models/iam/environment";

export default class Organization extends BaseModel {
  public static table = 'iam.organizations'

  @computed()
  public get object() {
    return 'organization'
  }

  @column({ isPrimary: true, columnName: 'organization__id' })
  declare id: string

  @column()
  declare name: string

  @column({ columnName: 'environment__id' })
  declare environment_id: string

  @column.dateTime({ autoCreate: true })
  declare created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updated_at: DateTime

  @hasMany(() => Project)
  declare projects: HasMany<typeof Project>

  @belongsTo(() => Environment)
  declare environment: BelongsTo<typeof Environment>
}
