import type { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  changePositive?: boolean;
  icon: LucideIcon;
  accentColor?: 'cyan' | 'purple' | 'green' | 'orange';
}

export default function StatCard({ title, value, change, changePositive, icon: Icon, accentColor = 'cyan' }: StatCardProps) {
  const accentMap = {
    cyan: { text: 'text-[#00d4ff]', bg: 'bg-[#00d4ff]/10', border: 'border-[#00d4ff]/20', glow: 'shadow-[0_0_20px_rgba(0,212,255,0.1)]' },
    purple: { text: 'text-[#7c3aed]', bg: 'bg-[#7c3aed]/10', border: 'border-[#7c3aed]/20', glow: 'shadow-[0_0_20px_rgba(124,58,237,0.1)]' },
    green: { text: 'text-emerald-400', bg: 'bg-emerald-400/10', border: 'border-emerald-400/20', glow: 'shadow-[0_0_20px_rgba(52,211,153,0.1)]' },
    orange: { text: 'text-orange-400', bg: 'bg-orange-400/10', border: 'border-orange-400/20', glow: 'shadow-[0_0_20px_rgba(251,146,60,0.1)]' },
  };
  const accent = accentMap[accentColor];

  return (
    <div className={`bg-[#111118] border border-[#1e1e2e] rounded-xl p-6 ${accent.glow} hover:border-[#2a2a3e] transition-all duration-300`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-400 text-sm font-medium mb-1">{title}</p>
          <p className={`text-3xl font-bold ${accent.text}`}>{value}</p>
          {change && (
            <p className={`text-xs mt-2 ${changePositive ? 'text-emerald-400' : 'text-red-400'}`}>
              {changePositive ? '↑' : '↓'} {change} from last month
            </p>
          )}
        </div>
        <div className={`p-3 rounded-lg ${accent.bg} border ${accent.border}`}>
          <Icon className={`w-6 h-6 ${accent.text}`} />
        </div>
      </div>
    </div>
  );
}
