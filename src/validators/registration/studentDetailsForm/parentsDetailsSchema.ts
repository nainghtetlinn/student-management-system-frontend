import { z } from 'zod'

import { nrcSchema } from '../nrcSchema'

const parentDetailsSchema = z.object({
  name: z.string().min(1),
  nrc: nrcSchema,
  age: z.coerce.number().gt(0),
  ethnicity: z.string().min(1),
  religion: z.string().min(1),
  job: z.string().min(1),
})

export const parentsDetailsSchema = z.object({
  father: parentDetailsSchema,
  mother: parentDetailsSchema,
})

export type TParentsDetailsSchema = z.infer<typeof parentsDetailsSchema>
