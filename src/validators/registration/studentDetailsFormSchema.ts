import { z } from 'zod'

import { nrcSchema } from './nrcSchema'

const sibilingsSchema = z.array(
  z.object({
    name: z.string().min(1),
    relationshipType: z.string().min(1),
    job: z.string().min(1),
    address: z.string().min(1),
  })
)

const parentSchema = z.object({
  name: z.string().min(1),
  nrc: nrcSchema,
  age: z.number().gt(0),
  ethnicity: z.string().min(1),
  religion: z.string().min(1),
  job: z.string().min(1),
})

export const studentDetailsFormSchema = z.object({
  name: z.string().min(1),
  nrc: nrcSchema,
  dateOfBirth: z.coerce.date(),
  rollNo: z.string().min(1),
  hostelAddress: z.string().nullable(),

  height: z.number().gt(0),
  weight: z.number().gt(0),
  bloodType: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
  hobby: z.string().nullable(),

  sibilings: sibilingsSchema,
  parentAddress: z.string().min(1),
  currentAddress: z.string().min(1),
  emergencyAddress: z.string().min(1),
  emergencyContactNo: z.string().min(1),

  father: parentSchema,
  mother: parentSchema,

  cropType: z.string().nullable(),
  assetsType: z.string().nullable(),
  salesProductType: z.string().nullable(),

  acknowledged: z
    .boolean()
    .refine(
      val => val === true,
      'You must acknowledge that the information you provided is correct.'
    ),
})
