import { z } from 'zod'

import { nameSchema } from '../nameSchema'
import { nrcSchema } from '../nrcSchema'

const parentDetailsSchema = z.object({
  name: nameSchema,
  nrc: nrcSchema,
  job: z.string().min(1),
})

export const parentsDetailsSchema = z.object({
  father: parentDetailsSchema,
  mother: parentDetailsSchema,
})

export type TParentsDetailsSchema = z.infer<typeof parentsDetailsSchema>
