import type { AppObservation } from '../types/fhir'
import type { Observation } from 'fhir/r4'

const makeObs = (
  id: string, patientId: string, patientName: string,
  type: string, value: string, unit: string, date: string,
  status: 'final' | 'preliminary' | 'amended',
  category: 'vital-signs' | 'laboratory' | 'imaging',
  loincCode: string, loincDisplay: string
): AppObservation => {
  const fhir: Observation = {
    resourceType: 'Observation',
    id,
    status,
    category: [{ coding: [{ system: 'http://terminology.hl7.org/CodeSystem/observation-category', code: category }] }],
    code: { coding: [{ system: 'http://loinc.org', code: loincCode, display: loincDisplay }], text: type },
    subject: { reference: `Patient/${patientId}` },
    effectiveDateTime: date,
    valueQuantity: isNaN(Number(value)) ? undefined : { value: Number(value), unit, system: 'http://unitsofmeasure.org' },
    valueString: isNaN(Number(value)) ? value : undefined,
  }
  return { id, patientId, patientName, type, value, unit, date, status, category, fhir }
}

export const observations: AppObservation[] = [
  makeObs('obs-001','pt-001','James Harrington','Blood Pressure','142','mmHg','2025-01-10','final','vital-signs','85354-9','Blood pressure panel'),
  makeObs('obs-002','pt-001','James Harrington','Blood Glucose','185','mg/dL','2025-01-10','final','laboratory','2339-0','Glucose [Mass/volume] in Blood'),
  makeObs('obs-003','pt-002','Maria Santos','Peak Flow','320','L/min','2025-01-12','final','vital-signs','19935-6','Maximum expiratory gas flow'),
  makeObs('obs-004','pt-003','Robert Chen','Heart Rate','98','bpm','2025-01-08','final','vital-signs','8867-4','Heart rate'),
  makeObs('obs-005','pt-003','Robert Chen','BNP','450','pg/mL','2025-01-08','final','laboratory','42637-9','Natriuretic peptide B [Mass/volume] in Serum'),
  makeObs('obs-006','pt-004','Emily Thompson','TSH','0.4','mIU/L','2025-01-11','final','laboratory','3016-3','TSH [Units/volume] in Serum'),
  makeObs('obs-007','pt-005','Michael Williams','SpO2','91','%','2024-12-20','final','vital-signs','59408-5','Oxygen saturation in Arterial blood by Pulse oximetry'),
  makeObs('obs-008','pt-006','Sarah Johnson','Pain Score','7','0-10','2025-01-13','final','vital-signs','72514-3','Pain severity - 0-10 verbal numeric rating'),
  makeObs('obs-009','pt-007','David Martinez','HbA1c','8.2','%','2025-01-07','final','laboratory','4548-4','Hemoglobin A1c/Hemoglobin.total in Blood'),
  makeObs('obs-010','pt-007','David Martinez','BMI','32.4','kg/m2','2025-01-07','final','vital-signs','39156-5','Body mass index (BMI)'),
  makeObs('obs-011','pt-008','Lisa Anderson','Bone Density','\u22122.6','T-score','2025-01-09','final','imaging','38267-0','DXA Bone density'),
  makeObs('obs-012','pt-009','Kevin Brown','IgE','285','kU/L','2025-01-14','final','laboratory','19113-9','Immunoglobulin E [Units/volume] in Serum'),
  makeObs('obs-013','pt-010','Patricia Davis','Creatinine','2.8','mg/dL','2025-01-06','final','laboratory','2160-0','Creatinine [Mass/volume] in Serum'),
  makeObs('obs-014','pt-010','Patricia Davis','eGFR','22','mL/min/1.73m2','2025-01-06','final','laboratory','62238-1','Glomerular filtration rate/1.73 sq M.predicted'),
  makeObs('obs-015','pt-001','James Harrington','Body Weight','94','kg','2025-01-10','final','vital-signs','29463-7','Body weight'),
  makeObs('obs-016','pt-002','Maria Santos','Body Temperature','37.2','\u00b0C','2025-01-12','final','vital-signs','8310-5','Body temperature'),
  makeObs('obs-017','pt-004','Emily Thompson','Mood Assessment','Mild','categorical','2025-01-11','final','vital-signs','89204-2','PHQ-9 Depression assessment'),
  makeObs('obs-018','pt-005','Michael Williams','FEV1','58','% predicted','2024-12-20','final','laboratory','20150-9','FEV1 measured/predicted'),
  makeObs('obs-019','pt-006','Sarah Johnson','Systolic BP','118','mmHg','2025-01-13','final','vital-signs','8480-6','Systolic blood pressure'),
  makeObs('obs-020','pt-008','Lisa Anderson','Vitamin D','18','ng/mL','2025-01-09','final','laboratory','1989-3','25-hydroxyvitamin D3 in Serum'),
]
