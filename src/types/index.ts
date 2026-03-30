export interface AppPatient {
  id: string;
  mrn: string;
  name: string;
  dob: string;
  gender: string;
  status: 'active' | 'inactive';
  lastVisit: string;
  phone: string;
  address: string;
  city: string;
  state: string;
}

export interface AppEncounter {
  id: string;
  patientId: string;
  patientName: string;
  date: string;
  type: string;
  provider: string;
  status: string;
  duration: string;
  reason: string;
}

export interface AppObservation {
  id: string;
  patientId: string;
  patientName: string;
  date: string;
  type: string;
  category: 'vital-signs' | 'laboratory' | 'social-history';
  loincCode: string;
  value: string;
  unit: string;
  status: string;
}

export interface AppCondition {
  id: string;
  patientId: string;
  name: string;
  icd10Code: string;
  onsetDate: string;
  status: string;
  severity: string;
}

export interface AppMedication {
  id: string;
  patientId: string;
  patientName: string;
  drug: string;
  rxNormCode: string;
  dose: string;
  route: string;
  frequency: string;
  status: string;
  prescribedDate: string;
}

export interface MonthlyIntake {
  month: string;
  patients: number;
}
