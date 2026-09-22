import { ChevronDown } from 'lucide-react'

export default function Select({ label, id, options, className = '', ...props }) {
  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink-700">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={id}
          className="w-full appearance-none rounded-lg border border-line bg-white py-2 pl-3 pr-9 text-sm text-ink-900 focus:border-brand-500"
          {...props}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown
          size={16}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink-300"
        />
      </div>
    </div>
  )
}
