import { useState } from 'react'
import { User, Bell, Server, Save } from 'lucide-react'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'

export default function Settings() {
  const [saved, setSaved] = useState(false)
  const [fhirUrl, setFhirUrl] = useState('http://frontier.health/fhir/R4')
  const [notifAppt, setNotifAppt] = useState(true)
  const [notifAlert, setNotifAlert] = useState(true)
  const [notifLab, setNotifLab] = useState(false)

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold text-white">Settings</h1>
        <p className="text-sm text-[#64748b] mt-1">Manage your profile and application preferences</p>
      </div>

      {/* Profile */}
      <Card className="p-5">
        <h2 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
          <User size={14} className="text-[#00d4ff]" />
          User Profile
        </h2>
        <div className="flex items-center gap-4 mb-5">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#0066ff] flex items-center justify-center text-2xl font-bold text-black">
            DR
          </div>
          <div>
            <div className="font-semibold text-white">Dr. Alex Rivera</div>
            <div className="text-xs text-[#64748b]">System Administrator</div>
            <Badge variant="info">Frontier Health</Badge>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: 'First Name', value: 'Alex' },
            { label: 'Last Name', value: 'Rivera' },
            { label: 'Email', value: 'a.rivera@frontier.health' },
            { label: 'License #', value: 'MD-78234' },
            { label: 'Department', value: 'Internal Medicine' },
            { label: 'Role', value: 'Administrator' },
          ].map(field => (
            <div key={field.label}>
              <label className="text-xs text-[#64748b] mb-1 block">{field.label}</label>
              <input
                type="text"
                defaultValue={field.value}
                className="w-full px-3 py-2 text-sm bg-[#0a0a0f] border border-[#1a1f2e] rounded-lg text-[#e2e8f0] focus:outline-none focus:border-[#00d4ff40]"
              />
            </div>
          ))}
        </div>
      </Card>

      {/* Notifications */}
      <Card className="p-5">
        <h2 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
          <Bell size={14} className="text-[#00d4ff]" />
          Notifications
        </h2>
        <div className="space-y-3">
          {[
            { label: 'Appointment Reminders', desc: 'Get notified 30 min before appointments', value: notifAppt, set: setNotifAppt },
            { label: 'Critical Alerts', desc: 'Immediate alerts for critical patient status', value: notifAlert, set: setNotifAlert },
            { label: 'Lab Results', desc: 'Notify when new lab results are available', value: notifLab, set: setNotifLab },
          ].map(item => (
            <div key={item.label} className="flex items-center justify-between py-3 border-b border-[#1a1f2e] last:border-0">
              <div>
                <div className="text-sm text-white">{item.label}</div>
                <div className="text-xs text-[#64748b]">{item.desc}</div>
              </div>
              <button
                onClick={() => item.set(!item.value)}
                className={`relative w-10 h-5 rounded-full transition-colors ${item.value ? 'bg-[#00d4ff]' : 'bg-[#1a1f2e]'}`}
              >
                <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform ${item.value ? 'translate-x-5' : 'translate-x-0.5'}`} />
              </button>
            </div>
          ))}
        </div>
      </Card>

      {/* FHIR Server */}
      <Card className="p-5">
        <h2 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
          <Server size={14} className="text-[#00d4ff]" />
          FHIR Server Connection
        </h2>
        <div className="space-y-3">
          <div>
            <label className="text-xs text-[#64748b] mb-1 block">FHIR Base URL</label>
            <input
              type="text"
              value={fhirUrl}
              onChange={e => setFhirUrl(e.target.value)}
              className="w-full px-3 py-2 text-sm bg-[#0a0a0f] border border-[#1a1f2e] rounded-lg text-[#e2e8f0] font-mono focus:outline-none focus:border-[#00d4ff40]"
            />
          </div>
          <div>
            <label className="text-xs text-[#64748b] mb-1 block">FHIR Version</label>
            <select className="w-full px-3 py-2 text-sm bg-[#0a0a0f] border border-[#1a1f2e] rounded-lg text-[#e2e8f0] focus:outline-none">
              <option value="R4">FHIR R4 (4.0.1)</option>
              <option value="R4B">FHIR R4B</option>
              <option value="STU3">FHIR STU3</option>
            </select>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-lg bg-[#00ffcc08] border border-[#00ffcc20]">
            <div className="w-2 h-2 rounded-full bg-[#00ffcc]" />
            <span className="text-xs text-[#00ffcc]">Connected — FHIR R4 server operational</span>
          </div>
        </div>
      </Card>

      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#00d4ff] text-black text-sm font-semibold hover:bg-[#00b8e6] transition-colors"
        >
          <Save size={14} />
          {saved ? 'Saved!' : 'Save Changes'}
        </button>
      </div>
    </div>
  )
}
