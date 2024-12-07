import { test } from '@japa/runner'
import testUtils from '@adonisjs/core/services/test_utils'

test.group('Folders show', (group) => {
  group.each.setup(() => testUtils.db().withGlobalTransaction())
  group.each.setup(() => testUtils.db().truncate())

  test('get a folder', async ({ client }) => {
    const response = await client.get('/folders')

    response.assertStatus(200)
    response.assertBody({
      id: 1,
      email: 'foo@bar.com',
    })
  })
})
