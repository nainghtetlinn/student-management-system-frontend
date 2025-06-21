import { z } from 'zod'

export const supporterDetailsSchema = z.object({
  supporter: z.object({
    name: z.string().min(1),
    relationshipType: z.string().min(1),
    job: z.string().min(1),
    address: z.string().min(1),
  }),
})

export type TSupporterDetailsSchema = z.infer<typeof supporterDetailsSchema>
