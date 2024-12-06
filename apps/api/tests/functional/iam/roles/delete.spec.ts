import { test } from '@japa/runner'
import testUtils from '@adonisjs/core/services/test_utils'

test.group('Roles delete', (group) => {
  group.each.setup(() => testUtils.db().withGlobalTransaction())
  group.each.setup(() => testUtils.db().truncate())

  test('delete a role', async ({ client }) => {
    const response = await client.delete('/roles')

    response.assertStatus(200)
    response.assertBody({
      id: 1,
      email: 'foo@bar.com',
    })
  })
})
