import factory from '@adonisjs/lucid/factories'
import Version from '#models/version'

export const VersionFactory = factory
  .define(Version, ({ faker }) => {
    return {
      version__id: faker.string.uuid(),
      name: faker.company.catchPhrase(),
      description: faker.lorem.sentence(),
      available_at: faker.date.soon(),
      service__id: faker.string.uuid(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.future(),
    }
  })
  .build()
