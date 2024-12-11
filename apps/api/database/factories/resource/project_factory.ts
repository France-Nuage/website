import factory from '@adonisjs/lucid/factories'
import Project from '#models/resource/project'

export const ProjectFactory = factory
  .define(Project, ({ faker }) => {
    return {
      project__id: faker.string.uuid(),
      name: faker.company.catchPhrase(),
      description: faker.lorem.sentence(),
      organization__id: faker.string.uuid(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.future(),
    }
  })
  .build()
