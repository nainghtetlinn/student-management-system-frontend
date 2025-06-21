import { z } from 'zod'

export const sibilingsDetailsSchema = z.object({
  sibilings: z.array(
    z.object({
      name: z.string().min(1),
      relationshipType: z.string().min(1),
      job: z.string().min(1),
      address: z.string().min(1),
    })
  ),
})

export type TSibilingsDetailsSchema = z.infer<typeof sibilingsDetailsSchema>
