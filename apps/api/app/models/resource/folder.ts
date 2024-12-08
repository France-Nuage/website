import { BaseModel, belongsTo, column, computed, hasMany, hasOne } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import type { BelongsTo, HasMany, HasOne } from '@adonisjs/lucid/types/relations'
import Project from '#models/resource/project'
import Organization from '#models/resource/organization'

export default class Folder extends BaseModel {
  public static table = 'resource.folders'

  @computed()
  public get object() {
    return 'folder'
  }

  @column({ isPrimary: true, columnName: 'folder__id' })
  declare id: string

  @column()
  declare name: string

  @column({ columnName: 'project__id' })
  declare projectId: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Project, { localKey: 'id', foreignKey: 'projectId' })
  declare project: BelongsTo<typeof Project>
}
