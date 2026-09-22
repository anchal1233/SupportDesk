import { create } from 'zustand'
import { getTickets, updateTicketStatus } from '../services/ticketService'

const initialFilters = {
  searchTerm: '',
  statusFilter: 'All',
  priorityFilter: 'All',
}

export const useTicketStore = create((set, get) => ({
  tickets: [],
  loading: true,
  error: null,
  selectedTicketId: null,
  ...initialFilters,

  fetchTickets: async () => {
    set({ loading: true, error: null })
    try {
      const tickets = await getTickets()
      set({ tickets, loading: false })
    } catch (err) {
      set({ error: 'Unable to load tickets.', loading: false })
    }
  },

  setSearchTerm: (searchTerm) => set({ searchTerm }),
  setStatusFilter: (statusFilter) => set({ statusFilter }),
  setPriorityFilter: (priorityFilter) => set({ priorityFilter }),
  clearFilters: () => set(initialFilters),

  selectTicket: (ticketId) => set({ selectedTicketId: ticketId }),
  closeTicketDetails: () => set({ selectedTicketId: null }),

  updateTicketStatus: async (ticketId, status) => {
    const previousTickets = get().tickets
    set({
      tickets: previousTickets.map((t) =>
        t.id === ticketId ? { ...t, status } : t
      ),
    })
    try {
      await updateTicketStatus(ticketId, status)
    } catch (err) {
      set({ tickets: previousTickets })
    }
  },
}))

export function selectFilteredTickets(state) {
  const { tickets, searchTerm, statusFilter, priorityFilter } = state
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
}

export function selectTicketStats(state) {
  const { tickets } = state
  return {
    total: tickets.length,
    open: tickets.filter((t) => t.status === 'Open').length,
    inProgress: tickets.filter((t) => t.status === 'In Progress').length,
    resolved: tickets.filter((t) => t.status === 'Resolved').length,
  }
}
