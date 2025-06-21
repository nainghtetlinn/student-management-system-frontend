import { z } from 'zod'

import { studentDetailsSchema } from './studentDetailsSchema'
import {
  fatherDetailsSchema,
  motherDetailsSchema,
} from './parentsDetailsSchema'
import { contactsDetailsSchema } from './contactsDetailsSchema'
import { enrollmentsDetailsSchema } from './enrollmentsDetailsSchema'
import { supporterDetailsSchema } from './supporterDetailsSchema'
import { acknowledgementSchema } from './acknowledgementSchema'

export const combinedFormalStudentRegistrationSchema = studentDetailsSchema
  .merge(fatherDetailsSchema)
  .merge(motherDetailsSchema)
  .merge(contactsDetailsSchema)
  .merge(enrollmentsDetailsSchema)
  .merge(supporterDetailsSchema)
  .merge(acknowledgementSchema)

export type TCombinedFormalStudentRegistrationSchema = z.infer<
  typeof combinedFormalStudentRegistrationSchema
>

export * from './studentDetailsSchema'
export * from './parentsDetailsSchema'
export * from './contactsDetailsSchema'
export * from './enrollmentsDetailsSchema'
export * from './supporterDetailsSchema'
export * from './acknowledgementSchema'
