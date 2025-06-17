import { studentRegistrationFormSchema } from '@/validators/registration/studentRegistrationFormSchema'
import { studentDetailsFormSchema } from '@/validators/registration/studentDetailsFormSchema'
import { formalStudentRegistrationFormSchema } from '@/validators/registration/formalStudentRegistrationFormSchema'

import { z } from 'zod'

export type StudentRegistrationFormSchema = z.infer<
  typeof studentRegistrationFormSchema
>
export type StudentDetailsFormSchema = z.infer<typeof studentDetailsFormSchema>
export type FormalStudentRegistrationFormSchema = z.infer<
  typeof formalStudentRegistrationFormSchema
>
