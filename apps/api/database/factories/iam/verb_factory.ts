import factory from '@adonisjs/lucid/factories'
import Verb from '#models/iam/verb'

export const VerbFactory = factory
  .define(Verb, ({ faker }) => {
    return {
      id: faker.string.uuid(),
    }
  })
  .build()
