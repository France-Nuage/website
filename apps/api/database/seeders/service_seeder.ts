import { BaseSeeder } from '@ioc:Adonis/Lucid/Seeder'
import { ServiceFactory } from '#database/factories/service/ServiceFactory'
import { VersionFactory } from '#database/factories/service/VersionFactory'

export default class extends BaseSeeder {
  public static async run() {
    const services = await ServiceFactory.createMany(5) // Crée 5 services

    for (const service of services) {
      await VersionFactory.merge({ service__id: service.service__id }).createMany(3) // 3 versions par service
    }
  }
}
