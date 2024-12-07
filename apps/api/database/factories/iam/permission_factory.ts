import factory from '@adonisjs/lucid/factories'
import Permission from '#models/iam/permission'

export const PermissionFactory = factory
  .define(Permission, ({ faker }) => {
    return {
      service__id: faker.string.uuid(),
      type__id: faker.string.uuid(),
      verb__id: faker.string.uuid(),
    }
  })
  .build()
