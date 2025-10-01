'use client'

import AgentCard from './AgentCard'
import type { Agent } from '@/types/agent'

interface AgentListProps {
  agents: Agent[]
  lockedAgents: Set<string>
  selectedAgent: Agent | null
  onToggleLock: (agentId: string) => void
}

export default function AgentList({
  agents,
  lockedAgents,
  selectedAgent,
  onToggleLock,
}: AgentListProps) {
  return (
    <ul
      className="flex flex-wrap justify-center items-center w-[95%] max-w-[1200px] gap-3 md:gap-4 mt-4 md:mt-6"
      role="listbox"
      aria-label="List of Valorant agents"
    >
      {agents.map((agent) => {
        const isLocked = lockedAgents.has(agent.uuid)
        const isSelected = selectedAgent?.uuid === agent.uuid
        const isNotSelected = selectedAgent !== null && !isSelected

        return (
          <AgentCard
            key={agent.uuid}
            agent={agent}
            isLocked={isLocked}
            isSelected={isSelected}
            isNotSelected={isNotSelected}
            onToggleLock={() => onToggleLock(agent.uuid)}
          />
        )
      })}
    </ul>
  )
}
