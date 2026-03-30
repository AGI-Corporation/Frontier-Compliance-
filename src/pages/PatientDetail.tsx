import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, User, Calendar, MapPin, Phone, Activity } from 'lucide-react';
import Badge from '../components/Badge';
import {
  getPatientById, getConditionsByPatient, getObservationsByPatient,
  getEncountersByPatient, getMedicationsByPatient
} from '../data/mockFhir';

const TABS = ['Overview', 'Conditions', 'Medications', 'Observations', 'Encounters'] as const;
type Tab = typeof TABS[number];

export default function PatientDetail() {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<Tab>('Overview');

  const patient = getPatientById(id!);
  if (!patient) {
    return (
      <div className="p-6 text-center text-gray-400">
        <p>Patient not found.</p>
        <Link to="/patients" className="text-[#00d4ff] hover:underline mt-2 inline-block">← Back to patients</Link>
      </div>
    );
  }

  const conditions = getConditionsByPatient(patient.id);
  const observations = getObservationsByPatient(patient.id);
  const encounters = getEncountersByPatient(patient.id);
  const medications = getMedicationsByPatient(patient.id);
  const age = new Date().getFullYear() - new Date(patient.dob).getFullYear();

  return (
    <div>
      {/* Header */}
      <div className="bg-[#080810] border-b border-[#1e1e2e] px-6 py-5">
        <Link to="/patients" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#00d4ff] text-sm mb-4 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Patients
        </Link>
        <div className="flex items-start gap-5">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00d4ff]/20 to-[#7c3aed]/20 border border-[#00d4ff]/30 flex items-center justify-center shadow-[0_0_20px_rgba(0,212,255,0.15)]">
            <User className="w-8 h-8 text-[#00d4ff]" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-2xl font-bold text-white">{patient.name}</h1>
              <Badge status={patient.status} />
            </div>
            <p className="text-[#00d4ff] font-mono text-sm mb-3">{patient.mrn}</p>
            <div className="flex flex-wrap gap-x-6 gap-y-1">
              <div className="flex items-center gap-1.5 text-sm text-gray-400">
                <User className="w-3.5 h-3.5" />{patient.gender}, {age} years old
              </div>
              <div className="flex items-center gap-1.5 text-sm text-gray-400">
                <Calendar className="w-3.5 h-3.5" />DOB: {new Date(patient.dob).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-1.5 text-sm text-gray-400">
                <MapPin className="w-3.5 h-3.5" />{patient.address}, {patient.city}, {patient.state}
              </div>
              <div className="flex items-center gap-1.5 text-sm text-gray-400">
                <Phone className="w-3.5 h-3.5" />{patient.phone}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 text-center">
            {[
              { label: 'Conditions', value: conditions.length },
              { label: 'Medications', value: medications.length },
              { label: 'Observations', value: observations.length },
              { label: 'Encounters', value: encounters.length },
            ].map(({ label, value }) => (
              <div key={label} className="bg-[#111118] border border-[#1e1e2e] rounded-lg px-4 py-2">
                <p className="text-xl font-bold text-[#00d4ff]">{value}</p>
                <p className="text-xs text-gray-400">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mt-5 border-b border-[#1e1e2e] -mb-px">
          {TABS.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium transition-all border-b-2 ${
                activeTab === tab
                  ? 'text-[#00d4ff] border-[#00d4ff]'
                  : 'text-gray-400 border-transparent hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {activeTab === 'Overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-[#111118] border border-[#1e1e2e] rounded-xl p-5">
              <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#00d4ff]" /> Active Conditions
              </h3>
              <div className="space-y-2">
                {conditions.slice(0, 5).map(c => (
                  <div key={c.id} className="flex items-center justify-between p-2.5 bg-[#0a0a0f] rounded-lg border border-[#1e1e2e]">
                    <div>
                      <p className="text-sm text-white">{c.name}</p>
                      <p className="text-xs text-gray-500 font-mono">{c.icd10Code}</p>
                    </div>
                    <Badge status={c.severity} size="sm" />
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#111118] border border-[#1e1e2e] rounded-xl p-5">
              <h3 className="text-sm font-semibold text-white mb-4">Recent Observations</h3>
              <div className="space-y-2">
                {observations.slice(0, 5).map(o => (
                  <div key={o.id} className="flex items-center justify-between p-2.5 bg-[#0a0a0f] rounded-lg border border-[#1e1e2e]">
                    <div>
                      <p className="text-sm text-white">{o.type}</p>
                      <p className="text-xs text-gray-500">{o.loincCode} · {o.category}</p>
                    </div>
                    <p className="text-sm font-semibold text-[#00d4ff]">{o.value} <span className="text-xs text-gray-500">{o.unit}</span></p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Conditions' && (
          <div className="bg-[#111118] border border-[#1e1e2e] rounded-xl overflow-hidden">
            <table className="w-full">
              <thead><tr className="border-b border-[#1e1e2e]">
                {['Condition', 'ICD-10', 'Onset', 'Severity', 'Status'].map(h => (
                  <th key={h} className="text-left text-xs text-gray-500 font-semibold uppercase tracking-wider px-6 py-3">{h}</th>
                ))}
              </tr></thead>
              <tbody>
                {conditions.map(c => (
                  <tr key={c.id} className="border-b border-[#1e1e2e]/50 hover:bg-[#1e1e2e]/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-white">{c.name}</td>
                    <td className="px-6 py-4 text-sm font-mono text-[#00d4ff]">{c.icd10Code}</td>
                    <td className="px-6 py-4 text-sm text-gray-300">{new Date(c.onsetDate).toLocaleDateString()}</td>
                    <td className="px-6 py-4"><Badge status={c.severity} size="sm" /></td>
                    <td className="px-6 py-4"><Badge status={c.status} size="sm" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'Medications' && (
          <div className="bg-[#111118] border border-[#1e1e2e] rounded-xl overflow-hidden">
            <table className="w-full">
              <thead><tr className="border-b border-[#1e1e2e]">
                {['Drug', 'RxNorm', 'Dose', 'Route', 'Frequency', 'Status'].map(h => (
                  <th key={h} className="text-left text-xs text-gray-500 font-semibold uppercase tracking-wider px-6 py-3">{h}</th>
                ))}
              </tr></thead>
              <tbody>
                {medications.map(m => (
                  <tr key={m.id} className="border-b border-[#1e1e2e]/50 hover:bg-[#1e1e2e]/30 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-white">{m.drug}</td>
                    <td className="px-6 py-4 text-xs font-mono text-gray-400">{m.rxNormCode}</td>
                    <td className="px-6 py-4 text-sm text-gray-300">{m.dose}</td>
                    <td className="px-6 py-4 text-sm text-gray-300">{m.route}</td>
                    <td className="px-6 py-4 text-sm text-gray-300">{m.frequency}</td>
                    <td className="px-6 py-4"><Badge status={m.status} size="sm" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'Observations' && (
          <div className="bg-[#111118] border border-[#1e1e2e] rounded-xl overflow-hidden">
            <table className="w-full">
              <thead><tr className="border-b border-[#1e1e2e]">
                {['Observation', 'LOINC', 'Category', 'Value', 'Date', 'Status'].map(h => (
                  <th key={h} className="text-left text-xs text-gray-500 font-semibold uppercase tracking-wider px-6 py-3">{h}</th>
                ))}
              </tr></thead>
              <tbody>
                {observations.map(o => (
                  <tr key={o.id} className="border-b border-[#1e1e2e]/50 hover:bg-[#1e1e2e]/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-white">{o.type}</td>
                    <td className="px-6 py-4 text-xs font-mono text-[#00d4ff]">{o.loincCode}</td>
                    <td className="px-6 py-4 text-xs text-gray-400 capitalize">{o.category}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-white">{o.value} <span className="text-xs font-normal text-gray-400">{o.unit}</span></td>
                    <td className="px-6 py-4 text-sm text-gray-300">{new Date(o.date).toLocaleDateString()}</td>
                    <td className="px-6 py-4"><Badge status={o.status} size="sm" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'Encounters' && (
          <div className="bg-[#111118] border border-[#1e1e2e] rounded-xl overflow-hidden">
            <table className="w-full">
              <thead><tr className="border-b border-[#1e1e2e]">
                {['Date', 'Type', 'Provider', 'Reason', 'Duration', 'Status'].map(h => (
                  <th key={h} className="text-left text-xs text-gray-500 font-semibold uppercase tracking-wider px-6 py-3">{h}</th>
                ))}
              </tr></thead>
              <tbody>
                {encounters.map(e => (
                  <tr key={e.id} className="border-b border-[#1e1e2e]/50 hover:bg-[#1e1e2e]/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300">{new Date(e.date).toLocaleDateString()}</td>
                    <td className="px-6 py-4 text-sm text-white">{e.type}</td>
                    <td className="px-6 py-4 text-sm text-gray-300">{e.provider}</td>
                    <td className="px-6 py-4 text-sm text-gray-300">{e.reason}</td>
                    <td className="px-6 py-4 text-sm text-gray-300">{e.duration}</td>
                    <td className="px-6 py-4"><Badge status={e.status} size="sm" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
