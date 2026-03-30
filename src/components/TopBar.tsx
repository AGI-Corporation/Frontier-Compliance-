import { Bell, Search, Shield } from 'lucide-react';

interface TopBarProps {
  title: string;
  subtitle?: string;
}

export default function TopBar({ title, subtitle }: TopBarProps) {
  return (
    <div className="h-16 border-b border-[#1e1e2e] bg-[#080810]/80 backdrop-blur-sm flex items-center justify-between px-6 sticky top-0 z-10">
      <div>
        <h1 className="text-lg font-semibold text-white">{title}</h1>
        {subtitle && <p className="text-xs text-gray-400">{subtitle}</p>}
      </div>
      <div className="flex items-center gap-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Quick search..."
            className="bg-[#111118] border border-[#1e1e2e] rounded-lg pl-9 pr-4 py-1.5 text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-[#00d4ff]/50 w-48 transition-all"
          />
        </div>
        <button className="relative p-2 rounded-lg bg-[#111118] border border-[#1e1e2e] text-gray-400 hover:text-[#00d4ff] hover:border-[#00d4ff]/30 transition-all">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-[#00d4ff] rounded-full"></span>
        </button>
        <div className="flex items-center gap-2 pl-3 border-l border-[#1e1e2e]">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00d4ff]/30 to-[#7c3aed]/30 border border-[#00d4ff]/30 flex items-center justify-center">
            <Shield className="w-4 h-4 text-[#00d4ff]" />
          </div>
          <div className="hidden sm:block">
            <p className="text-xs font-medium text-white">Admin User</p>
            <p className="text-xs text-gray-500">FHIR R4</p>
          </div>
        </div>
      </div>
    </div>
  );
}
