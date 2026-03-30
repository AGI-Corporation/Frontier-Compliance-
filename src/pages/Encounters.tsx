import { useState } from 'react';
import { Search } from 'lucide-react';
import Badge from '../components/Badge';
import { mockEncounters } from '../data/mockFhir';

export default function Encounters() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const filtered = mockEncounters.filter(e => {
    const matchSearch = e.patientName.toLowerCase().includes(search.toLowerCase()) ||
      e.type.toLowerCase().includes(search.toLowerCase()) ||
      e.provider.toLowerCase().includes(search.toLowerCase()) ||
      e.reason.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === 'all' || e.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div className="p-6 space-y-5">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search encounters..."
            className="w-full bg-[#111118] border border-[#1e1e2e] rounded-lg pl-10 pr-4 py-2.5 text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-[#00d4ff]/50"
          />
        </div>
        <div className="flex gap-2">
          {['all', 'finished', 'planned'].map(s => (
            <button key={s} onClick={() => setStatusFilter(s)} className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all ${statusFilter === s ? 'bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/30' : 'bg-[#111118] text-gray-400 border border-[#1e1e2e] hover:border-[#2a2a3e]'}`}>
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-[#111118] border border-[#1e1e2e] rounded-xl overflow-hidden">
        <div className="px-6 py-3 border-b border-[#1e1e2e]">
          <p className="text-xs text-gray-500">{filtered.length} encounters</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead><tr className="border-b border-[#1e1e2e]">
              {['Date', 'Patient', 'Type', 'Provider', 'Reason', 'Duration', 'Status'].map(h => (
                <th key={h} className="text-left text-xs text-gray-500 font-semibold uppercase tracking-wider px-6 py-3 whitespace-nowrap">{h}</th>
              ))}
            </tr></thead>
            <tbody>
              {filtered.map(e => (
                <tr key={e.id} className="border-b border-[#1e1e2e]/50 hover:bg-[#1e1e2e]/30 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-300 whitespace-nowrap">{new Date(e.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-white whitespace-nowrap">{e.patientName}</p>
                    <p className="text-xs text-gray-500 font-mono">{e.patientId}</p>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">{e.type}</td>
                  <td className="px-6 py-4 text-sm text-gray-300 whitespace-nowrap">{e.provider}</td>
                  <td className="px-6 py-4 text-sm text-gray-300">{e.reason}</td>
                  <td className="px-6 py-4 text-sm text-gray-300 whitespace-nowrap">{e.duration}</td>
                  <td className="px-6 py-4"><Badge status={e.status} size="sm" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
