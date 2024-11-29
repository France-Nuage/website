import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { CountryFactory } from '#database/factories/localisation/CountryFactory'

export default class extends BaseSeeder {
  public static async run() {
    await CountryFactory.createMany(10)
  }
}
