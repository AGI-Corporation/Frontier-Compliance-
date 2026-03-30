import { useState } from 'react'
import { Search } from 'lucide-react'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import JsonViewer from '../components/ui/JsonViewer'
import { observations } from '../data/observations'
import type { AppObservation } from '../types/fhir'

export default function MedicalRecords() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState<string>('all')
  const [selected, setSelected] = useState<AppObservation | null>(null)

  const filtered = observations.filter(o => {
    const matchSearch = o.type.toLowerCase().includes(search.toLowerCase()) ||
      o.patientName.toLowerCase().includes(search.toLowerCase())
    const matchCat = category === 'all' || o.category === category
    return matchSearch && matchCat
  })

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold text-white">Medical Records</h1>
        <p className="text-sm text-[#64748b] mt-1">FHIR R4 Observation resources</p>
      </div>

      <div className="flex gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#64748b]" />
          <input
            type="text"
            placeholder="Search observations..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm bg-[#0f1117] border border-[#1a1f2e] rounded-lg text-[#e2e8f0] placeholder-[#64748b] focus:outline-none focus:border-[#00d4ff40]"
          />
        </div>
        <div className="flex gap-2">
          {['all', 'vital-signs', 'laboratory', 'imaging'].map(c => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-3 py-2 text-xs rounded-lg border transition-colors capitalize ${
                category === c
                  ? 'border-[#00d4ff40] bg-[#00d4ff15] text-[#00d4ff]'
                  : 'border-[#1a1f2e] text-[#64748b] hover:text-white'
              }`}
            >
              {c.replace('-', ' ')}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-4">
        <Card className="flex-1 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#1a1f2e]">
                {['Type', 'Patient', 'Value', 'Category', 'Date', 'Status'].map(h => (
                  <th key={h} className="text-left px-4 py-3 text-xs font-medium text-[#64748b] uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1a1f2e]">
              {filtered.map(obs => (
                <tr
                  key={obs.id}
                  onClick={() => setSelected(obs)}
                  className={`cursor-pointer hover:bg-[#0a0a0f] transition-colors ${selected?.id === obs.id ? 'bg-[#00d4ff08]' : ''}`}
                >
                  <td className="px-4 py-3 text-sm font-medium text-white">{obs.type}</td>
                  <td className="px-4 py-3 text-xs text-[#64748b]">{obs.patientName}</td>
                  <td className="px-4 py-3">
                    <span className="text-sm font-mono text-[#00ffcc]">{obs.value}</span>
                    <span className="text-xs text-[#64748b] ml-1">{obs.unit}</span>
                  </td>
                  <td className="px-4 py-3">
                    <Badge variant={obs.category === 'vital-signs' ? 'info' : obs.category === 'laboratory' ? 'success' : 'warning'}>
                      {obs.category}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 text-xs text-[#64748b]">{obs.date}</td>
                  <td className="px-4 py-3">
                    <Badge variant={obs.status === 'final' ? 'success' : 'warning'}>{obs.status}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        {selected && (
          <div className="w-80 shrink-0 space-y-3">
            <Card className="p-4">
              <h3 className="text-sm font-semibold text-white mb-3">{selected.type}</h3>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#64748b]">Patient</span>
                  <span className="text-white">{selected.patientName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748b]">Value</span>
                  <span className="text-[#00ffcc] font-mono">{selected.value} {selected.unit}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748b]">Date</span>
                  <span className="text-white">{selected.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748b]">Status</span>
                  <Badge variant="success">{selected.status}</Badge>
                </div>
              </div>
            </Card>
            <JsonViewer data={selected.fhir} title={`${selected.id}.json`} />
          </div>
        )}
      </div>
    </div>
  )
}
