import { useState } from 'react'
import { Search, Phone, Mail, X } from 'lucide-react'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import { patients } from '../data/patients'
import type { AppPatient } from '../types/fhir'

export default function Patients() {
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState<AppPatient | null>(null)
  const [statusFilter, setStatusFilter] = useState<string>('all')

  const filtered = patients.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.mrn.toLowerCase().includes(search.toLowerCase())
    const matchStatus = statusFilter === 'all' || p.status === statusFilter
    return matchSearch && matchStatus
  })

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold text-white">Patients</h1>
        <p className="text-sm text-[#64748b] mt-1">{patients.length} patients registered</p>
      </div>

      {/* Filters */}
      <div className="flex gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#64748b]" />
          <input
            type="text"
            placeholder="Search by name or MRN..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm bg-[#0f1117] border border-[#1a1f2e] rounded-lg text-[#e2e8f0] placeholder-[#64748b] focus:outline-none focus:border-[#00d4ff40]"
          />
        </div>
        <div className="flex gap-2">
          {['all', 'active', 'critical', 'inactive'].map(s => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-3 py-2 text-xs rounded-lg border transition-colors capitalize ${
                statusFilter === s
                  ? 'border-[#00d4ff40] bg-[#00d4ff15] text-[#00d4ff]'
                  : 'border-[#1a1f2e] text-[#64748b] hover:text-white hover:border-[#2a2f3e]'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-4">
        {/* Table */}
        <Card className="flex-1 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#1a1f2e]">
                {['Patient', 'MRN', 'DOB', 'Conditions', 'Last Visit', 'Status'].map(h => (
                  <th key={h} className="text-left px-4 py-3 text-xs font-medium text-[#64748b] uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1a1f2e]">
              {filtered.map(p => (
                <tr
                  key={p.id}
                  onClick={() => setSelected(p)}
                  className={`cursor-pointer hover:bg-[#0a0a0f] transition-colors ${selected?.id === p.id ? 'bg-[#00d4ff08]' : ''}`}
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#00d4ff30] to-[#0066ff30] border border-[#00d4ff20] flex items-center justify-center text-xs font-medium text-[#00d4ff]">
                        {p.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="text-sm font-medium text-white">{p.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-xs font-mono text-[#64748b]">{p.mrn}</td>
                  <td className="px-4 py-3 text-xs text-[#64748b]">{p.dob}</td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-1">
                      {p.conditions.slice(0, 2).map(c => (
                        <Badge key={c} variant="default">{c}</Badge>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-xs text-[#64748b]">{p.lastVisit}</td>
                  <td className="px-4 py-3">
                    <Badge variant={p.status === 'active' ? 'success' : p.status === 'critical' ? 'danger' : 'default'}>
                      {p.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        {/* Detail Sidebar */}
        {selected && (
          <Card className="w-72 shrink-0 p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-white">Patient Detail</h3>
              <button onClick={() => setSelected(null)} className="p-1 hover:bg-[#1a1f2e] rounded">
                <X size={14} className="text-[#64748b]" />
              </button>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00d4ff30] to-[#0066ff30] border border-[#00d4ff20] flex items-center justify-center text-lg font-bold text-[#00d4ff]">
                {selected.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div className="font-semibold text-white">{selected.name}</div>
                <div className="text-xs text-[#64748b]">{selected.mrn}</div>
                <Badge variant={selected.status === 'active' ? 'success' : selected.status === 'critical' ? 'danger' : 'default'}>
                  {selected.status}
                </Badge>
              </div>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between py-2 border-b border-[#1a1f2e]">
                <span className="text-[#64748b]">Date of Birth</span>
                <span className="text-white">{selected.dob}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#1a1f2e]">
                <span className="text-[#64748b]">Gender</span>
                <span className="text-white capitalize">{selected.gender}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#1a1f2e]">
                <span className="text-[#64748b]">Last Visit</span>
                <span className="text-white">{selected.lastVisit}</span>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-xs text-[#64748b]">
                <Phone size={12} />
                <span>{selected.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#64748b]">
                <Mail size={12} />
                <span className="truncate">{selected.email}</span>
              </div>
            </div>

            <div className="mt-4">
              <div className="text-xs font-medium text-[#64748b] mb-2">Active Conditions</div>
              <div className="space-y-1">
                {selected.conditions.map(c => (
                  <div key={c} className="text-xs px-2 py-1.5 rounded-lg bg-[#0a0a0f] border border-[#1a1f2e] text-[#e2e8f0]">{c}</div>
                ))}
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  )
}
