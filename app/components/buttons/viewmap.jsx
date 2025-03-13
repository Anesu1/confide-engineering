"use client"
import Link from 'next/link'
import React from 'react'

export default function Viewmap() {
  return (
    <Link
      href="https://maps.app.goo.gl/yjRqUXDPvpWnM81q9?g_st=aw"
      target="_blank"
      className="underline pb-2"
    >
      view on map
    </Link>
  );
}
