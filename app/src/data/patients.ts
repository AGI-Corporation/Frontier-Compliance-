import type { AppPatient } from '../types/fhir'
import type { Patient } from 'fhir/r4'

const makePatient = (
  id: string, first: string, last: string, dob: string,
  gender: 'male' | 'female' | 'other', mrn: string,
  phone: string, email: string,
  conditions: string[], lastVisit: string,
  status: 'active' | 'inactive' | 'critical',
  city: string, state: string
): AppPatient => {
  const fhir: Patient = {
    resourceType: 'Patient',
    id,
    identifier: [{ system: 'http://frontier.health/mrn', value: mrn }],
    name: [{ use: 'official', family: last, given: [first] }],
    gender,
    birthDate: dob,
    telecom: [
      { system: 'phone', value: phone, use: 'home' },
      { system: 'email', value: email },
    ],
    address: [{ city, state, country: 'US' }],
    active: status !== 'inactive',
  }
  return { id, name: `${first} ${last}`, dob, gender, mrn, phone, email, conditions, lastVisit, status, fhir }
}

export const patients: AppPatient[] = [
  makePatient('pt-001','James','Harrington','1968-03-14','male','MRN-10001','(555) 234-5678','james.harrington@email.com',['Hypertension','Type 2 Diabetes'],'2025-01-10','active','Austin','TX'),
  makePatient('pt-002','Maria','Santos','1975-07-22','female','MRN-10002','(555) 345-6789','maria.santos@email.com',['Asthma','GERD'],'2025-01-12','active','Denver','CO'),
  makePatient('pt-003','Robert','Chen','1952-11-05','male','MRN-10003','(555) 456-7890','robert.chen@email.com',['Heart Disease','Atrial Fibrillation'],'2025-01-08','critical','Seattle','WA'),
  makePatient('pt-004','Emily','Thompson','1989-02-28','female','MRN-10004','(555) 567-8901','emily.thompson@email.com',['Anxiety','Hypothyroidism'],'2025-01-11','active','Portland','OR'),
  makePatient('pt-005','Michael','Williams','1961-09-17','male','MRN-10005','(555) 678-9012','michael.williams@email.com',['COPD','Hypertension'],'2024-12-20','inactive','Phoenix','AZ'),
  makePatient('pt-006','Sarah','Johnson','1983-05-30','female','MRN-10006','(555) 789-0123','sarah.johnson@email.com',['Migraine','Depression'],'2025-01-13','active','Chicago','IL'),
  makePatient('pt-007','David','Martinez','1970-12-09','male','MRN-10007','(555) 890-1234','david.martinez@email.com',['Type 2 Diabetes','Obesity'],'2025-01-07','active','Houston','TX'),
  makePatient('pt-008','Lisa','Anderson','1957-04-18','female','MRN-10008','(555) 901-2345','lisa.anderson@email.com',['Osteoporosis','Hypertension'],'2025-01-09','active','Miami','FL'),
  makePatient('pt-009','Kevin','Brown','1995-08-25','male','MRN-10009','(555) 012-3456','kevin.brown@email.com',['Allergic Rhinitis'],'2025-01-14','active','Boston','MA'),
  makePatient('pt-010','Patricia','Davis','1948-01-31','female','MRN-10010','(555) 123-4567','patricia.davis@email.com',['Heart Failure','Chronic Kidney Disease'],'2025-01-06','critical','New York','NY'),
]
