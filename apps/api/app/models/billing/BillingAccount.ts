import { BaseModel, column, computed } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'

export default class BillingAccount extends BaseModel {
  public static table = 'billing.billing_accounts'

  @computed()
  public get object() {
    return 'billing_account'
  }

  @column({ isPrimary: true, columnName: 'billing_account_id' })
  declare id: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
