interface BadgeProps {
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info'
  children: React.ReactNode
}

const variants = {
  default: 'bg-[#1a1f2e] text-[#64748b]',
  success: 'bg-[#00ffcc15] text-[#00ffcc] border border-[#00ffcc30]',
  warning: 'bg-[#fbbf2415] text-[#fbbf24] border border-[#fbbf2430]',
  danger: 'bg-[#ef444415] text-[#ef4444] border border-[#ef444430]',
  info: 'bg-[#00d4ff15] text-[#00d4ff] border border-[#00d4ff30]',
}

export default function Badge({ variant = 'default', children }: BadgeProps) {
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${variants[variant]}`}>
      {children}
    </span>
  )
}
