interface DimensionDividerProps {
  variant?: 'full' | 'minor'
}

/** Fine ligne lumineuse entre deux sections. */
function DimensionDivider({ variant = 'full' }: DimensionDividerProps) {
  return (
    <div className="relative flex items-center justify-center px-6" aria-hidden="true">
      <div
        className={`h-px w-full max-w-5xl ${variant === 'minor' ? 'opacity-40' : 'opacity-80'}`}
        style={{ background: 'linear-gradient(90deg, transparent, rgba(53,198,244,.6), rgba(91,123,255,.6), transparent)' }}
      />
    </div>
  )
}

export default DimensionDivider
