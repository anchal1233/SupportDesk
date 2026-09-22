import { Eye } from 'lucide-react'
import StatusBadge from './StatusBadge'
import PriorityBadge from './PriorityBadge'
import { formatDate } from '../../utils/date'

export default function TicketRow({ ticket, onView }) {
  return (
    <tr
      onClick={() => onView(ticket.id)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') onView(ticket.id)
      }}
      tabIndex={0}
      className="cursor-pointer border-b border-line last:border-b-0 hover:bg-canvas"
    >
      <td className="px-5 py-3.5">
        <p className="text-sm font-medium text-ink-900">{ticket.id}</p>
        <p className="text-xs text-ink-500">{ticket.category}</p>
      </td>
      <td className="px-5 py-3.5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-semibold text-brand-600">
            {ticket.customer.avatar}
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-ink-900">
              {ticket.customer.name}
            </p>
            <p className="truncate text-xs text-ink-500">{ticket.customer.email}</p>
          </div>
        </div>
      </td>
      <td className="max-w-[240px] px-5 py-3.5">
        <p className="truncate text-sm text-ink-700">{ticket.subject}</p>
      </td>
      <td className="px-5 py-3.5">
        <PriorityBadge priority={ticket.priority} />
      </td>
      <td className="px-5 py-3.5">
        <StatusBadge status={ticket.status} />
      </td>
      <td className="px-5 py-3.5">
        <p className="text-sm text-ink-500">{formatDate(ticket.createdAt)}</p>
      </td>
      <td className="px-5 py-3.5 text-right">
        <button
          type="button"
          aria-label={`View ${ticket.id}`}
          onClick={(e) => {
            e.stopPropagation()
            onView(ticket.id)
          }}
          className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-ink-500 hover:bg-white hover:text-brand-600"
        >
          <Eye size={16} />
        </button>
      </td>
    </tr>
  )
}
