import { DobPicker } from '@/components/features/registration/DobPicker'
import { NrcInput } from '@/components/features/registration/NrcInput'
import {
  FormCheckboxField,
  FormInputField,
  FormRadioGroupField,
} from '@/components/ui/form-fields'

import { useFormContext } from 'react-hook-form'

export const tabs = [
  {
    name: 'tab1',
    label: 'Student details',
    render: () => <StudentDetails />,
  },
  {
    name: 'tab2',
    label: 'Matriculation exam details',
    render: () => <ExamDetails />,
  },
  {
    name: 'tab3',
    label: 'Father details',
    render: () => <FatherDetails />,
  },
  {
    name: 'tab4',
    label: 'Mother details',
    render: () => <MotherDetails />,
  },
  {
    name: 'tab5',
    label: 'Contact details',
    render: () => <ContactDetails />,
  },
  {
    name: 'tab6',
    label: 'Acknowledgement details',
    render: () => <AcknowledgementDetails />,
  },
]

const StudentDetails = () => {
  const form = useFormContext()

  return (
    <div className='space-y-4 min-h-[550px]'>
      <FormInputField
        control={form.control}
        name='name.en'
        label='အမည် (အင်္ဂလိပ်)'
        placeholder='Eg- Mg Mg'
      />
      <FormInputField
        control={form.control}
        name='name.mm'
        label='အမည် (မြန်မာ)'
        placeholder='Eg- မောင်မောင်'
      />
      <NrcInput
        control={form.control}
        stateCodeName='nrc.stateCode'
        townshipCodeName='nrc.townshipCode'
        nrcTypeName='nrc.nrcType'
        nrcNumberName='nrc.nrcNumber'
      />
      <DobPicker
        control={form.control}
        name='dateOfBirth'
      />
      <FormInputField
        control={form.control}
        name='rollNo'
        label='သင်တန်းခုံအမှတ်'
      />
      <FormInputField
        control={form.control}
        name='lastYearRollNo'
        label='လွန်ခဲ့သောနှစ်မှစာမေးပွဲခုံအမှတ်'
      />
    </div>
  )
}

const FatherDetails = () => {
  const form = useFormContext()

  return (
    <div className='space-y-4 min-h-[550px]'>
      <FormInputField
        control={form.control}
        name='father.name.en'
        label='အဘအမည် (အင်္ဂလိပ်)'
        placeholder='Eg- U Mg'
      />
      <FormInputField
        control={form.control}
        name='father.name.mm'
        label='အဘအမည် (မြန်မာ)'
        placeholder='Eg- ဦးမောင်'
      />
      <NrcInput
        control={form.control}
        stateCodeName='father.nrc.stateCode'
        townshipCodeName='father.nrc.townshipCode'
        nrcTypeName='father.nrc.nrcType'
        nrcNumberName='father.nrc.nrcNumber'
      />
      <FormInputField
        control={form.control}
        name='father.job'
        label='အလုပ်အကိုင်'
      />
    </div>
  )
}

const MotherDetails = () => {
  const form = useFormContext()

  return (
    <div className='space-y-4 min-h-[550px]'>
      <FormInputField
        control={form.control}
        name='mother.name.en'
        label='အမိအမည် (အင်္ဂလိပ်)'
        placeholder='Eg- Daw Mg'
      />
      <FormInputField
        control={form.control}
        name='mother.name.mm'
        label='အမိအမည် (မြန်မာ)'
        placeholder='Eg- ဒေါ်မောင်'
      />
      <NrcInput
        control={form.control}
        stateCodeName='mother.nrc.stateCode'
        townshipCodeName='mother.nrc.townshipCode'
        nrcTypeName='mother.nrc.nrcType'
        nrcNumberName='mother.nrc.nrcNumber'
      />
      <FormInputField
        control={form.control}
        name='mother.job'
        label='အလုပ်အကိုင်'
      />
    </div>
  )
}

const ExamDetails = () => {
  const form = useFormContext()

  return (
    <div className='space-y-4 min-h-[550px]'>
      <FormInputField
        control={form.control}
        name='matriculationExam.rollNo'
        label='တက္ကသိုလ်ဝင်တန်းခုံအမှတ်'
      />
      <FormInputField
        control={form.control}
        name='matriculationExam.department'
        label='စာစစ်ဌာန'
      />
      <FormInputField
        control={form.control}
        name='matriculationExam.year'
        label='ခုနှစ်'
      />
    </div>
  )
}

const ContactDetails = () => {
  const form = useFormContext()

  return (
    <div className='space-y-4 min-h-[550px]'>
      <FormInputField
        control={form.control}
        name='parentAddress'
        label='မိဘနေရပ်လိပ်စာအပြည့်အစုံ'
      />
      <FormInputField
        control={form.control}
        name='parentContactNo'
        label='မိဘဖုန်းနံပါတ်'
      />
      <FormRadioGroupField
        control={form.control}
        name='isLivedWithParents'
        items={[
          { label: 'မိဘနှင့်အတူနေထိုင်ပါသည်။', key: 'true' },
          { label: 'မိဘနှင့်အတူမနေထိုင်ပါ။', key: 'false' },
        ]}
        keyExtractor={item => item.key}
        labelExtractor={item => item.label}
      />
      <FormInputField
        control={form.control}
        name='email'
        label='Email လိပ်စာ'
        placeholder='example@gmail.com'
      />
      <FormInputField
        control={form.control}
        name='emergencyAddress'
        label='အရေးပေါ်ဆက်သွယ်နိုင်သည့်လိပ်စာ'
      />
      <FormInputField
        control={form.control}
        name='emergencyContactNo'
        label='အရေးပေါ်ဆက်သွယ်နိုင်သည့်ဖုန်းနံပါတ်'
      />
      <FormInputField
        control={form.control}
        name='hostelAddress'
        label='ပြင်ပအဆောင်နေပါကလိပ်စာ'
      />
    </div>
  )
}

const AcknowledgementDetails = () => {
  const form = useFormContext()

  return (
    <div className='space-y-4 min-h-[550px]'>
      <FormCheckboxField
        control={form.control}
        name='acknowledged'
        label='အထက်ပါအချက်အလက်များအားမှန်ကန်စွာဖြည့်စွက်ထားကြောင်းဝန်ခံပါသည်။'
      />
    </div>
  )
}
