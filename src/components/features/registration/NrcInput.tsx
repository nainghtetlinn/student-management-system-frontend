import { nrcStates, nrcTownships, nrcTypes } from '@/assets/NRC_Data.min.json'

import { FormItem, FormLabel } from '@/components/ui/form'
import { FormInputField, FormSelectField } from '@/components/ui/form-fields'

import { type NrcTownship } from '@/types/nrc'
import { useEffect, useMemo } from 'react'
import {
  type FieldPath,
  type FieldValues,
  type UseFormReturn,
} from 'react-hook-form'

export const NrcInput = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  form,
  stateCodeName,
  townshipCodeName,
  nrcTypeName,
  nrcNumberName,
}: {
  form: UseFormReturn<TFieldValues>
  stateCodeName: TName
  townshipCodeName: TName
  nrcTypeName: TName
  nrcNumberName: TName
}) => {
  const watchedStateCode = form.watch(stateCodeName)

  const uniqueTownships = useMemo(() => {
    const seen = new Set()
    const unique: NrcTownship[] = []

    nrcTownships
      .filter(ts => ts.stateId === watchedStateCode && ts.short.en !== '-')
      .forEach(ts => {
        if (!seen.has(ts.short.en)) {
          seen.add(ts.short.en)
          unique.push(ts)
        }
      })

    return unique
  }, [watchedStateCode])

  useEffect(() => {
    form.resetField(townshipCodeName)
  }, [watchedStateCode])

  return (
    <FormItem>
      <FormLabel>NRC</FormLabel>

      <div className='flex items-center gap-1'>
        <FormSelectField
          control={form.control}
          name={stateCodeName}
          placeholder='State'
          items={nrcStates.filter(s => s.number.en !== '9*')}
          keyExtractor={item => item.id}
          labelExtractor={item => item.number.mm}
        />
        <FormSelectField
          control={form.control}
          name={townshipCodeName}
          placeholder='Township'
          disabled={uniqueTownships.length === 0}
          items={uniqueTownships}
          keyExtractor={item => item.id}
          labelExtractor={item => item.short.mm}
        />
        <FormSelectField
          control={form.control}
          name={nrcTypeName}
          placeholder='NRC Type'
          items={nrcTypes}
          keyExtractor={item => item.id}
          labelExtractor={item => item.name.mm}
        />
      </div>

      <FormInputField
        control={form.control}
        name={nrcNumberName}
        placeholder='NRC Number'
      />
    </FormItem>
  )
}
