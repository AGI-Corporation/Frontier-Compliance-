interface BadgeProps {
  status: string;
  size?: 'sm' | 'md';
}

export default function Badge({ status, size = 'md' }: BadgeProps) {
  const lower = status.toLowerCase();
  
  let colorClass = '';
  if (lower === 'active' || lower === 'final') {
    colorClass = 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30';
  } else if (lower === 'inactive' || lower === 'stopped' || lower === 'cancelled') {
    colorClass = 'bg-gray-500/15 text-gray-400 border border-gray-500/30';
  } else if (lower === 'finished' || lower === 'completed') {
    colorClass = 'bg-blue-500/15 text-blue-400 border border-blue-500/30';
  } else if (lower === 'planned' || lower === 'scheduled') {
    colorClass = 'bg-yellow-500/15 text-yellow-400 border border-yellow-500/30';
  } else if (lower === 'severe') {
    colorClass = 'bg-red-500/15 text-red-400 border border-red-500/30';
  } else if (lower === 'moderate') {
    colorClass = 'bg-orange-500/15 text-orange-400 border border-orange-500/30';
  } else if (lower === 'mild') {
    colorClass = 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30';
  } else {
    colorClass = 'bg-purple-500/15 text-purple-400 border border-purple-500/30';
  }

  const sizeClass = size === 'sm' ? 'text-xs px-1.5 py-0.5' : 'text-xs px-2.5 py-1';

  return (
    <span className={`inline-flex items-center rounded-full font-medium capitalize ${colorClass} ${sizeClass}`}>
      {status}
    </span>
  );
}
