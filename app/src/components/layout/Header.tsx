import { useState } from 'react'
import { Search, Bell, ChevronDown } from 'lucide-react'

export default function Header() {
  const [query, setQuery] = useState('')

  return (
    <header className="h-16 bg-[#0f1117] border-b border-[#1a1f2e] flex items-center px-6 gap-4">
      {/* Search */}
      <div className="flex-1 max-w-md relative">
        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#64748b]" />
        <input
          type="text"
          placeholder="Search patients, records..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="w-full pl-9 pr-4 py-2 text-sm bg-[#0a0a0f] border border-[#1a1f2e] rounded-lg text-[#e2e8f0] placeholder-[#64748b] focus:outline-none focus:border-[#00d4ff40] focus:ring-1 focus:ring-[#00d4ff20] transition-colors"
        />
      </div>

      <div className="flex items-center gap-3 ml-auto">
        {/* Notifications */}
        <button className="relative p-2 rounded-lg hover:bg-[#1a1f2e] transition-colors">
          <Bell size={18} className="text-[#64748b]" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#00d4ff]" />
        </button>

        {/* User avatar */}
        <button className="flex items-center gap-2 pl-3 pr-2 py-1.5 rounded-lg hover:bg-[#1a1f2e] transition-colors border border-[#1a1f2e]">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#0066ff] flex items-center justify-center text-xs font-bold text-black">
            DR
          </div>
          <div className="text-left">
            <div className="text-xs font-medium text-[#e2e8f0]">Dr. Rivera</div>
            <div className="text-[10px] text-[#64748b]">Admin</div>
          </div>
          <ChevronDown size={12} className="text-[#64748b]" />
        </button>
      </div>
    </header>
  )
}
