const config = {
  Low: 'bg-slate-100 text-slate-600',
  Medium: 'bg-sky-50 text-sky-700',
  High: 'bg-rose-50 text-rose-700',
}

export default function PriorityBadge({ priority }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${
        config[priority] ?? config.Low
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {priority}
    </span>
  )
}
