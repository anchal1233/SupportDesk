import TicketRow from './TicketRow'

export default function TicketTable({ tickets, onView }) {
  return (
    <table className="hidden w-full text-left lg:table">
      <thead>
        <tr className="border-b border-line bg-canvas/60">
          {['Ticket', 'Customer', 'Subject', 'Priority', 'Status', 'Created', ''].map(
            (col) => (
              <th
                key={col}
                className="px-5 py-2.5 text-xs font-medium text-ink-500"
              >
                {col}
              </th>
            ),
          )}
        </tr>
      </thead>
      <tbody>
        {tickets.map((ticket) => (
          <TicketRow key={ticket.id} ticket={ticket} onView={onView} />
        ))}
      </tbody>
    </table>
  )
}
