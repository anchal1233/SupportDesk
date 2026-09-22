import { LayoutGrid, Ticket, Users, BarChart3, Headset } from 'lucide-react'

const navItems = [
  { label: 'Dashboard', icon: LayoutGrid, active: true },
  { label: 'Tickets', icon: Ticket, active: true },
  { label: 'Customers', icon: Users, active: false },
  { label: 'Analytics', icon: BarChart3, active: false },
]

export default function Sidebar() {
  return (
    <aside className="hidden w-60 shrink-0 flex-col border-r border-line bg-white px-4 py-5 lg:flex">
      <div className="flex items-center gap-2 px-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500 text-white">
          <Headset size={17} />
        </div>
        <span className="text-[15px] font-semibold text-ink-900">SupportDesk</span>
      </div>

      <nav className="mt-8 flex flex-col gap-1">
        {navItems.map(({ label, icon: Icon, active }) => (
          <button
            key={label}
            type="button"
            disabled={!active}
            title={active ? undefined : 'Coming soon'}
            className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors ${
              label === 'Tickets'
                ? 'bg-brand-50 text-brand-600'
                : active
                  ? 'text-ink-500 hover:bg-canvas hover:text-ink-900'
                  : 'cursor-not-allowed text-ink-300'
            }`}
          >
            <Icon size={17} />
            {label}
            {!active && (
              <span className="ml-auto rounded-full bg-canvas px-1.5 py-0.5 text-[10px] font-medium text-ink-300">
                Soon
              </span>
            )}
          </button>
        ))}
      </nav>
    </aside>
  )
}
