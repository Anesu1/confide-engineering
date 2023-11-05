"use client"
import Link from 'next/link'
import React from 'react'

export default function SocialLink({children, link}) {
  return (
    <Link href={link} className='border-4 border-sky-700 h-50 w-50 rounded-[50%] ml-5 block p-3'>
      {children}
    </Link>
  )
}
