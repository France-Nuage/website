import factory from '@adonisjs/lucid/factories'
import Permission from '#models/iam/permission'

export const AccountBillingFactory = factory
  .define(Permission, ({ faker }) => {
    return {
      account_billing__id: faker.string.uuid(),
      name: faker.lorem.word(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.future(),
    }
  })
  .build()
