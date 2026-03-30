import type { Condition } from 'fhir/r4'

export const conditions: Condition[] = [
  {
    resourceType: 'Condition',
    id: 'cond-001',
    subject: { reference: 'Patient/pt-001' },
    code: { coding: [{ system: 'http://snomed.info/sct', code: '38341003', display: 'Hypertension' }], text: 'Hypertension' },
    clinicalStatus: { coding: [{ code: 'active' }] },
    onsetDateTime: '2015-03-01',
  },
  {
    resourceType: 'Condition',
    id: 'cond-002',
    subject: { reference: 'Patient/pt-001' },
    code: { coding: [{ system: 'http://snomed.info/sct', code: '44054006', display: 'Type 2 Diabetes Mellitus' }], text: 'Type 2 Diabetes' },
    clinicalStatus: { coding: [{ code: 'active' }] },
    onsetDateTime: '2018-07-15',
  },
  {
    resourceType: 'Condition',
    id: 'cond-003',
    subject: { reference: 'Patient/pt-003' },
    code: { coding: [{ system: 'http://snomed.info/sct', code: '49436004', display: 'Atrial fibrillation' }], text: 'Atrial Fibrillation' },
    clinicalStatus: { coding: [{ code: 'active' }] },
    onsetDateTime: '2020-11-10',
  },
  {
    resourceType: 'Condition',
    id: 'cond-004',
    subject: { reference: 'Patient/pt-010' },
    code: { coding: [{ system: 'http://snomed.info/sct', code: '42399005', display: 'Renal failure' }], text: 'Chronic Kidney Disease' },
    clinicalStatus: { coding: [{ code: 'active' }] },
    onsetDateTime: '2019-05-20',
  },
]
