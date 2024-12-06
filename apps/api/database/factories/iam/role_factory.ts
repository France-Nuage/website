import factory from '@adonisjs/lucid/factories'
import Role from '#models/iam/role'

export const RoleFactory = factory
  .define(Role, ({ faker }) => {
    return {
      role__id: faker.string.uuid(),
      name: faker.name.jobType(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.future(),
    }
  })
  .build()
