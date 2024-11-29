import factory from '@adonisjs/lucid/factories'
import Account from '#models/resource/account'

export const AccountFactory = factory
  .define(Account, ({ faker }) => {
    return {
      account__id: faker.string.uuid(),
      stripe_customer__id: faker.string.uuid(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.future(),
    }
  })
  .build()
