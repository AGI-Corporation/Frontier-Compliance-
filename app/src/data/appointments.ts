import type { AppAppointment } from '../types/fhir'
import type { Appointment } from 'fhir/r4'

const makeAppt = (
  id: string, patientId: string, patientName: string,
  practitioner: string, date: string, time: string,
  type: string, status: 'scheduled' | 'completed' | 'cancelled' | 'arrived',
  reason: string
): AppAppointment => {
  const fhir: Appointment = {
    resourceType: 'Appointment',
    id,
    status: status === 'scheduled' ? 'proposed' : status === 'completed' ? 'fulfilled' : status === 'cancelled' ? 'cancelled' : 'arrived',
    appointmentType: { coding: [{ display: type }] },
    reasonCode: [{ text: reason }],
    start: `${date}T${time}:00Z`,
    participant: [
      { actor: { reference: `Patient/${patientId}`, display: patientName }, status: 'accepted' },
      { actor: { display: practitioner }, status: 'accepted' },
    ],
  }
  return { id, patientId, patientName, practitioner, date, time, type, status, reason, fhir }
}

export const appointments: AppAppointment[] = [
  makeAppt('appt-001','pt-001','James Harrington','Dr. Sarah Kim','2025-01-15','09:00','Follow-up','scheduled','Diabetes management review'),
  makeAppt('appt-002','pt-002','Maria Santos','Dr. Alan Patel','2025-01-15','09:30','Routine','scheduled','Asthma check-up'),
  makeAppt('appt-003','pt-003','Robert Chen','Dr. Jennifer Lee','2025-01-15','10:00','Urgent','arrived','Cardiac monitoring'),
  makeAppt('appt-004','pt-004','Emily Thompson','Dr. Marcus Webb','2025-01-15','10:30','Follow-up','scheduled','Thyroid management'),
  makeAppt('appt-005','pt-006','Sarah Johnson','Dr. Diana Cruz','2025-01-15','11:00','Routine','scheduled','Migraine assessment'),
  makeAppt('appt-006','pt-007','David Martinez','Dr. Sarah Kim','2025-01-15','11:30','Follow-up','completed','HbA1c results review'),
  makeAppt('appt-007','pt-008','Lisa Anderson','Dr. Robert Nguyen','2025-01-15','13:00','Specialist','scheduled','Bone density follow-up'),
  makeAppt('appt-008','pt-009','Kevin Brown','Dr. Alan Patel','2025-01-15','13:30','Routine','scheduled','Allergy review'),
  makeAppt('appt-009','pt-010','Patricia Davis','Dr. Jennifer Lee','2025-01-15','14:00','Urgent','arrived','Kidney function assessment'),
  makeAppt('appt-010','pt-005','Michael Williams','Dr. Marcus Webb','2025-01-15','14:30','Follow-up','cancelled','COPD management'),
  makeAppt('appt-011','pt-001','James Harrington','Dr. Sarah Kim','2025-01-16','09:00','Routine','scheduled','Blood pressure check'),
  makeAppt('appt-012','pt-003','Robert Chen','Dr. Jennifer Lee','2025-01-16','10:00','Follow-up','scheduled','Post-cardiac event review'),
  makeAppt('appt-013','pt-002','Maria Santos','Dr. Alan Patel','2025-01-17','09:30','Specialist','scheduled','Pulmonology referral'),
  makeAppt('appt-014','pt-010','Patricia Davis','Dr. Jennifer Lee','2025-01-17','11:00','Urgent','scheduled','Nephrology follow-up'),
  makeAppt('appt-015','pt-004','Emily Thompson','Dr. Marcus Webb','2025-01-18','10:30','Routine','scheduled','Mental health check-in'),
]
