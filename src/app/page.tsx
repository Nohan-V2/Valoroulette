'use client'

import { useAgents } from '@/hooks/useAgents'
import BackgroundVideo from '@/components/BackgroundVideo'
import Header from '@/components/Header'
import ActionButtons from '@/components/ActionButtons'
import RoleFilters from '@/components/RoleFilters'
import SelectedAgentName from '@/components/SelectedAgentName'
import AgentList from '@/components/AgentList'
import ErrorMessage from '@/components/ErrorMessage'
import LoadingSpinner from '@/components/LoadingSpinner'

export default function Home() {
  const {
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
    isAllLocked,
  } = useAgents()

  return (
    <>
      <BackgroundVideo />
      
      {isAllLocked() && (
        <ErrorMessage message="All agents are locked. Please unlock at least one agent." />
      )}

      <main
        id="main-content"
        className="flex flex-col justify-center items-center text-center w-[90%] max-w-[1440px] mx-auto"
      >
        <Header />
        
        <ActionButtons
          onSelectAll={selectAll}
          onDeselectAll={deselectAll}
          onRoll={rollAgent}
        />

        <RoleFilters activeRoles={activeRoles} onToggleRole={toggleRole} />

        <SelectedAgentName agentName={selectedAgent?.displayName || null} />

        {loading && <LoadingSpinner />}
        
        {error && <ErrorMessage message={`Error: ${error}`} />}

        {!loading && !error && (
          <AgentList
            agents={getFilteredAgents()}
            lockedAgents={lockedAgents}
            selectedAgent={selectedAgent}
            onToggleLock={toggleLock}
          />
        )}
      </main>
    </>
  )
}
