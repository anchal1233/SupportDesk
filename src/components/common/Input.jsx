export default function Input({ label, id, icon, className = '', ...props }) {
  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink-700">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-300">
            {icon}
          </span>
        )}
        <input
          id={id}
          className={`w-full rounded-lg border border-line bg-white py-2 text-sm text-ink-900 placeholder:text-ink-300 focus:border-brand-500 ${
            icon ? 'pl-9 pr-3' : 'px-3'
          }`}
          {...props}
        />
      </div>
    </div>
  )
}
