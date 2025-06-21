import { FormInputField } from '@/components/ui/form-fields'

import { useFormContext } from 'react-hook-form'

import { TContactsDetailsSchema } from '@/validators/registration/studentDetailsForm'

export const ContactsDetails = () => {
  const form = useFormContext<TContactsDetailsSchema>()

  return (
    <div className='flex flex-col gap-4 min-h-[550px]'>
      <FormInputField
        control={form.control}
        name='contacts.parentAddress'
        label='မိဘများနှင့်နေရပ်လိပ်စာ'
      />
      <FormInputField
        control={form.control}
        name='contacts.currentAddress'
        label='မိဘများနှင့်အတူမနေထိုင်ပါက ဆက်သွယ်ရန်နေရပ်လိပ်စာ'
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
        label='လက်ရှိအဆောင်(ပြင်ပ)'
      />
    </div>
  )
}
