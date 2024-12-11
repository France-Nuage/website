import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Verb extends BaseModel {
  public static table = 'iam.verbs'

  @column({ isPrimary: true, columnName: 'verb__id' })
  declare id: string
}
