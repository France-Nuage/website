import { test } from '@japa/runner'

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
