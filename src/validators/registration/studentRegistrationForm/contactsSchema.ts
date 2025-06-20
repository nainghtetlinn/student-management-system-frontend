import { z } from 'zod'

export const contactsSchema = z.object({
  contacts: z.object({
    parentAddress: z.string().min(1),
    parentContactNo: z.string().min(1),
    isLivedWithParents: z.string().refine(val => {
      return ['true', 'false'].includes(val)
    }),
    email: z.string().email(),
    emergencyAddress: z.string().min(1),
    emergencyContactNo: z.string().min(1),
    hostelAddress: z.string(),
  }),
})

export type TContactsSchema = z.infer<typeof contactsSchema>
