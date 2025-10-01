'use client'

interface SelectedAgentNameProps {
  agentName: string | null
}

export default function SelectedAgentName({ agentName }: SelectedAgentNameProps) {
  return (
    <h2
      className={`text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mt-4 md:mt-5 text-valorant-yellow text-shadow leading-tight px-4 ${
        agentName ? 'visible' : 'invisible'
      }`}
      aria-live="polite"
      aria-atomic="true"
    >
      {agentName || 'None'}
    </h2>
  )
}
