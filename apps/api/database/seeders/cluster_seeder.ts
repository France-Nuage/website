import { BaseSeeder } from '@ioc:Adonis/Lucid/Seeder'
import { ClusterFactory } from '#database/factories/infrastructure/ClusterFactory'
import { Zone } from '#models/infrastructure/zone'

export default class ClusterSeeder extends BaseSeeder {
  public static async run() {
    const zones = await Zone.all()
    for (const zone of zones) {
      await ClusterFactory.merge({ zone__id: zone.zone__id }).createMany(3) // 3 clusters par zone
    }
  }
}
