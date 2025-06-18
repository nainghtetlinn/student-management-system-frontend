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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './select'

import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import * as SelectPrimitive from '@radix-ui/react-select'
import { type Control, type FieldPath, type FieldValues } from 'react-hook-form'

export const FormCheckboxField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  control,
  name,
  label,
  description,
  showErrorMessage = true,
  ...props
}: {
  control: Control<TFieldValues>
  name: TName
  label?: string
  description?: string
  showErrorMessage?: boolean
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
          {showErrorMessage && <FormMessage />}
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
  showErrorMessage = true,
  ...props
}: {
  control: Control<TFieldValues>
  name: TName
  label?: string
  description?: string
  showErrorMessage?: boolean
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
          {showErrorMessage && <FormMessage />}
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
  showErrorMessage = true,
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
  showErrorMessage?: boolean
} & React.ComponentProps<typeof SelectPrimitive.Root>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Select
              onValueChange={field.onChange}
              {...props}
            >
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
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
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          {showErrorMessage && <FormMessage />}
        </FormItem>
      )}
    />
  )
}
