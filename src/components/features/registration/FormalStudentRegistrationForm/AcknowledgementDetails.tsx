import { FormCheckboxField } from '@/components/ui/form-fields'

import { useFormContext } from 'react-hook-form'

import { TAcknowledgementSchema } from '@/validators/registration/formalStudentRegistrationForm'

export const AcknowledgementDetails = () => {
  const form = useFormContext<TAcknowledgementSchema>()

  return (
    <div className='flex flex-col gap-4 min-h-[550px]'>
      <FormCheckboxField
        control={form.control}
        name='acknowledged'
        label='အထက်ပါအချက်အလက်များအားမှန်ကန်စွာဖြည့်စွက်ထားကြောင်းဝန်ခံပါသည်။'
      />
    </div>
  )
}
