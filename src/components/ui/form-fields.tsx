import { Checkbox } from './checkbox'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './form'
import { Input } from './input'
import { RadioGroup, RadioGroupItem } from './radio-group'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './select'

import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import * as SelectPrimitive from '@radix-ui/react-select'
import { type Control, type FieldPath, type FieldValues } from 'react-hook-form'

export const FormRadioGroupField = <
  TItem,
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  items,
  keyExtractor,
  labelExtractor,
  control,
  name,
  label,
  description,
  hideErrorMessage = false,
  ...props
}: {
  items: TItem[]
  keyExtractor: (item: TItem) => string | number
  labelExtractor?: (item: TItem) => string | number
  control: Control<TFieldValues>
  name: TName
  label?: string
  description?: string
  hideErrorMessage?: boolean
} & React.ComponentProps<typeof RadioGroupPrimitive.Root>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className='flex flex-col'
              {...props}
            >
              {items.map(item => {
                const key = keyExtractor(item)
                return (
                  <FormItem
                    key={key}
                    className='flex items-center gap-3'
                  >
                    <FormControl>
                      <RadioGroupItem value={key.toString()} />
                    </FormControl>
                    <FormLabel className='font-normal'>
                      {labelExtractor ? labelExtractor(item) : key}
                    </FormLabel>
                  </FormItem>
                )
              })}
            </RadioGroup>
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          {!hideErrorMessage && <FormMessage />}
        </FormItem>
      )}
    />
  )
}

export const FormCheckboxField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  control,
  name,
  label,
  description,
  hideErrorMessage = false,
  ...props
}: {
  control: Control<TFieldValues>
  name: TName
  label?: string
  description?: string
  hideErrorMessage?: boolean
} & React.ComponentProps<typeof CheckboxPrimitive.Root>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className='flex items-start gap-3'>
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
                {...props}
              />
            </FormControl>
            <div className='grid gap-2'>
              {label && <FormLabel>{label}</FormLabel>}
              {description && <FormDescription>{description}</FormDescription>}
            </div>
          </div>
          {!hideErrorMessage && <FormMessage />}
        </FormItem>
      )}
    />
  )
}

export const FormInputField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  control,
  name,
  label,
  description,
  hideErrorMessage = false,
  ...props
}: {
  control: Control<TFieldValues>
  name: TName
  label?: string
  description?: string
  hideErrorMessage?: boolean
} & React.ComponentProps<'input'>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input
              {...field}
              {...props}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          {!hideErrorMessage && <FormMessage />}
        </FormItem>
      )}
    />
  )
}

export const FormSelectField = <
  TItem,
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  items,
  keyExtractor,
  labelExtractor,
  placeholder,
  control,
  name,
  label,
  description,
  hideErrorMessage = false,
  ...props
}: {
  items: TItem[]
  keyExtractor: (item: TItem) => string | number
  labelExtractor?: (item: TItem) => string | number
  placeholder?: string
  control: Control<TFieldValues>
  name: TName
  label?: string
  description?: string
  hideErrorMessage?: boolean
} & React.ComponentProps<typeof SelectPrimitive.Root>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <Select
            onValueChange={field.onChange}
            {...props}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {items.map(item => {
                const key = keyExtractor(item)

                return (
                  <SelectItem
                    key={key}
                    value={key.toString()}
                  >
                    {labelExtractor ? labelExtractor(item) : key}
                  </SelectItem>
                )
              })}
            </SelectContent>
          </Select>
          {description && <FormDescription>{description}</FormDescription>}
          {!hideErrorMessage && <FormMessage />}
        </FormItem>
      )}
    />
  )
}
