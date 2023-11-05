"use client"
import Link from 'next/link'
import React from 'react'

export default function AnimatedLink({link, title}) {
  return (
    <Link href={link} className="text-white font-medium">
        {title}
    </Link>
  )
}
