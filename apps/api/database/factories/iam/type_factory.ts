import factory from '@adonisjs/lucid/factories'
import Type from '#models/iam/type'

export const TypeFactory = factory
  .define(Type, ({ faker }) => {
    return {
      type__id: faker.string.uuid(),
      description: faker.lorem.sentence(),
    }
  })
  .build()
