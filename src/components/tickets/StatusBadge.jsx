import { CircleDot, Clock, CheckCircle2 } from 'lucide-react'

const config = {
  Open: { classes: 'bg-amber-50 text-amber-700', icon: CircleDot },
  'In Progress': { classes: 'bg-violet-50 text-violet-700', icon: Clock },
  Resolved: { classes: 'bg-emerald-50 text-emerald-700', icon: CheckCircle2 },
}

export default function StatusBadge({ status }) {
  const { classes, icon: Icon } = config[status] ?? config.Open

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${classes}`}
    >
      <Icon size={12} />
      {status}
    </span>
  )
}
