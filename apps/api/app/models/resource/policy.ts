import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Organization from '#models/resource/organization'
import Project from '#models/resource/project'
import Folder from '#models/resource/folder'

export default class Policy extends BaseModel {
  public static table = 'iam.resource_policy'

  @column({ columnName: 'policy__id' })
  declare id: string

  @column({ columnName: 'organization__id' })
  declare organizationId: string

  @column({ columnName: 'folder__id' })
  declare folderId: string

  @column({ columnName: 'project__id' })
  declare projectId: string

  @belongsTo(() => Organization)
  declare organization: BelongsTo<typeof Organization>

  @belongsTo(() => Project)
  declare project: BelongsTo<typeof Project>

  @belongsTo(() => Folder)
  declare folder: BelongsTo<typeof Folder>
}
