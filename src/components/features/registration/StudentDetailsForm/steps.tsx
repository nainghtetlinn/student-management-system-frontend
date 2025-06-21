import { type TCombinedStudentDetailsSchema } from '@/validators/registration/studentDetailsForm'

import { StudentDetails } from './StudentDetails'
import { ParentsDetails } from './ParentsDetails'
import { SiblingsDetails } from './SiblingsDetails'
import { ContactsDetails } from './ContactsDetails'
import { SpecialJobsDetails } from './SpecialJobsDetails'
import { AcknowledgementDetails } from './AcknowledgementDetails'

export type FormStep<T, FieldKeys = keyof T> = {
  position: number
  title: string
  component: React.ReactElement
  fields: FieldKeys[]
}

export const steps: FormStep<TCombinedStudentDetailsSchema>[] = [
  {
    position: 1,
    title: 'ကျောင်းသားကိုဃ်ရေးအချက်အလက်',
    component: <StudentDetails />,
    fields: ['student'],
  },
  {
    position: 2,
    title: 'မိဘအချက်အလက်',
    component: <ParentsDetails />,
    fields: ['father', 'mother'],
  },
  {
    position: 3,
    title: 'မွေးချင်းမောင်နှမအရင်းအချာများ',
    component: <SiblingsDetails />,
    fields: ['sibilings'],
  },
  {
    position: 4,
    title: 'ဆက်သွယ်ရန်အချက်အလက်',
    component: <ContactsDetails />,
    fields: ['contacts'],
  },
  {
    position: 5,
    title: 'အလုပ်အကိုင်အချက်အလက်',
    component: <SpecialJobsDetails />,
    fields: ['specialJobs'],
  },
  {
    position: 6,
    title: '',
    component: <AcknowledgementDetails />,
    fields: ['acknowledged'],
  },
]
