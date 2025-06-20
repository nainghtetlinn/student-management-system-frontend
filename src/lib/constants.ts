import {
  StudentDetailsFormSchema,
  FormalStudentRegistrationFormSchema,
} from '@/types/registration'

import { TCombinedStudentRegistrationSchema } from '@/validators/registration/studentRegistrationForm'

const defaultNumber = '' as unknown as number

const defaultDate = '' as unknown as Date

const defaultName = { en: '', mm: '' }

const defaultNrc = {
  stateCode: '',
  townshipCode: '',
  nrcType: '',
  nrcNumber: '',
}

const defaultRollNo = { year: defaultNumber, major: '', no: defaultNumber }

export const defaultStudentRegistrationFormData: TCombinedStudentRegistrationSchema =
  {
    courseName: '',
    student: {
      name: defaultName,
      gender: 'male',
      nrc: defaultNrc,
      dateOfBirth: defaultDate,
      rollNo: defaultRollNo,
      lastYearRollNo: defaultRollNo,
    },
    father: {
      name: defaultName,
      nrc: defaultNrc,
      job: '',
    },
    mother: {
      name: defaultName,
      nrc: defaultNrc,
      job: '',
    },
    matriculationExam: {
      rollNo: '',
      department: '',
      year: defaultNumber,
    },
    contacts: {
      parentAddress: '',
      parentContactNo: '',
      isLivedWithParents: 'true',
      email: '',
      emergencyAddress: '',
      emergencyContactNo: '',
      hostelAddress: '',
    },
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
      name: defaultName,
      nrc: defaultNrc,
      acsc: '',
      ethnicity: '',
      religion: '',
      placeOfBirth: '',
      dateOfBirth: defaultDate,
    },
    father: {
      name: defaultName,
      nrc: defaultNrc,
      acsc: '',
      ethnicity: '',
      religion: '',
      placeOfBirth: '',
      dateOfBirth: defaultDate,
    },
    mother: {
      name: defaultName,
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
