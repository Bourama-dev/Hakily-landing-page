interface DimensionDividerProps {
  variant?: 'full' | 'minor'
}

function DimensionDivider({ variant = 'full' }: DimensionDividerProps) {
  if (variant === 'minor') {
    return (
      <div className="relative flex items-center justify-center px-6 py-2" aria-hidden="true">
        <div className="h-px w-full max-w-5xl bg-blueprint-line/15" />
      </div>
    )
  }

  return (
    <div className="relative flex items-center justify-center px-6 py-2" aria-hidden="true">
      <div className="relative h-px w-full max-w-5xl bg-blueprint-line/30">
        <span className="absolute left-0 top-1/2 h-3 w-px -translate-y-1/2 bg-blueprint-line/60" />
        <span className="absolute right-0 top-1/2 h-3 w-px -translate-y-1/2 bg-blueprint-line/60" />
      </div>
    </div>
  )
}

export default DimensionDivider
