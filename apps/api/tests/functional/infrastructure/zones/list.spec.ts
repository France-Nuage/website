import { test } from '@japa/runner'
import testUtils from '@adonisjs/core/services/test_utils'

test.group('Zones list', (group) => {
  group.each.setup(() => testUtils.db().withGlobalTransaction())
  group.each.setup(() => testUtils.db().truncate())

  test('get a list of zone', async ({ client }) => {
    const response = await client.get('/zones')

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
