'use client'

import { memo } from 'react'
import Image from 'next/image'
import type { Agent } from '@/types/agent'

interface AgentCardProps {
  agent: Agent
  isLocked: boolean
  isSelected: boolean
  isNotSelected: boolean
  onToggleLock: () => void
}

function AgentCard({
  agent,
  isLocked,
  isSelected,
  isNotSelected,
  onToggleLock,
}: AgentCardProps) {
  return (
    <li
      className={`relative w-[100px] h-[100px] bg-white/15 rounded cursor-pointer overflow-hidden transition-opacity duration-300 outline outline-2 outline-offset-2 ${
        isSelected
          ? 'outline-valorant-yellow'
          : 'outline-white/15 active:scale-95'
      }`}
      onClick={onToggleLock}
      role="option"
      aria-selected={isSelected}
      aria-label={`${agent.displayName}${isLocked ? ' (locked)' : ''}`}
    >
      <Image
        src={agent.displayIcon}
        alt={agent.displayName}
        width={100}
        height={100}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLocked ? 'opacity-30' : isNotSelected ? 'opacity-50' : 'opacity-100'
        }`}
        loading="lazy"
        quality={75}
        unoptimized
      />
      {isLocked && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 pointer-events-none">
          <Image
            src="/assets/img/lock.svg"
            alt=""
            width={24}
            height={24}
            className="w-full h-full"
            aria-hidden="true"
          />
        </div>
      )}
    </li>
  )
}

// Mémoiser pour éviter les re-renders inutiles
export default memo(AgentCard, (prevProps, nextProps) => {
  return (
    prevProps.isLocked === nextProps.isLocked &&
    prevProps.isSelected === nextProps.isSelected &&
    prevProps.isNotSelected === nextProps.isNotSelected
  )
})
