import factory from '@adonisjs/lucid/factories'
import Instance from '#models/infrastructure/instance'

export const InstanceFactory = factory
  .define(Instance, ({ faker }) => {
    return {
      instance__id: faker.string.uuid(),
      name: faker.internet.userName(),
      node: faker.internet.ipv4(),
      cluster__id: faker.string.uuid(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.future(),
    }
  })
  .build()
