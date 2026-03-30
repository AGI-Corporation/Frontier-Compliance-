import type { LucideIcon } from 'lucide-react'
import Card from './Card'

interface StatCardProps {
  title: string
  value: string | number
  subtitle: string
  icon: LucideIcon
  color: 'blue' | 'cyan' | 'warning' | 'danger'
  trend?: string
}

const colors = {
  blue: { icon: 'text-[#00d4ff]', bg: 'bg-[#00d4ff15]', border: 'border-[#00d4ff20]' },
  cyan: { icon: 'text-[#00ffcc]', bg: 'bg-[#00ffcc15]', border: 'border-[#00ffcc20]' },
  warning: { icon: 'text-[#fbbf24]', bg: 'bg-[#fbbf2415]', border: 'border-[#fbbf2420]' },
  danger: { icon: 'text-[#ef4444]', bg: 'bg-[#ef444415]', border: 'border-[#ef444420]' },
}

export default function StatCard({ title, value, subtitle, icon: Icon, color, trend }: StatCardProps) {
  const c = colors[color]
  return (
    <Card className="p-5">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-xs text-[#64748b] font-medium uppercase tracking-wider">{title}</div>
          <div className="text-3xl font-bold text-white mt-1">{value}</div>
          <div className="text-xs text-[#64748b] mt-1">{subtitle}</div>
          {trend && <div className="text-xs text-[#00ffcc] mt-2">↑ {trend}</div>}
        </div>
        <div className={`p-3 rounded-xl ${c.bg} border ${c.border}`}>
          <Icon size={20} className={c.icon} />
        </div>
      </div>
    </Card>
  )
}
