import { test } from '@japa/runner'
import testUtils from '@adonisjs/core/services/test_utils'

test.group('Organizations list', (group) => {
  group.each.setup(() => testUtils.db().withGlobalTransaction())
  group.each.setup(() => testUtils.db().truncate())

  test('store a list of organization', async ({ client }) => {
    const response = await client.get('/organizations')

    response.assertStatus(200)
    response.assertBody({
      data: [
        {
          id: 1,
          email: 'foo@bar.com',
        },
      ],
    })
  })
})
