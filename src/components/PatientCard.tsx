import { Link } from 'react-router-dom';
import { User, Calendar, MapPin, Phone } from 'lucide-react';
import Badge from './Badge';
import type { AppPatient } from '../types';

interface PatientCardProps {
  patient: AppPatient;
}

export default function PatientCard({ patient }: PatientCardProps) {
  const age = new Date().getFullYear() - new Date(patient.dob).getFullYear();

  return (
    <Link
      to={`/patients/${patient.id}`}
      className="block bg-[#111118] border border-[#1e1e2e] rounded-xl p-5 hover:border-[#00d4ff]/30 hover:shadow-[0_0_20px_rgba(0,212,255,0.05)] transition-all duration-300 group"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00d4ff]/20 to-[#7c3aed]/20 border border-[#1e1e2e] flex items-center justify-center flex-shrink-0">
          <User className="w-6 h-6 text-[#00d4ff]" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 mb-1">
            <h3 className="font-semibold text-white group-hover:text-[#00d4ff] transition-colors truncate">{patient.name}</h3>
            <Badge status={patient.status} size="sm" />
          </div>
          <p className="text-xs text-[#00d4ff] font-mono mb-2">{patient.mrn}</p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1">
            <div className="flex items-center gap-1.5 text-xs text-gray-400">
              <User className="w-3 h-3" />
              <span>{patient.gender}, {age}y</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-gray-400">
              <Calendar className="w-3 h-3" />
              <span>Last: {new Date(patient.lastVisit).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-gray-400">
              <MapPin className="w-3 h-3" />
              <span>{patient.city}, {patient.state}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-gray-400">
              <Phone className="w-3 h-3" />
              <span>{patient.phone}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
