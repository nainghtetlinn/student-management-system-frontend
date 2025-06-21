import { z } from 'zod'

export const contactsDetailsSchema = z.object({
  contacts: z.object({
    parentAddress: z.string().min(1),
    currentAddress: z.string().min(1),
    emergencyAddress: z.string().min(1),
    emergencyContactNo: z.string().min(1),
    hostelAddress: z.string(),
  }),
})

export type TContactsDetailsSchema = z.infer<typeof contactsDetailsSchema>
