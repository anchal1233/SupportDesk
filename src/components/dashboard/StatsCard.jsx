export default function StatsCard({ label, value, subtext, icon: Icon, tone = 'default' }) {
  const tones = {
    default: 'bg-canvas text-ink-500',
    brand: 'bg-brand-50 text-brand-600',
    amber: 'bg-amber-50 text-amber-600',
    violet: 'bg-violet-50 text-violet-600',
    emerald: 'bg-emerald-50 text-emerald-600',
  }

  return (
    <div className="rounded-xl border border-line bg-white p-4 shadow-card">
      <div className="flex items-start justify-between">
        <p className="text-sm font-medium text-ink-500">{label}</p>
        <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${tones[tone]}`}>
          <Icon size={16} />
        </div>
      </div>
      <p className="mt-2 text-2xl font-semibold text-ink-900">{value}</p>
      {subtext && <p className="mt-1 text-xs text-ink-500">{subtext}</p>}
    </div>
  )
}
