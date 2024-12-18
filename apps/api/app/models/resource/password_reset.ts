// app/Models/PasswordReset.ts
import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class PasswordReset extends BaseModel {
  public static table = 'iam.password_reset'

  @column({ isPrimary: true })
  public id: number

  @column()
  public email: string

  @column()
  public token: string

  @column.dateTime()
  public expiresAt: DateTime
}
