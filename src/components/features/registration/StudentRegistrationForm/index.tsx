'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Form } from '@/components/ui/form'

import { zodResolver } from '@hookform/resolvers/zod'
import { AnimatePresence, motion, type Variants } from 'motion/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { defaultStudentRegistrationFormData } from '@/lib/constants'
import { type StudentRegistrationFormSchema } from '@/types/registration'
import { studentRegistrationFormSchema } from '@/validators/registration/studentRegistrationFormSchema'
import { tabs } from './tabs'

const tabContentVariants: Variants = {
  initial: {
    y: 10,
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: -10,
    opacity: 0,
  },
}

export const StudentRegisterationForm = () => {
  const form = useForm<StudentRegistrationFormSchema>({
    resolver: zodResolver(studentRegistrationFormSchema),
    defaultValues: defaultStudentRegistrationFormData,
  })

  const [active, setActive] = useState(0)

  const handleNext = () => {
    if (active === tabs.length - 1) return
    setActive(prev => prev + 1)
  }
  const handlePrevious = () => {
    if (active === 0) return
    setActive(prev => prev - 1)
  }

  const onSubmit = (data: StudentRegistrationFormSchema) => {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className='w-full max-w-lg mx-auto'>
          <CardHeader>
            <CardTitle>ကျောင်းဝင်မှတ်ပုံတင်ခွင့်ပုံစံ</CardTitle>
            <CardDescription>2024-2025 ပညာသင်နှစ်</CardDescription>
          </CardHeader>
          <CardContent>
            <AnimatePresence mode='wait'>
              <motion.div
                key={active}
                variants={tabContentVariants}
                initial='initial'
                animate='enter'
                exit='exit'
                transition={{
                  duration: 0.1,
                }}
              >
                {tabs[active].render()}
              </motion.div>
            </AnimatePresence>
          </CardContent>
          <CardFooter className='flex justify-end gap-2'>
            {active !== 0 && (
              <Button
                type='button'
                onClick={handlePrevious}
              >
                Previous
              </Button>
            )}
            {active !== tabs.length - 1 && (
              <Button
                type='button'
                onClick={handleNext}
              >
                Next
              </Button>
            )}
            {active === tabs.length - 1 && <Button>Submit</Button>}
          </CardFooter>
        </Card>
      </form>
    </Form>
  )
}
