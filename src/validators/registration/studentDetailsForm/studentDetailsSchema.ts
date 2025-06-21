import { z } from 'zod'

import { nrcSchema } from '../nrcSchema'
import { rollNoSchema } from '../rollNoSchema'

export const studentDetailsSchema = z.object({
  student: z.object({
    name: z.string().min(1),
    nrc: nrcSchema,
    dateOfBirth: z.coerce.date(),
    rollNo: rollNoSchema,
    height: z.string().min(1),
    weight: z.string().min(1),
    bloodType: z
      .string()
      .refine(
        val => ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].includes(val),
        'Invalid blood type.'
      ),
    hobby: z.string(),
  }),
})

export type TStudentDetailsSchema = z.infer<typeof studentDetailsSchema>
