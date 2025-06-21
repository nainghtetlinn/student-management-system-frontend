import { Button } from '@/components/ui/button'
import { FormInputField } from '@/components/ui/form-fields'
import { Trash2 } from 'lucide-react'

import { useFieldArray, useFormContext } from 'react-hook-form'

import { TSibilingsDetailsSchema } from '@/validators/registration/studentDetailsForm'

export const SiblingsDetails = () => {
  const form = useFormContext<TSibilingsDetailsSchema>()

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'sibilings',
  })

  return (
    <div className='flex flex-col gap-4 min-h-[550px]'>
      {fields.map((field, index) => (
        <div
          key={field.id}
          className='flex flex-col gap-1'
        >
          <div className='flex justify-between items-center'>
            <p>Sibling {index + 1}</p>
            <Button
              type='button'
              size='icon'
              variant='ghost'
              onClick={() => remove(index)}
            >
              <Trash2 />
            </Button>
          </div>
          <FormInputField
            control={form.control}
            name={`sibilings.${index}.name`}
            placeholder='Name'
          />
          <FormInputField
            control={form.control}
            name={`sibilings.${index}.relationshipType`}
            placeholder='Relationship Type'
          />
          <FormInputField
            control={form.control}
            name={`sibilings.${index}.job`}
            placeholder='Job'
          />
          <FormInputField
            control={form.control}
            name={`sibilings.${index}.address`}
            placeholder='Address'
          />
        </div>
      ))}

      <Button
        type='button'
        onClick={() =>
          append({ name: '', relationshipType: '', job: '', address: '' })
        }
      >
        Add Sibling
      </Button>
    </div>
  )
}
