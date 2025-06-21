import { z } from 'zod'

export const acknowledgementSchema = z.object({
  acknowledged: z
    .boolean()
    .refine(
      val => val === true,
      'You must acknowledge that the information you provided is correct.'
    ),
})

export type TAcknowledgementSchema = z.infer<typeof acknowledgementSchema>
