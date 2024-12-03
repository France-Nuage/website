import { test } from '@japa/runner'
import testUtils from '@adonisjs/core/services/test_utils'
import User from "#models/user";

test.group('organization_list', (group) => {
  let user = null
  group.each.setup(() => testUtils.db().withGlobalTransaction())
  group.each.setup(() => testUtils.db().truncate())
  group.each.setup(async () => {
    user = await User.create({ email: 'alex02.cailler@gmail.com', password: '123456' })
  })

  test('store a list of organization', async ({ client, assert }) => {
    const response = await client.get('/api/v1/organizations').loginAs(user)

    response.assertStatus(200)
    assert.snapshot(response.body()).match()
  })
})
