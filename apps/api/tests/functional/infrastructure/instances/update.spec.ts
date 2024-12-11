import { test } from '@japa/runner'
import testUtils from '@adonisjs/core/services/test_utils'

test.group('Instances update', (group) => {
  group.each.setup(() => testUtils.db().withGlobalTransaction())
  group.each.setup(() => testUtils.db().truncate())

  test('update a instance', async ({ client }) => {
    const response = await client.put('/instances')

    response.assertStatus(200)
    response.assertBody({
      id: 1,
      email: 'foo@bar.com',
    })
  })
})
