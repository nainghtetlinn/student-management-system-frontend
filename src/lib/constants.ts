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

export const defaultStudentRegistrationFormData: StudentRegistrationFormSchema =
  {
    name: { en: '', mm: '' },
    nrc: defaultNrc,
    dateOfBirth: new Date(),
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
      year: new Date().getFullYear(),
    },
    parentAddress: '',
    parentContactNo: '',
    isLivedWithParents: true,
    email: '',
    emergencyAddress: '',
    emergencyContactNo: '',
    hostelAddress: '',
    acknowledged: false,
  }

export const defaultStudentDetailsFormData: StudentDetailsFormSchema = {
  name: '',
  nrc: defaultNrc,
  dateOfBirth: new Date(),
  rollNo: '',
  hostelAddress: '',
  height: '' as unknown as number,
  weight: '' as unknown as number,
  bloodType: 'A+',
  hobby: '',
  sibilings: [],
  parentAddress: '',
  currentAddress: '',
  emergencyAddress: '',
  emergencyContactNo: '',
  father: {
    name: '',
    nrc: defaultNrc,
    age: '' as unknown as number,
    ethnicity: '',
    religion: '',
    job: '',
  },
  mother: {
    name: '',
    nrc: defaultNrc,
    age: '' as unknown as number,
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
      dateOfBirth: new Date(),
    },
    father: {
      name: { en: '', mm: '' },
      nrc: defaultNrc,
      acsc: '',
      ethnicity: '',
      religion: '',
      placeOfBirth: '',
      dateOfBirth: new Date(),
    },
    mother: {
      name: { en: '', mm: '' },
      nrc: defaultNrc,
      acsc: '',
      ethnicity: '',
      religion: '',
      placeOfBirth: '',
      dateOfBirth: new Date(),
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
