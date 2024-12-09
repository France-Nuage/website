import type { HttpContext } from '@adonisjs/core/http'
import { createUserValidator, loginUserValidator } from '#validators/v1/iam/user'
import User from '#models/user'
import { randomBytes } from 'node:crypto'
import { DateTime } from 'luxon'
import PasswordReset from '#models/iam/password_reset'
import Env from '#start/env'
import Mail from '#config/mail'

export default class AuthController {
  async register({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createUserValidator)
    const user = await User.create({ ...payload })

    const token = await User.accessTokens.create(user, ['*'])

    return response.created({ token, user })
  }

  async generateToken({ request, response }: HttpContext) {
    const { email, password } = await request.validateUsing(loginUserValidator)
    const user = await User.verifyCredentials(email, password)
    const token = await User.accessTokens.create(user, ['*'])

    return response.ok({
      token: token,
      ...user.serialize(),
    })
  }

  async login({ request, response }: HttpContext) {
    const { email, password } = await request.validateUsing(loginUserValidator)
    const user = await User.verifyCredentials(email, password)
    const token = await User.accessTokens.create(user, ['*'])

    return response.ok(token)
  }

  async logout({ auth, response }: HttpContext) {
    const user = auth.getUserOrFail()
    const token = auth.user?.currentAccessToken.identifier
    if (!token) {
      return response.badRequest({ message: 'Token not found' })
    }
    await User.accessTokens.delete(user, token)
    return response.ok({ message: 'Logged out' })
  }

  async me({ auth, response }: HttpContext) {
    try {
      const user = auth.getUserOrFail()
      return response.ok(user)
    } catch (error) {
      return response.unauthorized({ error: 'User not found' })
    }
  }
  async requestReset({ request, response }: HttpContextContract) {
    const email = request.input('email')

    const user = await User.findBy('email', email)
    if (!user) {
      return response.badRequest({ message: 'Aucun utilisateur trouvé avec cet e-mail' })
    }

    const token = randomBytes(32).toString('hex')
    const expiresAt = DateTime.now().plus({ minutes: 15 })

    await PasswordReset.create({
      email: user.email,
      token: token,
      expiresAt: expiresAt,
    })

    const resetUrl = `${Env.get('APP_URL')}/password/reset/${token}`

    await Mail.send((message) => {
      message
        .to(user.email)
        .from('support@monappli.com', 'Support')
        .subject('Réinitialisation de votre mot de passe')
        .htmlView('emails/reset_password', { url: resetUrl })
    })

    return { message: 'Un lien de réinitialisation vous a été envoyé par e-mail.' }
  }
  async resetPasswordToken({ params, response }) {
    const token = params.token
    const passwordReset = await PasswordReset.findBy('token', token)

    if (!passwordReset) {
      return response.badRequest('Lien invalide')
    }

    if (DateTime.now() > passwordReset.expiresAt) {
      return response.badRequest('Le lien a expiré')
    }

    return response.ok({
      token,
    })
  }
  async reset({ request, response }: HttpContextContract) {
    const token = request.input('token')
    const newPassword = request.input('password')

    const passwordReset = await PasswordReset.findBy('token', token)
    if (!passwordReset) {
      return response.badRequest('Invalid link')
    }

    if (DateTime.now() > passwordReset.expiresAt) {
      return response.badRequest('The link is expired')
    }

    const user = await User.findByOrFail('email', passwordReset.email)

    user.password = newPassword
    await user.save()

    await passwordReset.delete()

    return { message: 'Password reset successfully!' }
  }
}
