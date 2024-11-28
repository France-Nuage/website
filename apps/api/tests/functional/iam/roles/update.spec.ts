import { test } from '@japa/runner'
import testUtils from '@adonisjs/core/services/test_utils'

test.group('User', (group) => {
  group.each.setup(() => testUtils.db().withGlobalTransaction())
  group.each.setup(() => testUtils.db().truncate())
})

test.group('Users list', () => {
  test('get a user', async ({ client }) => {
    const response = await client.get('/users')

    response.assertStatus(200)
    response.assertBody({
      id: 1,
      email: 'foo@bar.com',
    })
  })
})
