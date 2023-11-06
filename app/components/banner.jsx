import Link from 'next/link'
import React from 'react'
import CustomButton from './buttons/custombutton'
import Image from 'next/image'
import { productSansBold } from '../font/font'

function Banner() {
  return (
    <section className={` bg-[url("/images/hero.webp")] h-[100vh] bg-cover bg-center text-white p-[5%] flex justify-end flex-col pb-[20vh] relative`}>
        <h1 className={` ${productSansBold.className} text-3xl md:text-4xl lg:text-5xl mb-3 z-20 font-avenir`}>With Our Service, We Make Friends</h1>
        <h1 className={` ${productSansBold.className} text-3xl md:text-4xl lg:text-5xl mb-5 z-20`}>With Our Quality We Keep Them</h1>
        <div className="text-white h-max bg-sky-900 absolute rotate-[-180deg] flex items-center justify-center p-3 py-10 top-[50%] translate-y-[-50%] right-0 text-rotated">
        <p>sales@confideengineering.co.zw</p>
      </div>
        <CustomButton  text="Learn more" url="#second" />
        <Image height={100} width={100} src="/images/lines.png" alt="" className='absolute w-full h-full z-[1] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' />
    </section>
  )
}

export default Banner