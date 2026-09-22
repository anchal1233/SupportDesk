import { useEffect, useMemo } from 'react'
import { useShallow } from 'zustand/react/shallow'
import { useTicketStore } from '../store/useTicketStore'
import StatsGrid from '../components/dashboard/StatsGrid'
import TicketToolbar from '../components/tickets/TicketToolbar'
import TicketTable from '../components/tickets/TicketTable'
import TicketCard from '../components/tickets/TicketCard'
import TicketDetails from '../components/tickets/TicketDetails'
import EmptyState from '../components/common/EmptyState'
import ErrorState from '../components/common/ErrorState'
import { StatsCardSkeleton, TicketRowSkeleton } from '../components/common/Skeleton'

export default function Dashboard() {
  const {
    tickets,
    loading,
    error,
    searchTerm,
    statusFilter,
    priorityFilter,
    selectedTicketId,
    fetchTickets,
    setSearchTerm,
    setStatusFilter,
    setPriorityFilter,
    clearFilters,
    selectTicket,
    closeTicketDetails,
    updateTicketStatus,
  } = useTicketStore(
    useShallow((state) => ({
      tickets: state.tickets,
      loading: state.loading,
      error: state.error,
      searchTerm: state.searchTerm,
      statusFilter: state.statusFilter,
      priorityFilter: state.priorityFilter,
      selectedTicketId: state.selectedTicketId,
      fetchTickets: state.fetchTickets,
      setSearchTerm: state.setSearchTerm,
      setStatusFilter: state.setStatusFilter,
      setPriorityFilter: state.setPriorityFilter,
      clearFilters: state.clearFilters,
      selectTicket: state.selectTicket,
      closeTicketDetails: state.closeTicketDetails,
      updateTicketStatus: state.updateTicketStatus,
    }))
  )

  const filteredTickets = useMemo(() => {
    const query = searchTerm.trim().toLowerCase()
    return tickets.filter((ticket) => {
      const matchesSearch =
        !query ||
        ticket.customer.name.toLowerCase().includes(query) ||
        ticket.subject.toLowerCase().includes(query) ||
        ticket.id.toLowerCase().includes(query)

      const matchesStatus = statusFilter === 'All' || ticket.status === statusFilter
      const matchesPriority = priorityFilter === 'All' || ticket.priority === priorityFilter

      return matchesSearch && matchesStatus && matchesPriority
    })
  }, [tickets, searchTerm, statusFilter, priorityFilter])

 
  const stats = useMemo(
    () => ({
      total: tickets.length,
      open: tickets.filter((t) => t.status === 'Open').length,
      inProgress: tickets.filter((t) => t.status === 'In Progress').length,
      resolved: tickets.filter((t) => t.status === 'Resolved').length,
    }),
    [tickets]
  )

  const selectedTicket = tickets.find((t) => t.id === selectedTicketId) ?? null

  useEffect(() => {
    fetchTickets()
  }, [fetchTickets])

  const filtersActive =
    searchTerm !== '' || statusFilter !== 'All' || priorityFilter !== 'All'

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-ink-900">Support Tickets</h1>
        <p className="mt-1 text-sm text-ink-500">
          Manage and track customer support requests
        </p>
      </div>

      {loading ? (
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <StatsCardSkeleton key={i} />
          ))}
        </div>
      ) : (
        <StatsGrid stats={stats} />
      )}

      <div className="mt-6 rounded-xl border border-line bg-white shadow-card">
        <TicketToolbar
          searchTerm={searchTerm}
          statusFilter={statusFilter}
          priorityFilter={priorityFilter}
          onSearchChange={setSearchTerm}
          onStatusChange={setStatusFilter}
          onPriorityChange={setPriorityFilter}
          onClearFilters={clearFilters}
        />

        {loading && (
          <div>
            {Array.from({ length: 5 }).map((_, i) => (
              <TicketRowSkeleton key={i} />
            ))}
          </div>
        )}

        {!loading && error && <ErrorState message={error} onRetry={fetchTickets} />}

        {!loading && !error && filteredTickets.length === 0 && (
          <EmptyState
            title={filtersActive ? 'No tickets match your filters.' : 'No tickets found'}
            actionLabel={filtersActive ? 'Clear Filters' : undefined}
            onAction={filtersActive ? clearFilters : undefined}
          />
        )}

        {!loading && !error && filteredTickets.length > 0 && (
          <>
            <TicketTable tickets={filteredTickets} onView={selectTicket} />
            <div className="lg:hidden">
              {filteredTickets.map((ticket) => (
                <TicketCard key={ticket.id} ticket={ticket} onView={selectTicket} />
              ))}
            </div>
          </>
        )}
      </div>

      {selectedTicket && (
        <TicketDetails
          ticket={selectedTicket}
          onClose={closeTicketDetails}
          onStatusChange={updateTicketStatus}
        />
      )}
    </div>
  )
}
