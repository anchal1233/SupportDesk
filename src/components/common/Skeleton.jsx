export function SkeletonLine({ className = '' }) {
  return <div className={`animate-pulse rounded bg-line ${className}`} />
}

export function StatsCardSkeleton() {
  return (
    <div className="rounded-xl border border-line bg-white p-4 shadow-card">
      <SkeletonLine className="h-3.5 w-20" />
      <SkeletonLine className="mt-3 h-7 w-14" />
      <SkeletonLine className="mt-3 h-3 w-24" />
    </div>
  )
}

export function TicketRowSkeleton() {
  return (
    <div className="flex items-center gap-4 border-b border-line px-5 py-4">
      <SkeletonLine className="h-9 w-9 shrink-0 rounded-full" />
      <div className="flex-1 space-y-2">
        <SkeletonLine className="h-3.5 w-1/3" />
        <SkeletonLine className="h-3 w-1/4" />
      </div>
      <SkeletonLine className="h-6 w-16 rounded-full" />
      <SkeletonLine className="h-6 w-20 rounded-full" />
    </div>
  )
}
