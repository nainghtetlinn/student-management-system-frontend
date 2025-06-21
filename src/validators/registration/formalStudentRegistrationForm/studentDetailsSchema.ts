import { z } from 'zod'

import { personDetailsSchema } from './personDetailsSchema'

export const studentDetailsSchema = z.object({
  student: personDetailsSchema.merge(
    z.object({
      hadScholarship: z.string().refine(val => ['yes', 'no'].includes(val)),
    })
  ),
})

export type TStudentDetailsSchema = z.infer<typeof studentDetailsSchema>
