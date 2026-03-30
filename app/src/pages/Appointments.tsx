import { useState } from 'react'
import { Calendar, User, Plus, X } from 'lucide-react'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import { appointments } from '../data/appointments'

export default function Appointments() {
  const [showModal, setShowModal] = useState(false)
  const [dateFilter, setDateFilter] = useState<string>('all')

  const today = '2025-01-15'
  const dates = [...new Set(appointments.map(a => a.date))].sort()

  const filtered = dateFilter === 'all' ? appointments : appointments.filter(a => a.date === dateFilter)
  const grouped = filtered.reduce<Record<string, typeof appointments>>((acc, appt) => {
    if (!acc[appt.date]) acc[appt.date] = []
    acc[appt.date].push(appt)
    return acc
  }, {})

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Appointments</h1>
          <p className="text-sm text-[#64748b] mt-1">{appointments.length} total appointments</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00d4ff] text-black text-sm font-semibold hover:bg-[#00b8e6] transition-colors"
        >
          <Plus size={14} />
          New Appointment
        </button>
      </div>

      {/* Date filter */}
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={() => setDateFilter('all')}
          className={`px-3 py-1.5 text-xs rounded-lg border transition-colors ${dateFilter === 'all' ? 'border-[#00d4ff40] bg-[#00d4ff15] text-[#00d4ff]' : 'border-[#1a1f2e] text-[#64748b]'}`}
        >
          All Dates
        </button>
        {dates.map(d => (
          <button
            key={d}
            onClick={() => setDateFilter(d)}
            className={`px-3 py-1.5 text-xs rounded-lg border transition-colors ${
              dateFilter === d
                ? 'border-[#00d4ff40] bg-[#00d4ff15] text-[#00d4ff]'
                : d === today
                ? 'border-[#00ffcc30] text-[#00ffcc]'
                : 'border-[#1a1f2e] text-[#64748b]'
            }`}
          >
            {d === today ? `Today (${d})` : d}
          </button>
        ))}
      </div>

      {/* Appointment groups by date */}
      <div className="space-y-4">
        {Object.entries(grouped).map(([date, appts]) => (
          <div key={date}>
            <div className="flex items-center gap-2 mb-2">
              <Calendar size={14} className="text-[#00d4ff]" />
              <span className="text-sm font-semibold text-white">
                {date}{date === today && <span className="ml-2 text-xs text-[#00ffcc]">● Today</span>}
              </span>
              <span className="text-xs text-[#64748b]">({appts.length} appointments)</span>
            </div>
            <div className="grid gap-2">
              {appts.map(appt => (
                <Card key={appt.id} className={`p-4 ${date === today ? 'border-l-2 border-l-[#00d4ff]' : ''}`}>
                  <div className="flex items-center gap-4">
                    <div className="text-sm font-mono text-[#00d4ff] w-12 shrink-0">{appt.time}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-white">{appt.patientName}</span>
                        <Badge variant={appt.status === 'arrived' ? 'success' : appt.status === 'cancelled' ? 'danger' : appt.status === 'completed' ? 'info' : 'default'}>
                          {appt.status}
                        </Badge>
                        <Badge variant="default">{appt.type}</Badge>
                      </div>
                      <div className="text-xs text-[#64748b] mt-0.5">{appt.reason}</div>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-[#64748b]">
                      <User size={12} />
                      <span>{appt.practitioner}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* New Appointment Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <Card className="w-96 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-white">New Appointment</h2>
              <button onClick={() => setShowModal(false)} className="p-1 hover:bg-[#1a1f2e] rounded">
                <X size={16} className="text-[#64748b]" />
              </button>
            </div>
            <div className="space-y-3">
              {[
                { label: 'Patient', placeholder: 'Search patient...', type: 'text' },
                { label: 'Practitioner', placeholder: 'Select practitioner...', type: 'text' },
                { label: 'Date', placeholder: '', type: 'date' },
                { label: 'Time', placeholder: '', type: 'time' },
                { label: 'Reason', placeholder: 'Reason for visit...', type: 'text' },
              ].map(field => (
                <div key={field.label}>
                  <label className="text-xs text-[#64748b] mb-1 block">{field.label}</label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full px-3 py-2 text-sm bg-[#0a0a0f] border border-[#1a1f2e] rounded-lg text-[#e2e8f0] placeholder-[#64748b] focus:outline-none focus:border-[#00d4ff40]"
                  />
                </div>
              ))}
              <div className="flex gap-2 pt-2">
                <button onClick={() => setShowModal(false)} className="flex-1 px-4 py-2 text-sm rounded-lg border border-[#1a1f2e] text-[#64748b] hover:text-white transition-colors">
                  Cancel
                </button>
                <button onClick={() => setShowModal(false)} className="flex-1 px-4 py-2 text-sm rounded-lg bg-[#00d4ff] text-black font-semibold hover:bg-[#00b8e6] transition-colors">
                  Schedule
                </button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}
