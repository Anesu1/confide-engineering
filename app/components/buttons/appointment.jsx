"use client"
import Link from 'next/link'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

export default function AppointmentButton() {
  return (
    <Link href="/" className='flex bg-sky-800 text-white py-3 px-5 items-center md:px-10'>
      Appointment <BsArrowRight className='ml-3' />
    </Link>
  )
}
