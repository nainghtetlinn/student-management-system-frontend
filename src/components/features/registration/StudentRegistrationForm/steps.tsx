import { type TCombinedStudentRegistrationSchema } from '@/validators/registration/studentRegistrationForm'

import { AcknowledgementDetails } from './AcknowledgementDetails'
import { ContactsDetails } from './ContactsDetails'
import { MatriculationExamDetails } from './MatriculationExamDetails'
import { ParentsDetails } from './ParentsDetails'
import { StudentDetails } from './StudentDetails'

export type FormStep<T, FieldKeys = keyof T> = {
  position: number
  title: string
  component: React.ReactElement
  fields: FieldKeys[]
}

export const steps: FormStep<TCombinedStudentRegistrationSchema>[] = [
  {
    position: 1,
    title: 'ကျောင်းသားကိုဃ်ရေးအချက်အလက်',
    component: <StudentDetails />,
    fields: ['courseName', 'student'],
  },
  {
    position: 2,
    title: 'တက္ကသိုလ်ဝင်တန်းအချက်အလက်',
    component: <MatriculationExamDetails />,
    fields: ['matriculationExam'],
  },

  {
    position: 3,
    title: 'မိဘအချက်အလက်',
    component: <ParentsDetails />,
    fields: ['father', 'mother'],
  },
  {
    position: 4,
    title: 'ဆက်သွယ်ရန်အချက်အလက်',
    component: <ContactsDetails />,
    fields: ['contacts'],
  },
  {
    position: 5,
    title: '',
    component: <AcknowledgementDetails />,
    fields: ['acknowledged'],
  },
]
