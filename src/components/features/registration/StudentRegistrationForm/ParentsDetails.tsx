import { FormInputField } from '@/components/ui/form-fields'
import { NrcInput } from '../NrcInput'
import { Separator } from '@/components/ui/seperator'

import { useFormContext } from 'react-hook-form'

import { TParentsDetailsSchema } from '@/validators/registration/studentRegistrationForm'

export const ParentsDetails = () => {
  const form = useFormContext<TParentsDetailsSchema>()

  return (
    <div className='flex flex-col gap-4 min-h-[550px]'>
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
      <Separator />
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
