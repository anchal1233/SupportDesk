import { Headset, Search } from 'lucide-react'

export default function MobileHeader() {
  return (
    <header className="flex h-14 shrink-0 items-center justify-between border-b border-line bg-white px-4 lg:hidden">
      <div className="flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-500 text-white">
          <Headset size={15} />
        </div>
        <span className="text-sm font-semibold text-ink-900">SupportDesk</span>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Search"
          className="flex h-8 w-8 items-center justify-center rounded-lg text-ink-500 hover:bg-canvas"
        >
          <Search size={17} />
        </button>
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-100 text-[11px] font-semibold text-brand-600">
          AR
        </div>
      </div>
    </header>
  )
}
