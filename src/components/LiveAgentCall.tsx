import { useState } from 'react'
import { ConversationProvider, useConversation } from '@elevenlabs/react'
import { Loader2, Mic, Phone, PhoneOff } from 'lucide-react'

const AGENT_ID = 'agent_1201krzttyqpfettefcemdq2p55d'

/** Petit égaliseur animé, visible pendant l'appel. */
function Equalizer({ active }: { active: boolean }) {
  return (
    <span className="flex h-5 items-center gap-[3px]" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <span
          key={i}
          className="block h-full w-[3px] origin-center rounded-full bg-gradient-to-t from-blue to-cyan"
          style={{
            animation: active ? `eq ${0.7 + i * 0.12}s ease-in-out ${i * 0.08}s infinite` : 'none',
            transform: active ? undefined : 'scaleY(.3)',
          }}
        />
      ))}
    </span>
  )
}

function LiveAgentCallInner() {
  const [error, setError] = useState<string | null>(null)
  const conversation = useConversation({
    onError: () => setError('La connexion a échoué. Réessaie dans quelques secondes.'),
  })

  const isConnecting = conversation.status === 'connecting'
  const isConnected = conversation.status === 'connected'

  const handleStart = async () => {
    setError(null)
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true })
      await conversation.startSession({ agentId: AGENT_ID })
    } catch {
      setError("Autorise l'accès au micro pour tester l'assistant.")
    }
  }

  const handleStop = () => {
    void conversation.endSession()
  }

  return (
    <div>
      <button
        type="button"
        onClick={isConnected ? handleStop : handleStart}
        disabled={isConnecting}
        className="group flex w-full flex-col items-stretch gap-4 rounded-2xl border border-stroke bg-night/70 px-5 py-4 text-center transition-colors hover:border-stroke-2 disabled:cursor-wait sm:flex-row sm:items-center sm:justify-between sm:text-left"
      >
        <span className="flex items-center justify-center gap-3 text-[16px] text-[#dfe3ff] sm:justify-start">
          {isConnected ? (
            <>
              <Equalizer active />
              {conversation.isSpeaking ? "L'assistant Hakily parle..." : 'À toi de parler...'}
            </>
          ) : isConnecting ? (
            'Connexion à l’assistant...'
          ) : (
            "Clique pour simuler l'appel d'un client"
          )}
        </span>
        <span
          className={`relative flex shrink-0 items-center justify-center gap-2 rounded-full px-5 py-3 text-[15px] font-semibold text-white ${
            isConnected ? 'bg-[#e5484d]' : 'bg-gradient-to-r from-blue to-cyan'
          }`}
        >
          {!isConnected && !isConnecting && (
            <span className="absolute inset-0 rounded-full border-2 border-cyan/70" style={{ animation: 'ripple 1.8s ease-out infinite' }} aria-hidden="true" />
          )}
          {isConnecting ? (
            <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2.5} />
          ) : isConnected ? (
            <PhoneOff className="h-4 w-4" strokeWidth={2.5} />
          ) : (
            <Phone className="h-4 w-4" strokeWidth={2.5} />
          )}
          {isConnected ? 'Raccrocher' : 'Démarrer l’appel'}
        </span>
      </button>

      {isConnected && (
        <p className="mt-3 flex items-center justify-center gap-1.5 font-mono text-[11px] tracking-[0.1em] text-mist uppercase">
          <Mic className="h-3.5 w-3.5" strokeWidth={2} />
          Micro actif · Parle normalement
        </p>
      )}

      {error && <p className="mt-3 text-center font-mono text-[12px] tracking-wide text-[#ff8a8a] uppercase">{error}</p>}
    </div>
  )
}

export function LiveAgentCall() {
  return (
    <ConversationProvider>
      <LiveAgentCallInner />
    </ConversationProvider>
  )
}
