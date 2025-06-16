import { z } from 'zod'

import { nameSchema } from './nameSchema'
import { nrcSchema } from './nrcSchema'

const personSchema = z.object({
  name: nameSchema,
  nrc: nrcSchema,
  acsc: z.string().nullable(),
  ethnicity: z.string().min(1),
  religion: z.string().min(1),
  placeOfBirth: z.string().min(1),
  dateOfBirth: z.coerce.date(),
})

const supporterSchema = z.object({
  name: z.string().min(1),
  relationshipType: z.string().min(1),
  job: z.string().min(1),
  address: z.string().min(1),
  contactNo: z.string().min(1),
})

const enrollmentsSchema = z.array(
  z.object({
    class: z.string().min(1),
    rollNo: z.string().min(1),
    year: z.string().min(1),
    status: z.string().min(1),
  })
)

export const formalStudentRegistrationFormSchema = z.object({
  student: personSchema,
  father: personSchema,
  mother: personSchema,

  contactAddress: z.string().min(1),
  hostelAddress: z.string().nullable(),
  currentAddress: z.string().min(1),
  parentAddress: z.string().min(1),
  contactNo: z.string().min(1),

  enrollments: enrollmentsSchema,

  supporter: supporterSchema,

  scholarStatus: z.string().min(1),
  acknowledged: z
    .boolean()
    .refine(
      val => val === true,
      'You must acknowledge that the information you provided is correct.'
    ),
})
