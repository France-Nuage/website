import factory from '@adonisjs/lucid/factories'
import Folder from '#models/resource/folder'

export const FolderFactory = factory
  .define(Folder, ({ faker }) => {
    return {
      folder__id: faker.string.uuid(),
      name: faker.company.catchPhrase(),
      description: faker.lorem.sentence(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.future(),
    }
  })
  .build()
