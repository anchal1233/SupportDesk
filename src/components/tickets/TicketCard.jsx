import { ChevronRight } from 'lucide-react'
import StatusBadge from './StatusBadge'
import PriorityBadge from './PriorityBadge'
import { formatDate } from '../../utils/date'

export default function TicketCard({ ticket, onView }) {
  return (
    <button
      type="button"
      onClick={() => onView(ticket.id)}
      className="flex w-full flex-col gap-2.5 border-b border-line p-4 text-left last:border-b-0 active:bg-canvas"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-semibold text-brand-600">
            {ticket.customer.avatar}
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-ink-900">
              {ticket.customer.name}
            </p>
            <p className="text-xs text-ink-500">{ticket.id}</p>
          </div>
        </div>
        <ChevronRight size={16} className="mt-1.5 shrink-0 text-ink-300" />
      </div>

      <p className="truncate text-sm text-ink-700">{ticket.subject}</p>

      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <PriorityBadge priority={ticket.priority} />
          <StatusBadge status={ticket.status} />
        </div>
        <span className="text-xs text-ink-500">{formatDate(ticket.createdAt)}</span>
      </div>
    </button>
  )
}
