import { z } from 'zod'

import { personDetailsSchema } from './personDetailsSchema'

export const fatherDetailsSchema = z.object({
  father: personDetailsSchema,
})
export const motherDetailsSchema = z.object({
  mother: personDetailsSchema,
})

export type TFatherDetailsSchema = z.infer<typeof fatherDetailsSchema>
export type TMotherDetailsSchema = z.infer<typeof motherDetailsSchema>
