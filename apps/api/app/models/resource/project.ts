import { BaseModel, belongsTo, column, computed } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Folder from '#models/resource/folder'

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

  @column({ columnName: 'account__id' })
  declare accountId: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Account, { localKey: 'id', foreignKey: 'accountId' })
  declare account: BelongsTo<typeof Account>

  @belongsTo(() => Folder)
  declare folder: BelongsTo<typeof Folder>
}
