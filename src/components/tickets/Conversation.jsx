import { formatDateTime } from '../../utils/date'

export default function Conversation({ messages }) {
  return (
    <div className="space-y-3">
      {messages.map((msg) => {
        const isCustomer = msg.sender === 'customer'
        return (
          <div
            key={msg.id}
            className={`flex flex-col ${isCustomer ? 'items-start' : 'items-end'}`}
          >
            <div
              className={`max-w-[85%] rounded-xl px-3.5 py-2.5 text-sm leading-relaxed ${
                isCustomer
                  ? 'bg-canvas text-ink-700'
                  : 'bg-brand-500 text-white'
              }`}
            >
              <p
                className={`mb-1 text-xs font-medium ${
                  isCustomer ? 'text-ink-500' : 'text-brand-100'
                }`}
              >
                {isCustomer ? 'Customer' : 'Support'}
              </p>
              {msg.message}
            </div>
            <span className="mt-1 text-[11px] text-ink-300">
              {formatDateTime(msg.timestamp)}
            </span>
          </div>
        )
      })}
    </div>
  )
}
