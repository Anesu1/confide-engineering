"use client"
import Link from 'next/link'
import React from 'react'

export default function SocialLinkFooter({children, link}) {
  return (
    <Link href={link} className='text-sky-700 bg-white h-50 w-50 text-2xl rounded-[50%] mr-5 block p-3'>
      {children}
    </Link>
  )
}
