import { z } from 'zod'

import { nameSchema } from '../nameSchema'
import { nrcSchema } from '../nrcSchema'
import { rollNoSchema } from '../rollNoSchema'

export const studentDetailsSchema = z.object({
  courseName: z.string().min(1),
  student: z.object({
    name: nameSchema,
    gender: z
      .string()
      .refine(val => ['male', 'female'].includes(val), 'Invalid Gender.'),
    nrc: nrcSchema,
    dateOfBirth: z.coerce.date(),
    rollNo: rollNoSchema,
    lastYearRollNo: rollNoSchema,
  }),
})

export type TStudentDetailsSchema = z.infer<typeof studentDetailsSchema>
