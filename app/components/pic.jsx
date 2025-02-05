import Image from 'next/image'
import React from 'react'

export default function Pic() {
  return (
    <section className='relative bg-black bg-[url("/images/pic.webp")] h-[500px] bg-cover bg-center'>
      
      <div className="text-white bg-sky-900 absolute rotate-[-180deg] flex items-center justify-center p-3 h-full right-0 top-0 text-rotated">
        <p>sales@confidepay.co.zw </p>
      </div>
    </section>
  )
}
