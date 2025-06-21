import { z } from 'zod'

export const specialJobsDetailsSchema = z.object({
  specialJobs: z.object({
    cropType: z.string(),
    assetsType: z.string(),
    salesProductType: z.string(),
  }),
})

export type TSpecialJobsDetailsSchema = z.infer<typeof specialJobsDetailsSchema>
