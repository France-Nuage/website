import { BaseModel, belongsTo, column, computed } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import Organization from '#models/resource/organization'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Project extends BaseModel {
  public static table = 'resource.projects'

  @computed()
  public get object() {
    return 'project'
  }

  @column({ isPrimary: true, columnName: 'project__id' })
  declare id: string

  @column()
  declare name: string

  @column({ columnName: 'organization__id' })
  declare organization__id: string

  @column.dateTime({ autoCreate: true })
  declare created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updated_at: DateTime

  @belongsTo(() => Organization)
  declare organization: BelongsTo<typeof Organization>
}
