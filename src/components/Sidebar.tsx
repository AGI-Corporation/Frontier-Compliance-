import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard, Users, FileText, Activity, Pill, ClipboardList, Shield, Zap
} from 'lucide-react';

const navItems = [
  { to: '/', icon: LayoutDashboard, label: 'Dashboard', end: true },
  { to: '/patients', icon: Users, label: 'Patients', end: false },
  { to: '/clinical-records', icon: Activity, label: 'Clinical Records', end: false },
  { to: '/encounters', icon: ClipboardList, label: 'Encounters', end: false },
  { to: '/medications', icon: Pill, label: 'Medications', end: false },
  { to: '/reports', icon: FileText, label: 'Reports', end: false },
];

export default function Sidebar() {
  return (
    <div className="w-64 bg-[#080810] border-r border-[#1e1e2e] flex flex-col h-screen sticky top-0">
      {/* Logo */}
      <div className="h-16 flex items-center gap-3 px-6 border-b border-[#1e1e2e]">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#7c3aed] flex items-center justify-center shadow-[0_0_15px_rgba(0,212,255,0.4)]">
          <Zap className="w-4 h-4 text-white" />
        </div>
        <div>
          <p className="text-sm font-bold text-white tracking-wide">FRONTIER</p>
          <p className="text-xs text-[#00d4ff] font-medium tracking-widest">HEALTH</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        <p className="text-xs text-gray-600 font-semibold uppercase tracking-widest px-3 mb-3">Main Menu</p>
        {navItems.map(({ to, icon: Icon, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/20 shadow-[0_0_10px_rgba(0,212,255,0.1)]'
                  : 'text-gray-400 hover:text-white hover:bg-[#111118]'
              }`
            }
          >
            <Icon className="w-4 h-4 flex-shrink-0" />
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-[#1e1e2e]">
        <div className="bg-[#111118] border border-[#1e1e2e] rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="w-4 h-4 text-[#00d4ff]" />
            <span className="text-xs font-semibold text-white">FHIR R4 Compliant</span>
          </div>
          <p className="text-xs text-gray-500">US Core Implementation Guide v5.0.1</p>
          <div className="flex items-center gap-1.5 mt-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
            <span className="text-xs text-emerald-400">System Operational</span>
          </div>
        </div>
      </div>
    </div>
  );
}
