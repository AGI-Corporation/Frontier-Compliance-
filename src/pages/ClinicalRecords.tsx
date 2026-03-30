import { useState } from 'react';
import { Search } from 'lucide-react';
import Badge from '../components/Badge';
import { mockObservations, mockConditions } from '../data/mockFhir';

type CategoryFilter = 'all' | 'vital-signs' | 'laboratory' | 'social-history';

export default function ClinicalRecords() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<CategoryFilter>('all');
  const [view, setView] = useState<'observations' | 'conditions'>('observations');

  const filteredObs = mockObservations.filter(o => {
    const matchSearch = o.patientName.toLowerCase().includes(search.toLowerCase()) ||
      o.type.toLowerCase().includes(search.toLowerCase()) ||
      o.loincCode.includes(search);
    const matchCategory = category === 'all' || o.category === category;
    return matchSearch && matchCategory;
  });

  const filteredCond = mockConditions.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.icd10Code.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-5">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search observations or conditions..."
            className="w-full bg-[#111118] border border-[#1e1e2e] rounded-lg pl-10 pr-4 py-2.5 text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-[#00d4ff]/50"
          />
        </div>
        <div className="flex gap-2">
          {(['observations', 'conditions'] as const).map(v => (
            <button key={v} onClick={() => setView(v)} className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all ${view === v ? 'bg-[#7c3aed]/10 text-[#7c3aed] border border-[#7c3aed]/30' : 'bg-[#111118] text-gray-400 border border-[#1e1e2e] hover:border-[#2a2a3e]'}`}>
              {v}
            </button>
          ))}
        </div>
      </div>

      {view === 'observations' && (
        <>
          <div className="flex gap-2">
            {(['all', 'vital-signs', 'laboratory', 'social-history'] as const).map(cat => (
              <button key={cat} onClick={() => setCategory(cat)} className={`px-3 py-1.5 rounded-full text-xs font-medium capitalize transition-all ${category === cat ? 'bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/30' : 'bg-[#111118] text-gray-500 border border-[#1e1e2e] hover:text-gray-300'}`}>
                {cat.replace('-', ' ')}
              </button>
            ))}
          </div>
          <div className="bg-[#111118] border border-[#1e1e2e] rounded-xl overflow-hidden">
            <div className="px-6 py-3 border-b border-[#1e1e2e]">
              <p className="text-xs text-gray-500">{filteredObs.length} observations</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead><tr className="border-b border-[#1e1e2e]">
                  {['Date', 'Patient', 'Observation', 'LOINC', 'Category', 'Value', 'Status'].map(h => (
                    <th key={h} className="text-left text-xs text-gray-500 font-semibold uppercase tracking-wider px-6 py-3 whitespace-nowrap">{h}</th>
                  ))}
                </tr></thead>
                <tbody>
                  {filteredObs.map(o => (
                    <tr key={o.id} className="border-b border-[#1e1e2e]/50 hover:bg-[#1e1e2e]/30 transition-colors">
                      <td className="px-6 py-3.5 text-sm text-gray-300 whitespace-nowrap">{new Date(o.date).toLocaleDateString()}</td>
                      <td className="px-6 py-3.5 text-sm font-medium text-white whitespace-nowrap">{o.patientName}</td>
                      <td className="px-6 py-3.5 text-sm text-gray-200">{o.type}</td>
                      <td className="px-6 py-3.5 text-xs font-mono text-[#00d4ff]">{o.loincCode}</td>
                      <td className="px-6 py-3.5"><span className="text-xs text-gray-400 capitalize">{o.category.replace('-', ' ')}</span></td>
                      <td className="px-6 py-3.5 text-sm font-semibold text-white whitespace-nowrap">{o.value} <span className="text-xs font-normal text-gray-500">{o.unit}</span></td>
                      <td className="px-6 py-3.5"><Badge status={o.status} size="sm" /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {view === 'conditions' && (
        <div className="bg-[#111118] border border-[#1e1e2e] rounded-xl overflow-hidden">
          <div className="px-6 py-3 border-b border-[#1e1e2e]">
            <p className="text-xs text-gray-500">{filteredCond.length} conditions</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead><tr className="border-b border-[#1e1e2e]">
                {['Condition', 'ICD-10', 'Patient ID', 'Onset', 'Severity', 'Status'].map(h => (
                  <th key={h} className="text-left text-xs text-gray-500 font-semibold uppercase tracking-wider px-6 py-3 whitespace-nowrap">{h}</th>
                ))}
              </tr></thead>
              <tbody>
                {filteredCond.map(c => (
                  <tr key={c.id} className="border-b border-[#1e1e2e]/50 hover:bg-[#1e1e2e]/30 transition-colors">
                    <td className="px-6 py-3.5 text-sm text-white">{c.name}</td>
                    <td className="px-6 py-3.5 text-sm font-mono text-[#00d4ff]">{c.icd10Code}</td>
                    <td className="px-6 py-3.5 text-xs text-gray-400 font-mono">{c.patientId}</td>
                    <td className="px-6 py-3.5 text-sm text-gray-300">{new Date(c.onsetDate).toLocaleDateString()}</td>
                    <td className="px-6 py-3.5"><Badge status={c.severity} size="sm" /></td>
                    <td className="px-6 py-3.5"><Badge status={c.status} size="sm" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
