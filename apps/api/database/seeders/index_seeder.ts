import { BaseSeeder } from '@adonisjs/lucid/seeders'
import app from '@adonisjs/core/services/app'

export default class IndexSeeder extends BaseSeeder {
  private async seed(Seeder: { default: typeof BaseSeeder }) {
    /**
     * Do not run when not in a environment specified in Seeder
     */
    if (
      !Seeder.default.environment ||
      (!Seeder.default.environment.includes('development') && app.inDev) ||
      (!Seeder.default.environment.includes('testing') && app.inTest) ||
      (!Seeder.default.environment.includes('production') && app.inProduction)
    ) {
      return
    }

    await new Seeder.default(this.client).run()
  }

  public async run() {
    await this.seed(await import('#database/seeders/service_seeder'))
    await this.seed(await import('#database/seeders/country_seeder'))
    await this.seed(await import('#database/seeders/region_seeder'))
    await this.seed(await import('#database/seeders/zone_seeder'))
    await this.seed(await import('#database/seeders/cluster_seeder'))
    await this.seed(await import('#database/seeders/instance_seeder'))
  }
}
