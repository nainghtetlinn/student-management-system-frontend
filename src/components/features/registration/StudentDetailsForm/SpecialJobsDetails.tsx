import { FormInputField } from '@/components/ui/form-fields'

import { useFormContext } from 'react-hook-form'

import { TSpecialJobsDetailsSchema } from '@/validators/registration/studentDetailsForm'

export const SpecialJobsDetails = () => {
  const form = useFormContext<TSpecialJobsDetailsSchema>()

  return (
    <div className='flex flex-col gap-4 min-h-[550px]'>
      <FormInputField
        control={form.control}
        name='specialJobs.cropType'
        label='တောင်သူလယ်သမားဖြစ်ပါက စိုက်ဧကသီးနှံအမျိုးအစား'
      />
      <FormInputField
        control={form.control}
        name='specialJobs.assetsType'
        label='ကုန်သည်ဖြစ်ပါက မည်သည့်ကုန်သွယ်မှုလုပ်ငန်း လုပ်ကိုင်သည်ကိုဖော်ပြရန်'
      />
      <FormInputField
        control={form.control}
        name='specialJobs.salesProductType'
        label='ဈေးသည်ဖြစ်ပါက အရောင်းကုန်ပစ္စည်း'
      />
    </div>
  )
}
