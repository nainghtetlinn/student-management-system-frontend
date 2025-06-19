import {
  StudentRegistrationFormSchema,
  StudentDetailsFormSchema,
  FormalStudentRegistrationFormSchema,
} from '@/types/registration'

const defaultNrc = {
  stateCode: '',
  townshipCode: '',
  nrcType: '',
  nrcNumber: '',
}

const defaultDate = '' as unknown as Date

const defaultNumber = '' as unknown as number

export const defaultStudentRegistrationFormData: StudentRegistrationFormSchema =
  {
    name: { en: '', mm: '' },
    nrc: defaultNrc,
    dateOfBirth: defaultDate,
    father: {
      name: { en: '', mm: '' },
      nrc: defaultNrc,
      job: '',
    },
    mother: {
      name: { en: '', mm: '' },
      nrc: defaultNrc,
      job: '',
    },
    rollNo: '',
    lastYearRollNo: '',
    matriculationExam: {
      rollNo: '',
      department: '',
      year: defaultNumber,
    },
    parentAddress: '',
    parentContactNo: '',
    isLivedWithParents: 'true',
    email: '',
    emergencyAddress: '',
    emergencyContactNo: '',
    hostelAddress: '',
    acknowledged: false,
  }

export const defaultStudentDetailsFormData: StudentDetailsFormSchema = {
  name: '',
  nrc: defaultNrc,
  dateOfBirth: defaultDate,
  rollNo: '',
  hostelAddress: '',
  height: defaultNumber,
  weight: defaultNumber,
  bloodType: '',
  hobby: '',
  sibilings: [],
  parentAddress: '',
  currentAddress: '',
  emergencyAddress: '',
  emergencyContactNo: '',
  father: {
    name: '',
    nrc: defaultNrc,
    age: defaultNumber,
    ethnicity: '',
    religion: '',
    job: '',
  },
  mother: {
    name: '',
    nrc: defaultNrc,
    age: defaultNumber,
    ethnicity: '',
    religion: '',
    job: '',
  },
  cropType: '',
  assetsType: '',
  salesProductType: '',
  acknowledged: false,
}

export const defaultFormalStudentRegistrationFormData: FormalStudentRegistrationFormSchema =
  {
    student: {
      name: { en: '', mm: '' },
      nrc: defaultNrc,
      acsc: '',
      ethnicity: '',
      religion: '',
      placeOfBirth: '',
      dateOfBirth: defaultDate,
    },
    father: {
      name: { en: '', mm: '' },
      nrc: defaultNrc,
      acsc: '',
      ethnicity: '',
      religion: '',
      placeOfBirth: '',
      dateOfBirth: defaultDate,
    },
    mother: {
      name: { en: '', mm: '' },
      nrc: defaultNrc,
      acsc: '',
      ethnicity: '',
      religion: '',
      placeOfBirth: '',
      dateOfBirth: defaultDate,
    },
    contactAddress: '',
    hostelAddress: '',
    currentAddress: '',
    parentAddress: '',
    contactNo: '',
    enrollments: [],
    supporter: {
      name: '',
      relationshipType: '',
      job: '',
      address: '',
      contactNo: '',
    },
    scholarStatus: '',
    acknowledged: false,
  }
