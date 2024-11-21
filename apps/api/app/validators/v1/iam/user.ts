import vine from '@vinejs/vine'

export const createUserValidator = vine.compile(
  vine.object({
    email: vine
      .string()
      .email()
      .unique(async (db, value) => {
        const user = await db.from('users').where('email', value).first()
        return !user
      }),
    lastname: vine.string().trim().optional().nullable(),
    firstname: vine.string().trim().optional().nullable(),
    password: vine.string().minLength(12).maxLength(512).optional().nullable(),
  })
)

export const updateUserValidator = vine.compile(
  vine.object({
    lastname: vine.string().trim().minLength(6),
    firstname: vine.string().trim().minLength(6),
  })
)

/**
 * Validates the post's update action
 */
export const loginUserValidator = vine.compile(
  vine.object({
    email: vine.string().email(),
    password: vine.string(),
  })
)
