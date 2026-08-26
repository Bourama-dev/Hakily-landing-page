const stripes = {
  backgroundImage:
    'repeating-linear-gradient(45deg, var(--color-hazard-yellow) 0 10px, var(--color-ticket-ink) 10px 20px)',
}

function HazardBanner() {
  return (
    <div className="w-full" role="banner" aria-label="Offre Pack Fondateur">
      <div className="h-2 w-full" style={stripes} aria-hidden="true" />
      <div className="bg-ticket-ink py-2.5 text-center">
        <p className="font-mono text-xs font-medium tracking-wide text-hazard-yellow uppercase sm:text-sm">
          ⚡ Pack Fondateur — Offre réservée aux 10 premiers clients signés
        </p>
      </div>
      <div className="h-2 w-full" style={stripes} aria-hidden="true" />
    </div>
  )
}

export default HazardBanner
