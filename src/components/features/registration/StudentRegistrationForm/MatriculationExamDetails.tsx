import { FormInputField } from '@/components/ui/form-fields'

import { useFormContext } from 'react-hook-form'

import { TMatriculationExamDetailsSchema } from '@/validators/registration/studentRegistrationForm'

export const MatriculationExamDetails = () => {
  const form = useFormContext<TMatriculationExamDetailsSchema>()

  return (
    <div className='flex flex-col gap-4 min-h-[550px]'>
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
