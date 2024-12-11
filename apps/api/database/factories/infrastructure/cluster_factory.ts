import factory from '@adonisjs/lucid/factories'
import Cluster from '#models/infrastructure/cluster'

export const ClusterFactory = factory
  .define(Cluster, ({ faker }) => {
    return {
      cluster__id: faker.string.uuid(),
      name: faker.internet.domainWord(),
      zone__id: faker.string.uuid(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.future(),
    }
  })
  .build()
