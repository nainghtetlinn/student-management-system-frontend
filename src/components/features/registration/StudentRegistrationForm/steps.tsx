import {
  acknowledgementSchema,
  contactsSchema,
  matriculationExamDetailsSchema,
  parentsDetailsSchema,
  studentDetailsSchema,
  type TCombinedStudentRegistrationSchema,
} from '@/validators/registration/studentRegistrationForm'

import { AcknowledgementDetails } from './AcknowledgementDetails'
import { ContactsDetails } from './ContactsDetails'
import { MatriculationExamDetails } from './MatriculationExamDetails'
import { ParentsDetails } from './ParentsDetails'
import { StudentDetails } from './StudentDetails'

import { type ZodType } from 'zod'

export type FormStep<T, FieldKeys = keyof T> = {
  position: number
  title: string
  component: React.ReactElement
  schema: ZodType<unknown>
  fields: FieldKeys[]
}

export const steps: FormStep<TCombinedStudentRegistrationSchema>[] = [
  {
    position: 1,
    title: 'ကျောင်းသားကိုဃ်ရေးအချက်အလက်',
    component: <StudentDetails />,
    schema: studentDetailsSchema,
    fields: ['courseName', 'student'],
  },
  {
    position: 2,
    title: 'တက္ကသိုလ်ဝင်တန်းအချက်အလက်',
    component: <MatriculationExamDetails />,
    schema: matriculationExamDetailsSchema,
    fields: ['matriculationExam'],
  },

  {
    position: 3,
    title: 'မိဘအချက်အလက်',
    component: <ParentsDetails />,
    schema: parentsDetailsSchema,
    fields: ['father', 'mother'],
  },
  {
    position: 4,
    title: 'ဆက်သွယ်ရန်အချက်အလက်',
    component: <ContactsDetails />,
    schema: contactsSchema,
    fields: ['contacts'],
  },
  {
    position: 5,
    title: '',
    component: <AcknowledgementDetails />,
    schema: acknowledgementSchema,
    fields: ['acknowledged'],
  },
]
