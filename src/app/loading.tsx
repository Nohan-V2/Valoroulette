import LoadingSpinner from '@/components/LoadingSpinner'
import BackgroundVideo from '@/components/BackgroundVideo'

export default function Loading() {
  return (
    <>
      <BackgroundVideo />
      <div className="flex items-center justify-center min-h-screen">
        <LoadingSpinner />
      </div>
    </>
  )
}
