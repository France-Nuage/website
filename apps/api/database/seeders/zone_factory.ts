import { BaseSeeder } from '@ioc:Adonis/Lucid/Seeder'
import { ZoneFactory } from '#database/factories/infrastructure/ZoneFactory'
import { Region } from '#models/infrastructure/region'

export default class ZoneSeeder extends BaseSeeder {
  public static async run() {
    const regions = await Region.all()
    for (const region of regions) {
      await ZoneFactory.merge({ region__id: region.region__id }).createMany(2) // 2 zones par région
    }
  }
}
