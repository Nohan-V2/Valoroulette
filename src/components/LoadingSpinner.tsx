'use client'

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center min-h-[400px]" role="status" aria-live="polite">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-valorant-red"></div>
      <span className="sr-only">Loading agents...</span>
    </div>
  )
}
