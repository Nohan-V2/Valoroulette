'use client'

import { useEffect, useRef, useState } from 'react'

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false)

  useEffect(() => {
    // Ne charger la vidéo que si l'utilisateur n'est pas sur mobile data
    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection
    const isSlow = connection?.effectiveType === 'slow-2g' || connection?.effectiveType === '2g' || connection?.saveData
    
    if (!isSlow) {
      setShouldLoadVideo(true)
    }
  }, [])

  useEffect(() => {
    if (shouldLoadVideo && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Ignorer les erreurs de lecture auto
      })
    }
  }, [shouldLoadVideo])

  if (!shouldLoadVideo) {
    return (
      <div 
        className="fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-valorant-black to-gray-900"
        aria-hidden="true"
      />
    )
  }

  return (
    <video
      ref={videoRef}
      className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      playsInline
      loop
      muted
      preload="none"
      aria-hidden="true"
    >
      <source src="/assets/video/valo-bg.mp4" type="video/mp4" />
    </video>
  )
}
