import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import PatientCard from '../components/PatientCard';
import { mockPatients } from '../data/mockFhir';

export default function Patients() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'inactive'>('all');

  const filtered = mockPatients.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.mrn.toLowerCase().includes(search.toLowerCase()) ||
      p.city.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === 'all' || p.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div className="p-6">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search by name, MRN, or city..."
            className="w-full bg-[#111118] border border-[#1e1e2e] rounded-lg pl-10 pr-4 py-2.5 text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-[#00d4ff]/50"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-gray-500" />
          {(['all', 'active', 'inactive'] as const).map(s => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all ${
                statusFilter === s
                  ? 'bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/30'
                  : 'bg-[#111118] text-gray-400 border border-[#1e1e2e] hover:border-[#2a2a3e]'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <p className="text-xs text-gray-500 mb-4">{filtered.length} patient{filtered.length !== 1 ? 's' : ''} found</p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filtered.map(patient => (
          <PatientCard key={patient.id} patient={patient} />
        ))}
        {filtered.length === 0 && (
          <div className="col-span-3 text-center py-16 text-gray-500">
            <p className="text-lg">No patients found</p>
            <p className="text-sm mt-1">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
}
