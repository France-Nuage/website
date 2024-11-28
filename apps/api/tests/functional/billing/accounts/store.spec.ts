import { test } from '@japa/runner'
import testUtils from '@adonisjs/core/services/test_utils'

test.group('Accounts store', (group) => {
  group.each.setup(() => testUtils.db().withGlobalTransaction())
  group.each.setup(() => testUtils.db().truncate())

  test('store an account', async ({ client }) => {
    const response = await client.post('/accounts')

    response.assertStatus(200)
    response.assertBody({
      id: 1,
      email: 'foo@bar.com',
    })
  })
})
