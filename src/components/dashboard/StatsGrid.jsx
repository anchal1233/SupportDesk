import { Ticket, CircleDot, Clock, CheckCircle2 } from 'lucide-react'
import StatsCard from './StatsCard'

export default function StatsGrid({ stats }) {
  const cards = [
    {
      label: 'Total Tickets',
      value: stats.total,
      subtext: 'All time',
      icon: Ticket,
      tone: 'brand',
    },
    {
      label: 'Open',
      value: stats.open,
      subtext: 'Awaiting response',
      icon: CircleDot,
      tone: 'amber',
    },
    {
      label: 'In Progress',
      value: stats.inProgress,
      subtext: 'Being worked on',
      icon: Clock,
      tone: 'violet',
    },
    {
      label: 'Resolved',
      value: stats.resolved,
      subtext: 'Closed out',
      icon: CheckCircle2,
      tone: 'emerald',
    },
  ]

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
      {cards.map((card) => (
        <StatsCard key={card.label} {...card} />
      ))}
    </div>
  )
}
