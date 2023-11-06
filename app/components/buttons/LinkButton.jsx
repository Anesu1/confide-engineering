"use client"

import Link from "next/link"

export default function LinkButton({link, text}) {
  return (
    <Link href={link}>
      {text}
    </Link>
  )
}
