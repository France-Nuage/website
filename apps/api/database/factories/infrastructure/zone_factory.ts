import factory from '@adonisjs/lucid/factories'
import Zone from '#models/infrastructure/zone'

export const ZoneFactory = factory
  .define(Zone, ({ faker }) => {
    return {
      id: faker.string.uuid(),
      regionId: faker.string.uuid(),
    }
  })
  .build()
