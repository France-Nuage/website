import factory from '@adonisjs/lucid/factories'
import Zone from '#models/infrastructure/zone'

export const ZoneFactory = factory
  .define(Zone, ({ faker }) => {
    return {
      zone__id: faker.string.uuid(),
      name: faker.address.city(),
      region__id: faker.string.uuid(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.future(),
    }
  })
  .build()
