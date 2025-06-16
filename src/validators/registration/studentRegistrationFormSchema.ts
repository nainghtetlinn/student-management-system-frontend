import { z } from 'zod'

import { nameSchema } from './nameSchema'
import { nrcSchema } from './nrcSchema'

const parentSchema = z.object({
  name: nameSchema,
  nrc: nrcSchema,
  job: z.string().min(1),
})

const matriculationExamSchema = z.object({
  rollNo: z.string().min(1, 'Required.'),
  department: z.string().min(1, 'Required.'),
  year: z.coerce.number(),
})

export const studentRegistrationFormSchema = z.object({
  name: nameSchema,
  nrc: nrcSchema,
  dateOfBirth: z.coerce.date(),
  father: parentSchema,
  mother: parentSchema,

  rollNo: z.string().min(1),
  lastYearRollNo: z.string().min(1),
  matriculationExam: matriculationExamSchema,

  parentAddress: z.string().min(1),
  parentContactNo: z.string().min(1),
  isLivedWithParents: z.boolean(),

  email: z.string().email(),

  emergencyAddress: z.string().min(1),
  emergencyContactNo: z.string().min(1),

  hostelAddress: z.string().nullable(),

  acknowledged: z
    .boolean()
    .refine(
      val => val === true,
      'You must acknowledge that the information you provided is correct.'
    ),
})
