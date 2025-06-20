import {
  FormInputField,
  FormRadioGroupField,
} from '@/components/ui/form-fields'

import { useFormContext } from 'react-hook-form'

import { TContactsSchema } from '@/validators/registration/studentRegistrationForm'

export const ContactsDetails = () => {
  const form = useFormContext<TContactsSchema>()

  return (
    <div className='flex flex-col gap-4 min-h-[550px]'>
      <FormInputField
        control={form.control}
        name='contacts.parentAddress'
        label='မိဘနေရပ်လိပ်စာအပြည့်အစုံ'
      />
      <FormInputField
        control={form.control}
        name='contacts.parentContactNo'
        label='မိဘဖုန်းနံပါတ်'
      />
      <FormRadioGroupField
        control={form.control}
        name='contacts.isLivedWithParents'
        items={[
          { label: 'မိဘနှင့်အတူနေထိုင်ပါသည်။', key: 'true' },
          { label: 'မိဘနှင့်အတူမနေထိုင်ပါ။', key: 'false' },
        ]}
        keyExtractor={item => item.key}
        labelExtractor={item => item.label}
      />
      <FormInputField
        control={form.control}
        name='contacts.email'
        label='Email လိပ်စာ'
        placeholder='example@gmail.com'
      />
      <FormInputField
        control={form.control}
        name='contacts.emergencyAddress'
        label='အရေးပေါ်ဆက်သွယ်နိုင်သည့်လိပ်စာ'
      />
      <FormInputField
        control={form.control}
        name='contacts.emergencyContactNo'
        label='အရေးပေါ်ဆက်သွယ်နိုင်သည့်ဖုန်းနံပါတ်'
      />
      <FormInputField
        control={form.control}
        name='contacts.hostelAddress'
        label='ပြင်ပအဆောင်နေပါကလိပ်စာ'
      />
    </div>
  )
}
