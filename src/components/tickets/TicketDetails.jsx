import { X, Mail, Phone, Building2, Calendar, Tag } from 'lucide-react'
import StatusBadge from './StatusBadge'
import PriorityBadge from './PriorityBadge'
import Select from '../common/Select'
import Conversation from './Conversation'
import { formatDateTime } from '../../utils/date'

const STATUS_OPTIONS = ['Open', 'In Progress', 'Resolved']

export default function TicketDetails({ ticket, onClose, onStatusChange }) {
  if (!ticket) return null

  return (
    <div className="fixed inset-0 z-40 flex justify-end">
      <div
        className="absolute inset-0 bg-ink-900/30 animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative flex h-full w-full max-w-md flex-col bg-white shadow-panel animate-slide-in">
        <div className="flex items-start justify-between border-b border-line px-5 py-4">
          <div>
            <p className="text-xs font-medium text-ink-500">{ticket.id}</p>
            <h2 className="mt-0.5 text-base font-semibold text-ink-900">
              {ticket.subject}
            </h2>
          </div>
          <button
            type="button"
            aria-label="Close ticket details"
            onClick={onClose}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-ink-500 hover:bg-canvas"
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-thin px-5 py-5">
          {/* Customer information */}
          <section>
            <h3 className="text-sm font-medium text-ink-700">Customer</h3>
            <div className="mt-3 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-sm font-semibold text-brand-600">
                {ticket.customer.avatar}
              </div>
              <div>
                <p className="text-sm font-medium text-ink-900">
                  {ticket.customer.name}
                </p>
                <p className="text-xs text-ink-500">{ticket.customer.company}</p>
              </div>
            </div>
            <div className="mt-3 space-y-1.5 text-sm text-ink-500">
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-ink-300" />
                {ticket.customer.email}
              </div>
              {ticket.customer.phone && (
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-ink-300" />
                  {ticket.customer.phone}
                </div>
              )}
              <div className="flex items-center gap-2">
                <Building2 size={14} className="text-ink-300" />
                {ticket.customer.company}
              </div>
            </div>
          </section>

          {/* Ticket information */}
          <section className="mt-5 border-t border-line pt-5">
            <h3 className="text-sm font-medium text-ink-700">Ticket information</h3>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <div>
                <p className="text-xs text-ink-500">Priority</p>
                <div className="mt-1.5">
                  <PriorityBadge priority={ticket.priority} />
                </div>
              </div>
              <div>
                <p className="text-xs text-ink-500">Status</p>
                <div className="mt-1.5">
                  <StatusBadge status={ticket.status} />
                </div>
              </div>
              <div>
                <p className="flex items-center gap-1.5 text-xs text-ink-500">
                  <Calendar size={12} /> Created
                </p>
                <p className="mt-1.5 text-sm text-ink-700">
                  {formatDateTime(ticket.createdAt)}
                </p>
              </div>
              <div>
                <p className="flex items-center gap-1.5 text-xs text-ink-500">
                  <Tag size={12} /> Category
                </p>
                <p className="mt-1.5 text-sm text-ink-700">{ticket.category}</p>
              </div>
            </div>
          </section>

          {/* Issue details */}
          <section className="mt-5 border-t border-line pt-5">
            <h3 className="text-sm font-medium text-ink-700">Issue details</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-500">
              {ticket.description}
            </p>
          </section>

          {/* Conversation */}
          <section className="mt-5 border-t border-line pt-5">
            <h3 className="mb-3 text-sm font-medium text-ink-700">Conversation</h3>
            <Conversation messages={ticket.messages} />
          </section>
        </div>

        {/* Status update footer */}
        <div className="border-t border-line px-5 py-4">
          <Select
            id="update-status"
            label="Update status"
            value={ticket.status}
            onChange={(e) => onStatusChange(ticket.id, e.target.value)}
            options={STATUS_OPTIONS}
          />
        </div>
      </div>
    </div>
  )
}
