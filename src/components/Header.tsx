'use client'

import Image from 'next/image'

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center text-center pt-4 md:pt-6">
      <Image
        src="/assets/img/logo.png"
        alt="Valoroulette Logo - A stylized Valorant-themed randomizer tool for agent selection"
        width={72}
        height={72}
        className="object-cover w-16 h-16 md:w-[72px] md:h-[72px]"
        priority
      />
      <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-black mt-2 md:mt-4 text-shadow leading-tight px-4">
        Valoroulette
      </h1>
    </header>
  )
}
