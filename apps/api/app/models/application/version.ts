import {BaseModel, belongsTo, column, computed} from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import Organization from "#models/iam/organization";
import type {BelongsTo} from "@adonisjs/lucid/types/relations";
import Application from "#models/application/application";

export default class Version extends BaseModel {
  public static table = 'version.versions'

  @computed()
  public get object() {
    return 'version'
  }

  @column({ isPrimary: true, columnName: 'version__id' })
  declare id: string

  @column()
  declare name: string

  @column()
  declare description: string

  @column()
  declare available_at: string

  @column({ columnName: 'application__id' })
  declare application__id: string

  @column.dateTime({ autoCreate: true })
  declare created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updated_at: DateTime

  @belongsTo(() => Application)
  declare application: BelongsTo<typeof Application>
}
