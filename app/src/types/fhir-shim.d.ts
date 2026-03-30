// Module shim to allow importing from 'fhir/r4'
declare module 'fhir/r4' {
  export type Patient = fhir4.Patient
  export type Observation = fhir4.Observation
  export type Appointment = fhir4.Appointment
  export type Condition = fhir4.Condition
  export type Medication = fhir4.Medication
  export type MedicationRequest = fhir4.MedicationRequest
  export type Bundle = fhir4.Bundle
  export type HumanName = fhir4.HumanName
  export type ContactPoint = fhir4.ContactPoint
  export type Address = fhir4.Address
  export type CodeableConcept = fhir4.CodeableConcept
  export type Coding = fhir4.Coding
  export type Reference = fhir4.Reference
  export type Period = fhir4.Period
  export type Identifier = fhir4.Identifier
  export type Quantity = fhir4.Quantity
  export type Practitioner = fhir4.Practitioner
  export type Organization = fhir4.Organization
}
