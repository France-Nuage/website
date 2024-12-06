import factory from '@adonisjs/lucid/factories'
import Permission from '#models/iam/permission'

export const PermissionFactory = factory
  .define(Permission, ({ faker }) => {
    return {
      permission__id: faker.string.uuid(),
      name: faker.lorem.word(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.future(),
    }
  })
  .build()
