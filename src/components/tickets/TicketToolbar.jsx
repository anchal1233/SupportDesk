import { Search, X } from 'lucide-react'
import Input from '../common/Input'
import Select from '../common/Select'
import Button from '../common/Button'

const STATUS_OPTIONS = ['All', 'Open', 'In Progress', 'Resolved']
const PRIORITY_OPTIONS = ['All', 'Low', 'Medium', 'High']

export default function TicketToolbar({
  searchTerm,
  statusFilter,
  priorityFilter,
  onSearchChange,
  onStatusChange,
  onPriorityChange,
  onClearFilters,
}) {
  const filtersActive =
    searchTerm !== '' || statusFilter !== 'All' || priorityFilter !== 'All'

  return (
    <div className="flex flex-col gap-3 border-b border-line p-4 sm:flex-row sm:items-end">
      <Input
        id="ticket-search"
        placeholder="Search by customer, subject, or ticket ID"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        icon={<Search size={15} />}
        className="sm:flex-1"
        aria-label="Search tickets"
      />
      <div className="flex gap-3">
        <Select
          id="status-filter"
          value={statusFilter}
          onChange={(e) => onStatusChange(e.target.value)}
          options={STATUS_OPTIONS}
          className="w-full sm:w-40"
          aria-label="Filter by status"
        />
        <Select
          id="priority-filter"
          value={priorityFilter}
          onChange={(e) => onPriorityChange(e.target.value)}
          options={PRIORITY_OPTIONS}
          className="w-full sm:w-40"
          aria-label="Filter by priority"
        />
        {filtersActive && (
          <Button variant="ghost" onClick={onClearFilters} className="shrink-0">
            <X size={15} />
            Clear
          </Button>
        )}
      </div>
    </div>
  )
}
