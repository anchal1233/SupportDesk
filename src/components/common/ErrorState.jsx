import { AlertTriangle } from 'lucide-react'
import Button from './Button'

export default function ErrorState({ message = 'Unable to load tickets.', onRetry }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-50 text-rose-500">
        <AlertTriangle size={22} />
      </div>
      <p className="text-sm font-medium text-ink-700">{message}</p>
      {onRetry && (
        <Button variant="secondary" onClick={onRetry} className="mt-1">
          Try Again
        </Button>
      )}
    </div>
  )
}
