import { Search, Bell } from 'lucide-react'

export default function Header() {
  return (
    <header className="hidden h-16 shrink-0 items-center justify-between border-b border-line bg-white px-6 lg:flex">
      <div>
        <h1 className="text-sm font-semibold text-ink-900">SupportDesk</h1>
        <p className="text-xs text-ink-500">Customer Support Dashboard</p>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Search"
          className="flex h-9 w-9 items-center justify-center rounded-lg text-ink-500 hover:bg-canvas"
        >
          <Search size={18} />
        </button>
        <button
          type="button"
          aria-label="Notifications"
          className="flex h-9 w-9 items-center justify-center rounded-lg text-ink-500 hover:bg-canvas"
        >
          <Bell size={18} />
        </button>
        <div className="ml-1 flex items-center gap-2.5 border-l border-line pl-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-xs font-semibold text-brand-600">
            AR
          </div>
          <div className="leading-tight">
            <p className="text-sm font-medium text-ink-900">Amara Reyes</p>
            <p className="text-xs text-ink-500">Support Agent</p>
          </div>
        </div>
      </div>
    </header>
  )
}
