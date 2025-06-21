import { z } from 'zod'
import { rollNoSchema } from '../rollNoSchema'

export const enrollmentsDetailsSchema = z.object({
  enrollments: z.array(
    z.object({
      course: z.string().min(1),
      rollNo: rollNoSchema,
      academicYear: z.coerce.number().gt(0),
      status: z.string().refine(val => ['passed', 'failed'].includes(val)),
    })
  ),
})

export type TEnrollmentsDetailsSchema = z.infer<typeof enrollmentsDetailsSchema>
