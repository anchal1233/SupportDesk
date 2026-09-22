const variants = {
  primary: 'bg-brand-500 text-white hover:bg-brand-600 disabled:bg-brand-200',
  secondary:
    'bg-white text-ink-700 border border-line hover:bg-canvas disabled:text-ink-300',
  ghost: 'text-ink-500 hover:bg-canvas disabled:text-ink-300',
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors disabled:cursor-not-allowed ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
