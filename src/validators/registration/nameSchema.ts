import { z } from 'zod'

export const nameSchema = z.object({
  mm: z.string().min(1),
  en: z.string().min(1),
})
