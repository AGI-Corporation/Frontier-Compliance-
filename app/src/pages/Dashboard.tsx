import { Users, Calendar, FileText, AlertTriangle, Activity, CheckCircle, Clock, Zap } from 'lucide-react'
import StatCard from '../components/ui/StatCard'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import { patients } from '../data/patients'
import { appointments } from '../data/appointments'
import { observations } from '../data/observations'

const todayAppts = appointments.filter(a => a.date === '2025-01-15')
const criticalPatients = patients.filter(p => p.status === 'critical')

const recentActivity = [
  { id: 1, type: 'appointment', text: 'Robert Chen arrived for cardiac monitoring', time: '10 min ago', icon: CheckCircle, color: 'text-[#00ffcc]' },
  { id: 2, type: 'alert', text: 'Critical: Patricia Davis kidney function critical', time: '25 min ago', icon: AlertTriangle, color: 'text-[#ef4444]' },
  { id: 3, type: 'record', text: 'New observation added for James Harrington', time: '1 hr ago', icon: FileText, color: 'text-[#00d4ff]' },
  { id: 4, type: 'appointment', text: 'David Martinez appointment completed', time: '2 hr ago', icon: CheckCircle, color: 'text-[#00ffcc]' },
  { id: 5, type: 'record', text: 'HbA1c result: 8.2% for David Martinez', time: '2 hr ago', icon: Activity, color: 'text-[#fbbf24]' },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <p className="text-sm text-[#64748b] mt-1">Welcome back, Dr. Rivera. Here's your overview for today.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        <StatCard title="Total Patients" value={patients.length} subtitle="2 critical" icon={Users} color="blue" trend="12% this month" />
        <StatCard title="Appointments Today" value={todayAppts.length} subtitle={`${todayAppts.filter(a => a.status === 'arrived').length} arrived`} icon={Calendar} color="cyan" />
        <StatCard title="Medical Records" value={observations.length} subtitle="This month" icon={FileText} color="warning" />
        <StatCard title="Active Alerts" value={criticalPatients.length} subtitle="Require attention" icon={AlertTriangle} color="danger" />
      </div>

      <div className="grid grid-cols-3 gap-4">
        {/* Activity Feed */}
        <Card className="col-span-2 p-5">
          <h2 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
            <Activity size={14} className="text-[#00d4ff]" />
            Recent Activity
          </h2>
          <div className="space-y-3">
            {recentActivity.map(item => (
              <div key={item.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#0a0a0f] transition-colors">
                <item.icon size={14} className={`${item.color} mt-0.5 shrink-0`} />
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-[#e2e8f0]">{item.text}</div>
                </div>
                <div className="flex items-center gap-1 text-[#64748b] shrink-0">
                  <Clock size={10} />
                  <span className="text-[10px]">{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* FHIR Status */}
        <div className="space-y-4">
          <Card className="p-5">
            <h2 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
              <Zap size={14} className="text-[#00ffcc]" />
              FHIR System Status
            </h2>
            <div className="space-y-2">
              {[
                { label: 'FHIR R4 Server', status: 'Operational' },
                { label: 'Patient Index', status: 'Operational' },
                { label: 'Observation Store', status: 'Operational' },
                { label: 'Terminology', status: 'Degraded' },
              ].map(item => (
                <div key={item.label} className="flex items-center justify-between py-1.5">
                  <span className="text-xs text-[#64748b]">{item.label}</span>
                  <Badge variant={item.status === 'Operational' ? 'success' : 'warning'}>{item.status}</Badge>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-5">
            <h2 className="text-sm font-semibold text-white mb-3">Critical Patients</h2>
            <div className="space-y-2">
              {criticalPatients.map(p => (
                <div key={p.id} className="flex items-center gap-2 p-2 rounded-lg bg-[#ef444408] border border-[#ef444420]">
                  <div className="w-2 h-2 rounded-full bg-[#ef4444] animate-pulse" />
                  <div>
                    <div className="text-xs font-medium text-white">{p.name}</div>
                    <div className="text-[10px] text-[#64748b]">{p.conditions[0]}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Today's Appointments Preview */}
      <Card className="p-5">
        <h2 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
          <Calendar size={14} className="text-[#00d4ff]" />
          Today's Schedule
        </h2>
        <div className="grid grid-cols-2 gap-2">
          {todayAppts.slice(0, 6).map(appt => (
            <div key={appt.id} className="flex items-center gap-3 p-3 rounded-lg bg-[#0a0a0f] border border-[#1a1f2e]">
              <div className="text-xs font-mono text-[#00d4ff] w-12 shrink-0">{appt.time}</div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-medium text-white truncate">{appt.patientName}</div>
                <div className="text-[10px] text-[#64748b] truncate">{appt.reason}</div>
              </div>
              <Badge variant={appt.status === 'arrived' ? 'success' : appt.status === 'cancelled' ? 'danger' : appt.status === 'completed' ? 'info' : 'default'}>
                {appt.status}
              </Badge>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
