import { z } from 'zod'

import { studentDetailsSchema } from './studentDetailsSchema'
import { matriculationExamDetailsSchema } from './matriculationExamSchema'
import { parentsDetailsSchema } from './parentsDetailsSchema'
import { contactsSchema } from './contactsSchema'
import { acknowledgementSchema } from './acknowledgementSchema'

export const combinedStudentRegistrationSchema = studentDetailsSchema
  .merge(matriculationExamDetailsSchema)
  .merge(parentsDetailsSchema)
  .merge(contactsSchema)
  .merge(acknowledgementSchema)

export type TCombinedStudentRegistrationSchema = z.infer<
  typeof combinedStudentRegistrationSchema
>

export * from './studentDetailsSchema'
export * from './matriculationExamSchema'
export * from './parentsDetailsSchema'
export * from './contactsSchema'
export * from './acknowledgementSchema'
