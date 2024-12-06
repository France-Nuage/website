import factory from '@adonisjs/lucid/factories'
import Service from '#models/service'

export const ServiceFactory = factory
  .define(Service, ({ faker }) => {
    return {
      service__id: faker.string.uuid(),
      name: faker.company.name(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.future(),
    }
  })
  .build()
