import factory from '@adonisjs/lucid/factories'
import Region from '#models/infrastructure/region'

export const RegionFactory = factory
  .define(Region, ({ faker }) => {
    return {
      id: faker.string.uuid(),
      countryId: faker.string.uuid(),
    }
  })
  .build()
