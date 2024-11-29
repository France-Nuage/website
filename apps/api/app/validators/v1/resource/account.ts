import vine from '@vinejs/vine'

export const createAccountValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(6),
    organization__id: vine.string().trim(),
  })
)

export const updateAccountValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(6),
    organization__id: vine.string().trim().optional(),
  })
)
