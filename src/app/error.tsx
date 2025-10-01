'use client'

import { useEffect } from 'react'
import BackgroundVideo from '@/components/BackgroundVideo'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <>
      <BackgroundVideo />
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-6xl font-black text-valorant-red mb-4">Oops!</h1>
        <h2 className="text-3xl font-bold mb-6">Something went wrong</h2>
        <p className="text-lg mb-8 max-w-md opacity-80">
          An error occurred while loading the application. Please try again.
        </p>
        <button
          onClick={() => reset()}
          className="bg-valorant-red px-8 py-4 rounded text-xl font-bold transition-opacity hover:opacity-70"
        >
          Try Again
        </button>
      </div>
    </>
  )
}
