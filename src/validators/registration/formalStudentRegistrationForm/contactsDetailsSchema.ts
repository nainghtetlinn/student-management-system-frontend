import { z } from 'zod'

export const contactsDetailsSchema = z.object({
  contacts: z.object({
    hostelAddress: z.string(),
    currentAddress: z.string().min(1),
    contactNo: z.string().min(1),
    parentsAddress: z.string().min(1),
    parentsContactNo: z.string().min(1),
  }),
})

export type TContactsDetailsSchema = z.infer<typeof contactsDetailsSchema>
