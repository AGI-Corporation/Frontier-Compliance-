import { useState } from 'react';
import { Search } from 'lucide-react';
import Badge from '../components/Badge';
import { mockMedications } from '../data/mockFhir';

export default function Medications() {
  const [search, setSearch] = useState('');
  const [routeFilter, setRouteFilter] = useState<string>('all');

  const routes = ['all', ...Array.from(new Set(mockMedications.map(m => m.route)))];

  const filtered = mockMedications.filter(m => {
    const matchSearch = m.drug.toLowerCase().includes(search.toLowerCase()) ||
      m.patientName.toLowerCase().includes(search.toLowerCase()) ||
      m.rxNormCode.includes(search);
    const matchRoute = routeFilter === 'all' || m.route === routeFilter;
    return matchSearch && matchRoute;
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
            placeholder="Search by drug name, patient, or RxNorm code..."
            className="w-full bg-[#111118] border border-[#1e1e2e] rounded-lg pl-10 pr-4 py-2.5 text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-[#00d4ff]/50"
          />
        </div>
        <select
          value={routeFilter}
          onChange={e => setRouteFilter(e.target.value)}
          className="bg-[#111118] border border-[#1e1e2e] rounded-lg px-3 py-2.5 text-sm text-gray-300 focus:outline-none focus:border-[#00d4ff]/50"
        >
          {routes.map(r => <option key={r} value={r}>{r === 'all' ? 'All Routes' : r}</option>)}
        </select>
      </div>

      <div className="bg-[#111118] border border-[#1e1e2e] rounded-xl overflow-hidden">
        <div className="px-6 py-3 border-b border-[#1e1e2e]">
          <p className="text-xs text-gray-500">{filtered.length} medication orders</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead><tr className="border-b border-[#1e1e2e]">
              {['Drug', 'RxNorm', 'Patient', 'Dose', 'Route', 'Frequency', 'Prescribed', 'Status'].map(h => (
                <th key={h} className="text-left text-xs text-gray-500 font-semibold uppercase tracking-wider px-6 py-3 whitespace-nowrap">{h}</th>
              ))}
            </tr></thead>
            <tbody>
              {filtered.map(m => (
                <tr key={m.id} className="border-b border-[#1e1e2e]/50 hover:bg-[#1e1e2e]/30 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-white whitespace-nowrap">{m.drug}</td>
                  <td className="px-6 py-4 text-xs font-mono text-[#00d4ff]">{m.rxNormCode}</td>
                  <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">{m.patientName}</td>
                  <td className="px-6 py-4 text-sm text-gray-300 whitespace-nowrap">{m.dose}</td>
                  <td className="px-6 py-4 text-sm text-gray-300 whitespace-nowrap">{m.route}</td>
                  <td className="px-6 py-4 text-sm text-gray-300">{m.frequency}</td>
                  <td className="px-6 py-4 text-sm text-gray-300 whitespace-nowrap">{new Date(m.prescribedDate).toLocaleDateString()}</td>
                  <td className="px-6 py-4"><Badge status={m.status} size="sm" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
