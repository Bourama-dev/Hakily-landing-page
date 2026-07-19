function BlueprintGrid() {
  return (
    <svg
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full text-blueprint-line"
      aria-hidden="true"
    >
      <defs>
        <pattern id="blueprint-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#blueprint-grid)" opacity="0.15" />
    </svg>
  )
}

export default BlueprintGrid
