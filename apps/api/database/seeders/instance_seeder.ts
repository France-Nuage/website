import { BaseSeeder } from '@ioc:Adonis/Lucid/Seeder'
import { InstanceFactory } from '#database/factories/infrastructure/InstanceFactory'
import { Cluster } from '#models/infrastructure/cluster'

export default class extends BaseSeeder {
  public static async run() {
    const clusters = await Cluster.all()
    for (const cluster of clusters) {
      await InstanceFactory.merge({ cluster__id: cluster.cluster__id }).createMany(5) // 5 instances par cluster
    }
  }
}
