import { test } from '@japa/runner'
import testUtils from '@adonisjs/core/services/test_utils'

test.group('organization_delete', (group) => {
  group.each.setup(() => testUtils.db().withGlobalTransaction())
  group.each.setup(() => testUtils.db().truncate())

  test('delete an organization', async ({ client }) => {
    const response = await client.delete('/organizations')

    response.assertStatus(200)
    response.assertBody({
      id: 1,
      email: 'foo@bar.com',
    })
  })
})
