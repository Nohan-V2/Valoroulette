'use client'

import { useState, useEffect } from 'react'
import type { Agent, RoleName } from '@/types/agent'

export function useAgents() {
  const [agents, setAgents] = useState<Agent[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [lockedAgents, setLockedAgents] = useState<Set<string>>(new Set())
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null)
  const [lastSelectedAgent, setLastSelectedAgent] = useState<string | null>(null)
  const [activeRoles, setActiveRoles] = useState<Set<RoleName>>(new Set())

  useEffect(() => {
    async function fetchAgents() {
      try {
        const response = await fetch('https://valorant-api.com/v1/agents')
        if (!response.ok) {
          throw new Error('Failed to fetch agents')
        }
        const data = await response.json()
        const playableAgents = data.data.filter(
          (agent: Agent) => agent.isPlayableCharacter
        )
        setAgents(playableAgents)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        setLoading(false)
      }
    }

    fetchAgents()
  }, [])

  const toggleLock = (agentId: string) => {
    setLockedAgents((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(agentId)) {
        newSet.delete(agentId)
      } else {
        newSet.add(agentId)
      }
      return newSet
    })
  }

  const selectAll = () => {
    setLockedAgents(new Set())
    setActiveRoles(new Set())
    setSelectedAgent(null)
  }

  const deselectAll = () => {
    setLockedAgents(new Set(agents.map((agent) => agent.uuid)))
    setActiveRoles(new Set())
    setSelectedAgent(null)
  }

  const toggleRole = (role: RoleName) => {
    // Réinitialiser la sélection comme dans l'ancienne version
    setSelectedAgent(null)
    setLastSelectedAgent(null)
    
    setActiveRoles((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(role)) {
        newSet.delete(role)
      } else {
        newSet.add(role)
      }
      
      // Verrouiller/déverrouiller les agents selon les rôles actifs
      if (newSet.size === 0) {
        // Si aucun rôle actif, tout déverrouiller
        setLockedAgents(new Set())
      } else {
        // Verrouiller les agents qui ne correspondent pas aux rôles actifs
        const agentsToLock = agents
          .filter((agent) => !agent.role || !newSet.has(agent.role.displayName as RoleName))
          .map((agent) => agent.uuid)
        setLockedAgents(new Set(agentsToLock))
      }
      
      return newSet
    })
  }

  const getFilteredAgents = () => {
    // Toujours retourner tous les agents, le verrouillage se fait via lockedAgents
    return agents
  }

  const getUnlockedAgents = () => {
    const filtered = getFilteredAgents()
    return filtered.filter((agent) => !lockedAgents.has(agent.uuid))
  }

  const rollAgent = () => {
    let availableAgents = getUnlockedAgents()

    if (availableAgents.length === 0) {
      return
    }

    // Filter out last selected agent if more than one available
    if (lastSelectedAgent && availableAgents.length > 1) {
      availableAgents = availableAgents.filter(
        (agent) => agent.displayName !== lastSelectedAgent
      )
    }

    if (availableAgents.length === 0) {
      return
    }

    const randomIndex = Math.floor(Math.random() * availableAgents.length)
    const selected = availableAgents[randomIndex]
    setSelectedAgent(selected)
    setLastSelectedAgent(selected.displayName)
  }

  const isAllLocked = () => {
    return agents.length > 0 && agents.every((agent) => lockedAgents.has(agent.uuid))
  }

  return {
    agents,
    loading,
    error,
    lockedAgents,
    selectedAgent,
    activeRoles,
    toggleLock,
    selectAll,
    deselectAll,
    toggleRole,
    rollAgent,
    getFilteredAgents,
    getUnlockedAgents,
    isAllLocked,
  }
}
