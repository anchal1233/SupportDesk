import { Inbox } from 'lucide-react'
import Button from './Button'

export default function EmptyState({
  title = 'No tickets found',
  description,
  actionLabel,
  onAction,
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-canvas text-ink-300">
        <Inbox size={22} />
      </div>
      <div>
        <p className="text-sm font-medium text-ink-700">{title}</p>
        {description && <p className="mt-1 text-sm text-ink-500">{description}</p>}
      </div>
      {actionLabel && (
        <Button variant="secondary" onClick={onAction} className="mt-1">
          {actionLabel}
        </Button>
      )}
    </div>
  )
}
