import {
  FormInputField,
  FormRadioGroupField,
} from '@/components/ui/form-fields'
import { NrcInput } from '../NrcInput'
import { DobPicker } from '../DobPicker'

import { useFormContext } from 'react-hook-form'

import { TStudentDetailsSchema } from '@/validators/registration/formalStudentRegistrationForm'

export const StudentDetails = () => {
  const form = useFormContext<TStudentDetailsSchema>()

  return (
    <div className='flex flex-col gap-4 min-h-[550px]'>
      <FormInputField
        control={form.control}
        name='student.name.mm'
        hideErrorMessage
        label='အမည် (မြန်မာ)'
        placeholder='Eg- မောင်မောင်'
      />
      <FormInputField
        control={form.control}
        name='student.name.en'
        hideErrorMessage
        label='အမည် (အင်္ဂလိပ်)'
        placeholder='Eg- Mg Mg'
      />
      <NrcInput
        control={form.control}
        stateCodeName='student.nrc.stateCode'
        townshipCodeName='student.nrc.townshipCode'
        nrcTypeName='student.nrc.nrcType'
        nrcNumberName='student.nrc.nrcNumber'
      />
      <FormInputField
        control={form.control}
        name='student.acsc'
        hideErrorMessage
        label='ဧည့်နိုင်ငံသားလက်မှတ်အမှတ်'
      />
      <FormInputField
        control={form.control}
        name='student.ethnicity'
        hideErrorMessage
        label='လူမျိုး'
      />
      <FormInputField
        control={form.control}
        name='student.religion'
        hideErrorMessage
        label='ကိုးကွယ်သည့်ဘာသာ'
      />
      <FormInputField
        control={form.control}
        name='student.placeOfBirth'
        hideErrorMessage
        label='မွေးဖွားရာဒေသ'
      />
      <DobPicker
        control={form.control}
        name='student.dateOfBirth'
        hideErrorMessage
      />
      <FormRadioGroupField
        control={form.control}
        name='student.hadScholarship'
        hideErrorMessage
        label='ပညာသင်ထောက်ပံ့ကြေးရရှိခဲ့ခြင်းရှိ/မရှိ'
        items={[
          { key: 'yes', label: 'ရှိ' },
          { key: 'no', label: 'မရှိ' },
        ]}
        keyExtractor={item => item.key}
        labelExtractor={item => item.label}
      />
    </div>
  )
}
