import { BaseSeeder } from '@ioc:Adonis/Lucid/Seeder'
import { Country } from '#models/localisation/country'
import { RegionFactory } from '#database/factories/infrastructure/region_factory'

export default class ZoneSeeder extends BaseSeeder {
  public static async run() {
    const regions = await Country.all()
    for (const region of regions) {
      await RegionFactory.merge({ country__id: region.country__id }).createMany(2) // 2 zones par région
    }
  }
}
