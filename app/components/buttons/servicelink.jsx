"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ServiceLink({pageUrl, text, imageUrl}) {
  return (
    <Link href={pageUrl} className='group relative hover:text-sky-800'>
      
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 md:h-[135px]">
          <Image src={imageUrl} alt={text} height={100} width={250}  className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
        </div>
        <div className="absolute bg-transparent top-[50%] w-[90%] text-center left-[50%] py-3 translate-x-[-50%] translate-y-[-50%] flex flex-wrap items-center justify-center">
          <p className='text-white'>{text}</p>
        </div>
      
    </Link>
  )
}
