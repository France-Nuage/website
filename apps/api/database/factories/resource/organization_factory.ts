import factory from '@adonisjs/lucid/factories'
import Organization from '#models/resource/organization'

export const OrganizationFactory = factory
  .define(Organization, ({ faker }) => {
    return {
      organization__id: faker.string.uuid(),
      name: faker.company.name(),
      email: faker.internet.email(),
      fax: faker.phone.number({ style: 'human' }),
      phone: faker.phone.number({ style: 'human' }),
      establishment_identifier: faker.string.uuid(),
      account__id: faker.string.uuid(),
      owner__id: faker.number.int({ min: 1, max: 100 }),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.future(),
    }
  })
  .build()
