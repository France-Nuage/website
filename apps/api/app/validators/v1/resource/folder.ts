import vine from '@vinejs/vine'

export const createFolderValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(6),
    organization__id: vine.string().trim(),
  })
)

export const updateFolderValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(6),
    organization__id: vine.string().trim().optional(),
  })
)
