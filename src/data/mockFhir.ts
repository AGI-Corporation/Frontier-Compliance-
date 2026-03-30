import type { AppPatient, AppEncounter, AppObservation, AppCondition, AppMedication, MonthlyIntake } from '../types';

export const mockPatients: AppPatient[] = [
  {
    id: 'pt-001', mrn: 'MRN-00001', name: 'Eleanor Voss', dob: '1968-03-14',
    gender: 'Female', status: 'active', lastVisit: '2025-03-20',
    phone: '(512) 555-0182', address: '4821 Maple Grove Dr', city: 'Austin', state: 'TX'
  },
  {
    id: 'pt-002', mrn: 'MRN-00002', name: 'Marcus Chen', dob: '1975-07-22',
    gender: 'Male', status: 'active', lastVisit: '2025-03-18',
    phone: '(415) 555-0347', address: '1209 Hillcrest Ave', city: 'San Francisco', state: 'CA'
  },
  {
    id: 'pt-003', mrn: 'MRN-00003', name: 'Sophia Martinez', dob: '1990-11-05',
    gender: 'Female', status: 'active', lastVisit: '2025-03-15',
    phone: '(305) 555-0619', address: '7733 Coral Way', city: 'Miami', state: 'FL'
  },
  {
    id: 'pt-004', mrn: 'MRN-00004', name: 'David Kim', dob: '1955-04-30',
    gender: 'Male', status: 'inactive', lastVisit: '2025-01-10',
    phone: '(206) 555-0923', address: '2156 Pine St', city: 'Seattle', state: 'WA'
  },
  {
    id: 'pt-005', mrn: 'MRN-00005', name: 'Aisha Johnson', dob: '1983-09-17',
    gender: 'Female', status: 'active', lastVisit: '2025-03-22',
    phone: '(312) 555-0741', address: '908 Michigan Ave', city: 'Chicago', state: 'IL'
  },
  {
    id: 'pt-006', mrn: 'MRN-00006', name: 'Robert Patel', dob: '1962-01-28',
    gender: 'Male', status: 'active', lastVisit: '2025-03-19',
    phone: '(617) 555-0456', address: '3344 Commonwealth Ave', city: 'Boston', state: 'MA'
  },
  {
    id: 'pt-007', mrn: 'MRN-00007', name: 'Natalie Brooks', dob: '1998-06-12',
    gender: 'Female', status: 'active', lastVisit: '2025-03-21',
    phone: '(720) 555-0834', address: '5510 Colfax Ave', city: 'Denver', state: 'CO'
  },
  {
    id: 'pt-008', mrn: 'MRN-00008', name: 'James Okafor', dob: '1971-12-03',
    gender: 'Male', status: 'inactive', lastVisit: '2025-02-05',
    phone: '(404) 555-0267', address: '1822 Peachtree Rd', city: 'Atlanta', state: 'GA'
  },
  {
    id: 'pt-009', mrn: 'MRN-00009', name: 'Linda Nguyen', dob: '1987-08-25',
    gender: 'Female', status: 'active', lastVisit: '2025-03-23',
    phone: '(503) 555-0598', address: '6621 Morrison St', city: 'Portland', state: 'OR'
  },
  {
    id: 'pt-010', mrn: 'MRN-00010', name: 'Thomas Reeves', dob: '1945-02-19',
    gender: 'Male', status: 'active', lastVisit: '2025-03-17',
    phone: '(602) 555-0371', address: '9087 Desert Rose Blvd', city: 'Phoenix', state: 'AZ'
  },
];

export const mockConditions: AppCondition[] = [
  { id: 'cond-001', patientId: 'pt-001', name: 'Type 2 Diabetes Mellitus', icd10Code: 'E11.9', onsetDate: '2015-06-10', status: 'active', severity: 'Moderate' },
  { id: 'cond-002', patientId: 'pt-001', name: 'Essential Hypertension', icd10Code: 'I10', onsetDate: '2018-02-20', status: 'active', severity: 'Mild' },
  { id: 'cond-003', patientId: 'pt-001', name: 'Hyperlipidemia', icd10Code: 'E78.5', onsetDate: '2019-11-15', status: 'active', severity: 'Mild' },
  { id: 'cond-004', patientId: 'pt-002', name: 'Asthma', icd10Code: 'J45.909', onsetDate: '2005-03-22', status: 'active', severity: 'Mild' },
  { id: 'cond-005', patientId: 'pt-002', name: 'Allergic Rhinitis', icd10Code: 'J30.9', onsetDate: '2010-09-01', status: 'active', severity: 'Mild' },
  { id: 'cond-006', patientId: 'pt-002', name: 'Gastroesophageal Reflux', icd10Code: 'K21.0', onsetDate: '2020-05-14', status: 'active', severity: 'Mild' },
  { id: 'cond-007', patientId: 'pt-003', name: 'Major Depressive Disorder', icd10Code: 'F32.1', onsetDate: '2018-07-30', status: 'active', severity: 'Moderate' },
  { id: 'cond-008', patientId: 'pt-003', name: 'Anxiety Disorder', icd10Code: 'F41.1', onsetDate: '2019-01-12', status: 'active', severity: 'Moderate' },
  { id: 'cond-009', patientId: 'pt-003', name: 'Migraine', icd10Code: 'G43.909', onsetDate: '2016-04-05', status: 'active', severity: 'Moderate' },
  { id: 'cond-010', patientId: 'pt-004', name: 'Coronary Artery Disease', icd10Code: 'I25.10', onsetDate: '2010-08-22', status: 'active', severity: 'Severe' },
  { id: 'cond-011', patientId: 'pt-004', name: 'Heart Failure', icd10Code: 'I50.9', onsetDate: '2018-11-30', status: 'active', severity: 'Severe' },
  { id: 'cond-012', patientId: 'pt-004', name: 'Chronic Kidney Disease Stage 3', icd10Code: 'N18.3', onsetDate: '2020-03-15', status: 'active', severity: 'Moderate' },
  { id: 'cond-013', patientId: 'pt-004', name: 'Atrial Fibrillation', icd10Code: 'I48.91', onsetDate: '2019-07-18', status: 'active', severity: 'Moderate' },
  { id: 'cond-014', patientId: 'pt-005', name: 'Systemic Lupus Erythematosus', icd10Code: 'M32.9', onsetDate: '2012-02-28', status: 'active', severity: 'Moderate' },
  { id: 'cond-015', patientId: 'pt-005', name: 'Anemia', icd10Code: 'D64.9', onsetDate: '2020-08-10', status: 'active', severity: 'Mild' },
  { id: 'cond-016', patientId: 'pt-006', name: 'Type 2 Diabetes Mellitus', icd10Code: 'E11.9', onsetDate: '2011-04-17', status: 'active', severity: 'Moderate' },
  { id: 'cond-017', patientId: 'pt-006', name: 'Chronic Back Pain', icd10Code: 'M54.5', onsetDate: '2017-09-23', status: 'active', severity: 'Moderate' },
  { id: 'cond-018', patientId: 'pt-006', name: 'Obesity', icd10Code: 'E66.9', onsetDate: '2015-01-06', status: 'active', severity: 'Moderate' },
  { id: 'cond-019', patientId: 'pt-007', name: 'Polycystic Ovary Syndrome', icd10Code: 'E28.2', onsetDate: '2019-06-20', status: 'active', severity: 'Mild' },
  { id: 'cond-020', patientId: 'pt-007', name: 'Iron Deficiency Anemia', icd10Code: 'D50.9', onsetDate: '2021-03-11', status: 'active', severity: 'Mild' },
  { id: 'cond-021', patientId: 'pt-008', name: 'HIV Infection', icd10Code: 'B20', onsetDate: '2008-11-14', status: 'active', severity: 'Moderate' },
  { id: 'cond-022', patientId: 'pt-008', name: 'Hypertension', icd10Code: 'I10', onsetDate: '2016-07-25', status: 'active', severity: 'Mild' },
  { id: 'cond-023', patientId: 'pt-008', name: 'Peripheral Neuropathy', icd10Code: 'G62.9', onsetDate: '2019-04-08', status: 'active', severity: 'Mild' },
  { id: 'cond-024', patientId: 'pt-009', name: 'Rheumatoid Arthritis', icd10Code: 'M06.9', onsetDate: '2020-10-19', status: 'active', severity: 'Moderate' },
  { id: 'cond-025', patientId: 'pt-009', name: 'Osteoporosis', icd10Code: 'M81.0', onsetDate: '2023-02-14', status: 'active', severity: 'Moderate' },
  { id: 'cond-026', patientId: 'pt-010', name: 'COPD', icd10Code: 'J44.9', onsetDate: '2009-05-30', status: 'active', severity: 'Severe' },
  { id: 'cond-027', patientId: 'pt-010', name: 'Lung Cancer', icd10Code: 'C34.10', onsetDate: '2022-08-15', status: 'active', severity: 'Severe' },
  { id: 'cond-028', patientId: 'pt-010', name: 'Hypertension', icd10Code: 'I10', onsetDate: '2005-03-22', status: 'active', severity: 'Moderate' },
  { id: 'cond-029', patientId: 'pt-010', name: 'Type 2 Diabetes', icd10Code: 'E11.9', onsetDate: '2012-07-04', status: 'active', severity: 'Mild' },
];

export const mockObservations: AppObservation[] = [
  { id: 'obs-001', patientId: 'pt-001', patientName: 'Eleanor Voss', date: '2025-03-20', type: 'Blood Pressure', category: 'vital-signs', loincCode: '85354-9', value: '138/88', unit: 'mmHg', status: 'final' },
  { id: 'obs-002', patientId: 'pt-001', patientName: 'Eleanor Voss', date: '2025-03-20', type: 'Heart Rate', category: 'vital-signs', loincCode: '8867-4', value: '78', unit: 'bpm', status: 'final' },
  { id: 'obs-003', patientId: 'pt-001', patientName: 'Eleanor Voss', date: '2025-03-20', type: 'HbA1c', category: 'laboratory', loincCode: '4548-4', value: '7.8', unit: '%', status: 'final' },
  { id: 'obs-004', patientId: 'pt-001', patientName: 'Eleanor Voss', date: '2025-03-20', type: 'Fasting Glucose', category: 'laboratory', loincCode: '1558-6', value: '142', unit: 'mg/dL', status: 'final' },
  { id: 'obs-005', patientId: 'pt-001', patientName: 'Eleanor Voss', date: '2025-03-20', type: 'BMI', category: 'vital-signs', loincCode: '39156-5', value: '28.4', unit: 'kg/m²', status: 'final' },
  { id: 'obs-006', patientId: 'pt-002', patientName: 'Marcus Chen', date: '2025-03-18', type: 'Blood Pressure', category: 'vital-signs', loincCode: '85354-9', value: '122/76', unit: 'mmHg', status: 'final' },
  { id: 'obs-007', patientId: 'pt-002', patientName: 'Marcus Chen', date: '2025-03-18', type: 'Oxygen Saturation', category: 'vital-signs', loincCode: '59408-5', value: '97', unit: '%', status: 'final' },
  { id: 'obs-008', patientId: 'pt-002', patientName: 'Marcus Chen', date: '2025-03-18', type: 'Peak Flow', category: 'laboratory', loincCode: '19000-3', value: '420', unit: 'L/min', status: 'final' },
  { id: 'obs-009', patientId: 'pt-002', patientName: 'Marcus Chen', date: '2025-03-18', type: 'IgE Total', category: 'laboratory', loincCode: '19113-4', value: '185', unit: 'IU/mL', status: 'final' },
  { id: 'obs-010', patientId: 'pt-003', patientName: 'Sophia Martinez', date: '2025-03-15', type: 'Blood Pressure', category: 'vital-signs', loincCode: '85354-9', value: '118/72', unit: 'mmHg', status: 'final' },
  { id: 'obs-011', patientId: 'pt-003', patientName: 'Sophia Martinez', date: '2025-03-15', type: 'PHQ-9 Score', category: 'social-history', loincCode: '44261-6', value: '12', unit: 'score', status: 'final' },
  { id: 'obs-012', patientId: 'pt-003', patientName: 'Sophia Martinez', date: '2025-03-15', type: 'GAD-7 Score', category: 'social-history', loincCode: '69737-5', value: '10', unit: 'score', status: 'final' },
  { id: 'obs-013', patientId: 'pt-003', patientName: 'Sophia Martinez', date: '2025-03-15', type: 'Heart Rate', category: 'vital-signs', loincCode: '8867-4', value: '82', unit: 'bpm', status: 'final' },
  { id: 'obs-014', patientId: 'pt-004', patientName: 'David Kim', date: '2025-01-10', type: 'Blood Pressure', category: 'vital-signs', loincCode: '85354-9', value: '158/94', unit: 'mmHg', status: 'final' },
  { id: 'obs-015', patientId: 'pt-004', patientName: 'David Kim', date: '2025-01-10', type: 'BNP', category: 'laboratory', loincCode: '42637-9', value: '520', unit: 'pg/mL', status: 'final' },
  { id: 'obs-016', patientId: 'pt-004', patientName: 'David Kim', date: '2025-01-10', type: 'Creatinine', category: 'laboratory', loincCode: '2160-0', value: '2.1', unit: 'mg/dL', status: 'final' },
  { id: 'obs-017', patientId: 'pt-004', patientName: 'David Kim', date: '2025-01-10', type: 'eGFR', category: 'laboratory', loincCode: '33914-3', value: '38', unit: 'mL/min/1.73m²', status: 'final' },
  { id: 'obs-018', patientId: 'pt-005', patientName: 'Aisha Johnson', date: '2025-03-22', type: 'Blood Pressure', category: 'vital-signs', loincCode: '85354-9', value: '124/78', unit: 'mmHg', status: 'final' },
  { id: 'obs-019', patientId: 'pt-005', patientName: 'Aisha Johnson', date: '2025-03-22', type: 'ANA Titer', category: 'laboratory', loincCode: '5048-4', value: '1:320', unit: 'titer', status: 'final' },
  { id: 'obs-020', patientId: 'pt-005', patientName: 'Aisha Johnson', date: '2025-03-22', type: 'Hemoglobin', category: 'laboratory', loincCode: '718-7', value: '10.2', unit: 'g/dL', status: 'final' },
  { id: 'obs-021', patientId: 'pt-005', patientName: 'Aisha Johnson', date: '2025-03-22', type: 'CRP', category: 'laboratory', loincCode: '1988-5', value: '18.4', unit: 'mg/L', status: 'final' },
  { id: 'obs-022', patientId: 'pt-006', patientName: 'Robert Patel', date: '2025-03-19', type: 'Blood Pressure', category: 'vital-signs', loincCode: '85354-9', value: '145/92', unit: 'mmHg', status: 'final' },
  { id: 'obs-023', patientId: 'pt-006', patientName: 'Robert Patel', date: '2025-03-19', type: 'HbA1c', category: 'laboratory', loincCode: '4548-4', value: '8.2', unit: '%', status: 'final' },
  { id: 'obs-024', patientId: 'pt-006', patientName: 'Robert Patel', date: '2025-03-19', type: 'BMI', category: 'vital-signs', loincCode: '39156-5', value: '33.1', unit: 'kg/m²', status: 'final' },
  { id: 'obs-025', patientId: 'pt-006', patientName: 'Robert Patel', date: '2025-03-19', type: 'Cholesterol Total', category: 'laboratory', loincCode: '2093-3', value: '228', unit: 'mg/dL', status: 'final' },
  { id: 'obs-026', patientId: 'pt-007', patientName: 'Natalie Brooks', date: '2025-03-21', type: 'Blood Pressure', category: 'vital-signs', loincCode: '85354-9', value: '112/68', unit: 'mmHg', status: 'final' },
  { id: 'obs-027', patientId: 'pt-007', patientName: 'Natalie Brooks', date: '2025-03-21', type: 'LH', category: 'laboratory', loincCode: '10501-5', value: '28.4', unit: 'IU/L', status: 'final' },
  { id: 'obs-028', patientId: 'pt-007', patientName: 'Natalie Brooks', date: '2025-03-21', type: 'Ferritin', category: 'laboratory', loincCode: '2276-4', value: '8', unit: 'ng/mL', status: 'final' },
  { id: 'obs-029', patientId: 'pt-008', patientName: 'James Okafor', date: '2025-02-05', type: 'Blood Pressure', category: 'vital-signs', loincCode: '85354-9', value: '136/84', unit: 'mmHg', status: 'final' },
  { id: 'obs-030', patientId: 'pt-008', patientName: 'James Okafor', date: '2025-02-05', type: 'CD4 Count', category: 'laboratory', loincCode: '24467-3', value: '620', unit: 'cells/µL', status: 'final' },
  { id: 'obs-031', patientId: 'pt-008', patientName: 'James Okafor', date: '2025-02-05', type: 'HIV Viral Load', category: 'laboratory', loincCode: '20447-9', value: '<20', unit: 'copies/mL', status: 'final' },
  { id: 'obs-032', patientId: 'pt-008', patientName: 'James Okafor', date: '2025-02-05', type: 'Weight', category: 'vital-signs', loincCode: '29463-7', value: '78.5', unit: 'kg', status: 'final' },
  { id: 'obs-033', patientId: 'pt-009', patientName: 'Linda Nguyen', date: '2025-03-23', type: 'Blood Pressure', category: 'vital-signs', loincCode: '85354-9', value: '128/82', unit: 'mmHg', status: 'final' },
  { id: 'obs-034', patientId: 'pt-009', patientName: 'Linda Nguyen', date: '2025-03-23', type: 'Anti-CCP', category: 'laboratory', loincCode: '32218-5', value: '185', unit: 'EU/mL', status: 'final' },
  { id: 'obs-035', patientId: 'pt-009', patientName: 'Linda Nguyen', date: '2025-03-23', type: 'ESR', category: 'laboratory', loincCode: '4537-7', value: '42', unit: 'mm/hr', status: 'final' },
  { id: 'obs-036', patientId: 'pt-009', patientName: 'Linda Nguyen', date: '2025-03-23', type: 'Bone Density T-score', category: 'laboratory', loincCode: '38263-0', value: '-2.8', unit: 'SD', status: 'final' },
  { id: 'obs-037', patientId: 'pt-010', patientName: 'Thomas Reeves', date: '2025-03-17', type: 'Blood Pressure', category: 'vital-signs', loincCode: '85354-9', value: '148/90', unit: 'mmHg', status: 'final' },
  { id: 'obs-038', patientId: 'pt-010', patientName: 'Thomas Reeves', date: '2025-03-17', type: 'FEV1', category: 'laboratory', loincCode: '20150-9', value: '1.2', unit: 'L', status: 'final' },
  { id: 'obs-039', patientId: 'pt-010', patientName: 'Thomas Reeves', date: '2025-03-17', type: 'Oxygen Saturation', category: 'vital-signs', loincCode: '59408-5', value: '91', unit: '%', status: 'final' },
  { id: 'obs-040', patientId: 'pt-010', patientName: 'Thomas Reeves', date: '2025-03-17', type: 'CEA', category: 'laboratory', loincCode: '2857-1', value: '12.4', unit: 'ng/mL', status: 'final' },
  { id: 'obs-041', patientId: 'pt-010', patientName: 'Thomas Reeves', date: '2025-03-17', type: 'HbA1c', category: 'laboratory', loincCode: '4548-4', value: '7.1', unit: '%', status: 'final' },
];

export const mockEncounters: AppEncounter[] = [
  { id: 'enc-001', patientId: 'pt-001', patientName: 'Eleanor Voss', date: '2025-03-20', type: 'Office Visit', provider: 'Dr. Sarah Kim', status: 'finished', duration: '30 min', reason: 'Diabetes follow-up' },
  { id: 'enc-002', patientId: 'pt-001', patientName: 'Eleanor Voss', date: '2025-01-15', type: 'Lab Visit', provider: 'Dr. Sarah Kim', status: 'finished', duration: '15 min', reason: 'HbA1c monitoring' },
  { id: 'enc-003', patientId: 'pt-002', patientName: 'Marcus Chen', date: '2025-03-18', type: 'Office Visit', provider: 'Dr. James Park', status: 'finished', duration: '25 min', reason: 'Asthma management' },
  { id: 'enc-004', patientId: 'pt-002', patientName: 'Marcus Chen', date: '2025-02-10', type: 'Urgent Care', provider: 'Dr. Lisa Wang', status: 'finished', duration: '45 min', reason: 'Asthma exacerbation' },
  { id: 'enc-005', patientId: 'pt-003', patientName: 'Sophia Martinez', date: '2025-03-15', type: 'Office Visit', provider: 'Dr. Rachel Cohen', status: 'finished', duration: '50 min', reason: 'Mental health check-in' },
  { id: 'enc-006', patientId: 'pt-003', patientName: 'Sophia Martinez', date: '2025-02-22', type: 'Office Visit', provider: 'Dr. Rachel Cohen', status: 'finished', duration: '45 min', reason: 'Medication adjustment' },
  { id: 'enc-007', patientId: 'pt-004', patientName: 'David Kim', date: '2025-01-10', type: 'Hospital Outpatient', provider: 'Dr. Michael Torres', status: 'finished', duration: '2 hr', reason: 'Cardiac evaluation' },
  { id: 'enc-008', patientId: 'pt-004', patientName: 'David Kim', date: '2024-11-05', type: 'Emergency', provider: 'Dr. Amy Johnson', status: 'finished', duration: '4 hr', reason: 'Acute HF exacerbation' },
  { id: 'enc-009', patientId: 'pt-005', patientName: 'Aisha Johnson', date: '2025-03-22', type: 'Office Visit', provider: 'Dr. Patricia Lee', status: 'finished', duration: '40 min', reason: 'Lupus monitoring' },
  { id: 'enc-010', patientId: 'pt-005', patientName: 'Aisha Johnson', date: '2025-02-14', type: 'Infusion', provider: 'Dr. Patricia Lee', status: 'finished', duration: '3 hr', reason: 'Biologic infusion' },
  { id: 'enc-011', patientId: 'pt-006', patientName: 'Robert Patel', date: '2025-03-19', type: 'Office Visit', provider: 'Dr. David Brown', status: 'finished', duration: '35 min', reason: 'Diabetes & back pain' },
  { id: 'enc-012', patientId: 'pt-007', patientName: 'Natalie Brooks', date: '2025-03-21', type: 'Office Visit', provider: 'Dr. Jennifer Adams', status: 'finished', duration: '30 min', reason: 'PCOS follow-up' },
  { id: 'enc-013', patientId: 'pt-008', patientName: 'James Okafor', date: '2025-02-05', type: 'Office Visit', provider: 'Dr. Marcus Webb', status: 'finished', duration: '40 min', reason: 'HIV monitoring' },
  { id: 'enc-014', patientId: 'pt-009', patientName: 'Linda Nguyen', date: '2025-03-23', type: 'Office Visit', provider: 'Dr. Stephanie Cruz', status: 'finished', duration: '35 min', reason: 'RA management' },
  { id: 'enc-015', patientId: 'pt-010', patientName: 'Thomas Reeves', date: '2025-03-17', type: 'Hospital Outpatient', provider: 'Dr. Robert Chang', status: 'finished', duration: '1.5 hr', reason: 'Oncology follow-up' },
  { id: 'enc-016', patientId: 'pt-010', patientName: 'Thomas Reeves', date: '2025-02-28', type: 'Chemotherapy', provider: 'Dr. Robert Chang', status: 'finished', duration: '4 hr', reason: 'Chemotherapy cycle 6' },
  { id: 'enc-017', patientId: 'pt-001', patientName: 'Eleanor Voss', date: '2025-03-25', type: 'Telehealth', provider: 'Dr. Sarah Kim', status: 'planned', duration: '20 min', reason: 'Medication review' },
  { id: 'enc-018', patientId: 'pt-009', patientName: 'Linda Nguyen', date: '2025-03-28', type: 'Infusion', provider: 'Dr. Stephanie Cruz', status: 'planned', duration: '2 hr', reason: 'Methotrexate infusion' },
];

export const mockMedications: AppMedication[] = [
  { id: 'med-001', patientId: 'pt-001', patientName: 'Eleanor Voss', drug: 'Metformin', rxNormCode: '861007', dose: '1000mg', route: 'Oral', frequency: 'Twice daily', status: 'active', prescribedDate: '2015-06-15' },
  { id: 'med-002', patientId: 'pt-001', patientName: 'Eleanor Voss', drug: 'Lisinopril', rxNormCode: '203644', dose: '10mg', route: 'Oral', frequency: 'Once daily', status: 'active', prescribedDate: '2018-03-01' },
  { id: 'med-003', patientId: 'pt-001', patientName: 'Eleanor Voss', drug: 'Atorvastatin', rxNormCode: '617310', dose: '20mg', route: 'Oral', frequency: 'Once nightly', status: 'active', prescribedDate: '2019-11-20' },
  { id: 'med-004', patientId: 'pt-002', patientName: 'Marcus Chen', drug: 'Albuterol Inhaler', rxNormCode: '745679', dose: '90mcg/actuation', route: 'Inhalation', frequency: 'PRN', status: 'active', prescribedDate: '2005-04-10' },
  { id: 'med-005', patientId: 'pt-002', patientName: 'Marcus Chen', drug: 'Fluticasone Inhaler', rxNormCode: '896021', dose: '110mcg/actuation', route: 'Inhalation', frequency: 'Twice daily', status: 'active', prescribedDate: '2010-09-15' },
  { id: 'med-006', patientId: 'pt-002', patientName: 'Marcus Chen', drug: 'Omeprazole', rxNormCode: '904967', dose: '20mg', route: 'Oral', frequency: 'Once daily', status: 'active', prescribedDate: '2020-06-01' },
  { id: 'med-007', patientId: 'pt-003', patientName: 'Sophia Martinez', drug: 'Sertraline', rxNormCode: '312036', dose: '100mg', route: 'Oral', frequency: 'Once daily', status: 'active', prescribedDate: '2018-08-10' },
  { id: 'med-008', patientId: 'pt-003', patientName: 'Sophia Martinez', drug: 'Buspirone', rxNormCode: '828695', dose: '15mg', route: 'Oral', frequency: 'Twice daily', status: 'active', prescribedDate: '2019-02-20' },
  { id: 'med-009', patientId: 'pt-003', patientName: 'Sophia Martinez', drug: 'Sumatriptan', rxNormCode: '860086', dose: '50mg', route: 'Oral', frequency: 'PRN migraine', status: 'active', prescribedDate: '2016-05-12' },
  { id: 'med-010', patientId: 'pt-004', patientName: 'David Kim', drug: 'Carvedilol', rxNormCode: '200033', dose: '25mg', route: 'Oral', frequency: 'Twice daily', status: 'active', prescribedDate: '2018-12-10' },
  { id: 'med-011', patientId: 'pt-004', patientName: 'David Kim', drug: 'Furosemide', rxNormCode: '202991', dose: '40mg', route: 'Oral', frequency: 'Once daily', status: 'active', prescribedDate: '2018-12-10' },
  { id: 'med-012', patientId: 'pt-004', patientName: 'David Kim', drug: 'Warfarin', rxNormCode: '855332', dose: '5mg', route: 'Oral', frequency: 'Once daily', status: 'active', prescribedDate: '2019-08-01' },
  { id: 'med-013', patientId: 'pt-005', patientName: 'Aisha Johnson', drug: 'Hydroxychloroquine', rxNormCode: '153165', dose: '400mg', route: 'Oral', frequency: 'Once daily', status: 'active', prescribedDate: '2012-03-15' },
  { id: 'med-014', patientId: 'pt-005', patientName: 'Aisha Johnson', drug: 'Ferrous Sulfate', rxNormCode: '310325', dose: '325mg', route: 'Oral', frequency: 'Twice daily', status: 'active', prescribedDate: '2020-09-01' },
  { id: 'med-015', patientId: 'pt-006', patientName: 'Robert Patel', drug: 'Semaglutide', rxNormCode: '2200041', dose: '1mg', route: 'Subcutaneous', frequency: 'Weekly', status: 'active', prescribedDate: '2022-01-10' },
  { id: 'med-016', patientId: 'pt-006', patientName: 'Robert Patel', drug: 'Gabapentin', rxNormCode: '310431', dose: '300mg', route: 'Oral', frequency: 'Three times daily', status: 'active', prescribedDate: '2017-10-05' },
  { id: 'med-017', patientId: 'pt-007', patientName: 'Natalie Brooks', drug: 'Metformin', rxNormCode: '861007', dose: '500mg', route: 'Oral', frequency: 'Once daily', status: 'active', prescribedDate: '2019-07-01' },
  { id: 'med-018', patientId: 'pt-007', patientName: 'Natalie Brooks', drug: 'Iron Supplement', rxNormCode: '310325', dose: '325mg', route: 'Oral', frequency: 'Once daily', status: 'active', prescribedDate: '2021-04-01' },
  { id: 'med-019', patientId: 'pt-008', patientName: 'James Okafor', drug: 'Bictegravir/TAF/FTC', rxNormCode: '1999665', dose: '50/25/200mg', route: 'Oral', frequency: 'Once daily', status: 'active', prescribedDate: '2019-01-15' },
  { id: 'med-020', patientId: 'pt-008', patientName: 'James Okafor', drug: 'Amlodipine', rxNormCode: '197361', dose: '5mg', route: 'Oral', frequency: 'Once daily', status: 'active', prescribedDate: '2016-08-10' },
  { id: 'med-021', patientId: 'pt-009', patientName: 'Linda Nguyen', drug: 'Methotrexate', rxNormCode: '105586', dose: '15mg', route: 'Oral', frequency: 'Weekly', status: 'active', prescribedDate: '2020-11-01' },
  { id: 'med-022', patientId: 'pt-009', patientName: 'Linda Nguyen', drug: 'Folic Acid', rxNormCode: '316594', dose: '1mg', route: 'Oral', frequency: 'Once daily (except MTX day)', status: 'active', prescribedDate: '2020-11-01' },
  { id: 'med-023', patientId: 'pt-009', patientName: 'Linda Nguyen', drug: 'Alendronate', rxNormCode: '904672', dose: '70mg', route: 'Oral', frequency: 'Weekly', status: 'active', prescribedDate: '2023-03-01' },
  { id: 'med-024', patientId: 'pt-010', patientName: 'Thomas Reeves', drug: 'Carboplatin', rxNormCode: '40048', dose: 'AUC 5', route: 'Intravenous', frequency: 'Every 3 weeks', status: 'active', prescribedDate: '2022-09-01' },
  { id: 'med-025', patientId: 'pt-010', patientName: 'Thomas Reeves', drug: 'Tiotropium Inhaler', rxNormCode: '703106', dose: '18mcg', route: 'Inhalation', frequency: 'Once daily', status: 'active', prescribedDate: '2009-06-15' },
  { id: 'med-026', patientId: 'pt-010', patientName: 'Thomas Reeves', drug: 'Metformin', rxNormCode: '861007', dose: '500mg', route: 'Oral', frequency: 'Twice daily', status: 'active', prescribedDate: '2012-08-01' },
];

export const monthlyIntakeData: MonthlyIntake[] = [
  { month: 'Apr', patients: 210 },
  { month: 'May', patients: 245 },
  { month: 'Jun', patients: 198 },
  { month: 'Jul', patients: 267 },
  { month: 'Aug', patients: 289 },
  { month: 'Sep', patients: 312 },
  { month: 'Oct', patients: 278 },
  { month: 'Nov', patients: 334 },
  { month: 'Dec', patients: 298 },
  { month: 'Jan', patients: 356 },
  { month: 'Feb', patients: 318 },
  { month: 'Mar', patients: 342 },
];

export function getPatientById(id: string): AppPatient | undefined {
  return mockPatients.find(p => p.id === id);
}

export function getConditionsByPatient(patientId: string): AppCondition[] {
  return mockConditions.filter(c => c.patientId === patientId);
}

export function getObservationsByPatient(patientId: string): AppObservation[] {
  return mockObservations.filter(o => o.patientId === patientId);
}

export function getEncountersByPatient(patientId: string): AppEncounter[] {
  return mockEncounters.filter(e => e.patientId === patientId);
}

export function getMedicationsByPatient(patientId: string): AppMedication[] {
  return mockMedications.filter(m => m.patientId === patientId);
}
