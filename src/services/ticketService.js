import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:4000',
})

export const getTickets = async () => {
  const { data } = await api.get('/tickets')
  return data
}

export const updateTicketStatus = async (ticketId, status) => {
  const { data } = await api.patch(`/tickets/${ticketId}`, { status })
  return data
}