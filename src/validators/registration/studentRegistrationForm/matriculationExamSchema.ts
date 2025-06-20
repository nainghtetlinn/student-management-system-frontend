import { z } from 'zod'

export const matriculationExamDetailsSchema = z.object({
  matriculationExam: z.object({
    rollNo: z.string().min(1),
    department: z.string().min(1),
    year: z.coerce.number().gt(0),
  }),
})

export type TMatriculationExamDetailsSchema = z.infer<
  typeof matriculationExamDetailsSchema
>
