"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'

export default function ProductLink({pageUrl, text, imageUrl}) {
  return (
    <Link href={pageUrl} className='group relative'>
      
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <Image src={imageUrl} alt={text} height={100} width={500}  className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
        </div>
        <div className="absolute bg-sky-800 b-0 w-full l-0 py-3 translate-y-[-100%] flex items-center justify-center">
          <p className={`font-secondary  text-white`}>{text}</p>
        </div>
      
    </Link>
  )
}
