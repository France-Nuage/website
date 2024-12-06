import { test } from '@japa/runner'
import testUtils from "@adonisjs/core/services/test_utils";

test.group('Accounts list', (group) => {
  group.each.setup(() => testUtils.db().withGlobalTransaction())
  group.each.setup(() => testUtils.db().truncate())

  test('get an account', async ({ client }) => {
    const response = await client.get('/accounts')

    response.assertStatus(200)
    response.assertBody({
      id: 1,
      email: 'foo@bar.com',
    })
  })
})
