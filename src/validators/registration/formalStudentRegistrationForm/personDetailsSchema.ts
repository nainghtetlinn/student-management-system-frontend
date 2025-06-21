import { z } from 'zod'

import { nameSchema } from '../nameSchema'
import { nrcSchema } from '../nrcSchema'

export const personDetailsSchema = z.object({
  name: nameSchema,
  nrc: nrcSchema,
  acsc: z.string(),
  ethnicity: z.string().min(1),
  religion: z.string().min(1),
  placeOfBirth: z.string().min(1),
  dateOfBirth: z.coerce.date(),
})
