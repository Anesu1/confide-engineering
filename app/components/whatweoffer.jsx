import React from 'react'
import Heading from './heading'
import Paragraph from './styled/paragraph'
import ServiceLink from './buttons/servicelink'

const list1 = [
   
    {
      pageUrl:"/",
      text:"Plasma Cutting",
      imageUrl:"/images/product1.png"
    },
    {
      pageUrl:"/",
      text:"Metal Sheet Rolling",
      imageUrl:"/images/product2.png"
    },
    
  ]

  const list2 = [
    {
      pageUrl:"/",
      text:"Metal Sheet Fabrication",
      imageUrl:"/images/product3.png"
    },
    {
      pageUrl:"/",
      text:"Metal Sheet Bending",
      imageUrl:"/images/product4.png"
    },
    {
      pageUrl:"/",
      text:"Round Tube Bending",
      imageUrl:"/images/product5.png"
    },
    {
      pageUrl:"/",
      text:"Palisade Fence Punching",
      imageUrl:"/images/product6.png"
    },
    {
      pageUrl:"/",
      text:"Spot Welding",
      imageUrl:"/images/product7.png"
    },
    {
      pageUrl:"/",
      text:"Notching",
      imageUrl:"/images/product8.png"
    },
    {
      pageUrl:"/",
      text:"Hole Punching on Metal Sheet (19mm, 25mm, 32mm, 38mm)",
      imageUrl:"/images/product9.png"
    },
    {
      pageUrl:"/",
      text:"Knockout Punching  (19mm, 25mm)",
      imageUrl:"/images/product10.png"
    },
  ]

export default function WhatWeOffer() {
  return (
    <section className='p-5 md:p-[5%]'>
      <div className="top lg:flex lg:justify-between">
        <div className="left">
            <Heading first="our" middle="What we offer" last="services" />
        </div>
        <div className="lg:w-[49.5%]">
            <Paragraph>Our extensive range of services exemplifies our unwavering commitment to excellence in metal fabrication and manufacturing. At Confide Engineering, we provide a diverse spectrum of services tailored to meet your precise needs. With our deep expertise and cutting-edge equipment, we deliver versatile solutions to address all your metalworking requirements.</Paragraph>
            <div className="mt-6 grid grid-cols-2 gap-x-3 gap-y-3 md:grid-cols-2 ">

{list1.map((item, i)=>{
  return   <ServiceLink key={i} imageUrl={item.imageUrl} pageUrl={item.pageUrl} text={item.text} />
})}
</div>
        </div>
      </div>
      <div className="bottom">
      <div className="mt-3 grid grid-cols-2 gap-x-3 gap-y-3 md:grid-cols-4 lg:grid-cols-4  ">

{list2.map((item, i)=>{
  return   <ServiceLink key={i} imageUrl={item.imageUrl} pageUrl={item.pageUrl} text={item.text} />
})}
</div>
      </div>
    </section>
  )
}
