import React from "react";
import ProductLink from "./buttons/productlink";
import Heading from "./heading";

const list = [
  {
    pageUrl:"/hospital-equipment",
    text:"Hospital Equipment",
    imageUrl:"/images/hospital/banner.webp"
  },
  {
    pageUrl:"/school-and-office-equipment",
    text:"School & Office Equipment",
    imageUrl:"/images/school-and-office/banner.webp"
  },
  {
    pageUrl:"/catering-kitchen-and-butcher",
    text:"Catering, Industrial Kitchen & Butchery Equipment",
    imageUrl:"/images/catering-and-butcher/banner.webp"
  },
  
  {
    pageUrl:"/general-hardware-supplies",
    text:"General Hardware & Supplies",
    imageUrl:"/images/gsh/banner.webp"
  },
  {
    pageUrl:"/fencing",
    text:"Fencing",
    imageUrl:"/images/fencing/banner.webp"
  },
  {
    pageUrl:"/meter-boxes-and-distribution-boards",
    text:"Meter Boxes & Distribution Boards",
    imageUrl:"/images/meter-boxes/item3.webp"
  }
]

export default function WhatWeMake() {
  return (
    <section id="second" className="p-5 lg:p-[5%] ">
      
      <div className="flex justify-center">
        <Heading first="our" middle="What we make" last="products" />
      </div>
        
        
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">

    {list.map((item, i)=>{
      return   <ProductLink key={i} imageUrl={item.imageUrl} pageUrl={item.pageUrl} text={item.text} />
    })}
    </div>
       
    
    </section>
  );
}
