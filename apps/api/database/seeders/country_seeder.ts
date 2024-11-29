import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { CountryFactory } from '#database/factories/localisation/country_factory'

export default class extends BaseSeeder {
  public static async run() {
    await CountryFactory.createMany(10)
  }
}
