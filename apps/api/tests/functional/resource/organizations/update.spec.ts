import { test } from '@japa/runner'
import testUtils from '@adonisjs/core/services/test_utils'

test.group('Organizations update', (group) => {

  group.each.setup(() => testUtils.db().withGlobalTransaction())
  group.each.setup(() => testUtils.db().truncate())

  test('update an organization', async ({ client }) => {
    const response = await client.put('/organizations')

    response.assertStatus(200)
    response.assertBody({
      id: 1,
      email: 'foo@bar.com',
    })
  })
})
