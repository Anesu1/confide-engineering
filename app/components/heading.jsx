import React from 'react';
import { productSansBold } from '../font/font';

export default function Heading({first, middle, last}) {
  return (
    <div className='mb-5'>
      
          <h2 className={`${productSansBold.className} lg:text-[100px] xl:text-[130px]`}>{first}</h2>
          <h5 className={`${productSansBold.className} text-2xl md:text-4xl translate-y-3`}>{middle}</h5>
          <h2 className={`${productSansBold.className} lg:text-[100px] xl:text-[130px]`}>{last}</h2>
    </div>
  )
}
