import { test } from '@japa/runner'

test.group('Roles delete', () => {
  test('delete a role', async ({ client }) => {
    const response = await client.get('/roles')

    response.assertStatus(200)
    response.assertBody({
      id: 1,
      email: 'foo@bar.com',
    })
  })
})
