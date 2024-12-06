import factory from '@adonisjs/lucid/factories'
import Region from '#models/infrastructure/region'

export const RegionFactory = factory
  .define(Region, ({ faker }) => {
    return {
      region__id: faker.string.uuid(),
      name: faker.address.state(),
      country__id: faker.string.uuid(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.future(),
    }
  })
  .build()
