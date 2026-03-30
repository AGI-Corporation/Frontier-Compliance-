// Re-export FHIR R4 types
export type {
  Patient,
  Observation,
  Appointment,
  Condition,
  Medication,
  MedicationRequest,
  Bundle,
  HumanName,
  ContactPoint,
  Address,
  CodeableConcept,
  Coding,
  Reference,
  Period,
  Identifier,
  Quantity,
} from 'fhir/r4'

export type FhirResourceType =
  | 'Patient'
  | 'Observation'
  | 'Condition'
  | 'Appointment'
  | 'Medication'
  | 'MedicationRequest'
  | 'Bundle'
  | 'Practitioner'
  | 'Organization'

export interface AppPatient {
  id: string
  name: string
  dob: string
  gender: string
  mrn: string
  phone: string
  email: string
  conditions: string[]
  lastVisit: string
  status: 'active' | 'inactive' | 'critical'
  fhir: import('fhir/r4').Patient
}

export interface AppObservation {
  id: string
  patientId: string
  patientName: string
  type: string
  value: string
  unit: string
  date: string
  status: 'final' | 'preliminary' | 'amended'
  category: 'vital-signs' | 'laboratory' | 'imaging'
  fhir: import('fhir/r4').Observation
}

export interface AppAppointment {
  id: string
  patientId: string
  patientName: string
  practitioner: string
  date: string
  time: string
  type: string
  status: 'scheduled' | 'completed' | 'cancelled' | 'arrived'
  reason: string
  fhir: import('fhir/r4').Appointment
}
