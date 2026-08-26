import { useState } from 'react'
import { ConversationProvider, useConversation } from '@elevenlabs/react'
import { Loader2, Mic, Phone, PhoneOff } from 'lucide-react'

const AGENT_ID = 'agent_1201krzttyqpfettefcemdq2p55d'

function LiveAgentCallInner() {
  const [error, setError] = useState<string | null>(null)
  const conversation = useConversation({
    onError: () => setError("La connexion a échoué. Réessaie dans quelques secondes."),
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
        className="flex w-full flex-col items-stretch gap-3 rounded-sm bg-blueprint-navy px-5 py-4 text-center transition-colors hover:bg-blueprint-navy/80 disabled:cursor-wait sm:flex-row sm:items-center sm:justify-between sm:text-left"
      >
        <span className="flex items-center justify-center gap-3 font-body text-sm text-ticket-paper/85 sm:justify-start sm:text-base">
          {isConnected ? (
            <>
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal-orange opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-signal-orange" />
              </span>
              {conversation.isSpeaking ? "L'assistant Hakily parle..." : 'À toi de parler...'}
            </>
          ) : isConnecting ? (
            'Connexion à l’assistant...'
          ) : (
            "Clique pour simuler une demande d'intervention"
          )}
        </span>
        <span className="flex shrink-0 items-center justify-center gap-2 rounded-full bg-signal-orange px-4 py-2.5 font-mono text-xs font-bold tracking-wide text-ticket-paper uppercase sm:py-2">
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
        <p className="mt-3 flex items-center justify-center gap-1.5 font-mono text-[10px] tracking-wide text-ticket-paper/50 uppercase">
          <Mic className="h-3 w-3" strokeWidth={2} />
          Micro actif · Parle normalement
        </p>
      )}

      {error && (
        <p className="mt-3 text-center font-mono text-[10px] tracking-wide text-signal-orange uppercase">{error}</p>
      )}
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
