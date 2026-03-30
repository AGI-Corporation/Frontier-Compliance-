import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard, Users, FileText, Calendar,
  Code2, Settings, Activity, Zap
} from 'lucide-react'

const navItems = [
  { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/patients', icon: Users, label: 'Patients' },
  { to: '/records', icon: FileText, label: 'Medical Records' },
  { to: '/appointments', icon: Calendar, label: 'Appointments' },
  { to: '/fhir', icon: Code2, label: 'FHIR Explorer' },
  { to: '/settings', icon: Settings, label: 'Settings' },
]

export default function Sidebar() {
  return (
    <aside className="w-[220px] min-h-screen bg-[#0f1117] border-r border-[#1a1f2e] flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-[#1a1f2e]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#0066ff] flex items-center justify-center">
            <Activity size={16} className="text-black" />
          </div>
          <div>
            <div className="text-sm font-bold text-white leading-none">Frontier</div>
            <div className="text-xs font-semibold text-[#00d4ff] leading-none mt-0.5">Health</div>
          </div>
        </div>
        <div className="mt-2 text-[10px] text-[#64748b]">Powered by Frontier Tower</div>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-3 space-y-1">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                isActive
                  ? 'bg-[#00d4ff15] text-[#00d4ff] border border-[#00d4ff30]'
                  : 'text-[#64748b] hover:text-[#e2e8f0] hover:bg-[#1a1f2e]'
              }`
            }
          >
            <Icon size={16} />
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Bottom status */}
      <div className="p-4 border-t border-[#1a1f2e]">
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#00ffcc10] border border-[#00ffcc20]">
          <div className="w-2 h-2 rounded-full bg-[#00ffcc] animate-pulse" />
          <div>
            <div className="text-[10px] font-medium text-[#00ffcc]">FHIR R4</div>
            <div className="text-[10px] text-[#64748b]">Connected</div>
          </div>
          <Zap size={12} className="ml-auto text-[#00ffcc]" />
        </div>
      </div>
    </aside>
  )
}
