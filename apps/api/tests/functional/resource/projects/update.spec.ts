import { test } from '@japa/runner'
import testUtils from "@adonisjs/core/services/test_utils";

test.group('Projects update', (group) => {
  group.each.setup(() => testUtils.db().withGlobalTransaction())
  group.each.setup(() => testUtils.db().truncate())

  test('update a project', async ({ client }) => {
    const response = await client.put('/projects')

    response.assertStatus(200)
    response.assertBody({
      id: 1,
      email: 'foo@bar.com',
    })
  })
})
