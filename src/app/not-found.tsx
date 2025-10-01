import Link from 'next/link'
import BackgroundVideo from '@/components/BackgroundVideo'

export default function NotFound() {
  return (
    <>
      <BackgroundVideo />
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-8xl font-black text-valorant-red mb-4">404</h1>
        <h2 className="text-4xl font-bold mb-6">Page Not Found</h2>
        <p className="text-xl mb-8 max-w-md">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="bg-valorant-red px-8 py-4 rounded text-xl font-bold transition-opacity hover:opacity-70"
        >
          Return Home
        </Link>
      </div>
    </>
  )
}
