import factory from '@adonisjs/lucid/factories'
import Service from '#models/iam/service'

export const ServiceFactory = factory
  .define(Service, ({ faker }) => {
    return {
      service__id: faker.string.uuid(),
      description: faker.lorem.sentence(),
    }
  })
  .build()
