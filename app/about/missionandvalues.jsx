import Image from "next/image";
import React from "react";

export default function MissionAndValues() {
  return (
    <div className="md:flex md:gap-1 mb-1">
                    <Image height={100} width={100} className="relative w-[13%] max-w-[165px] hidden object-contain lg:block " src="/images/about/mission1.webp " alt="" /> 
      <div className="bg-[#00ADF1] text-white m-2 p-5 md:w-[40%] lg:m-0 max-w-[451px]" >
        <h3 className="text-2xl mb-5">Mission Statement</h3>
        <p className='text-md'>
          Our mission is to identify contemporary market needs, innovate and
          deliver quality engineering solutions for the local and the global
          marketplace.
        </p>
      </div>
      <Image height={100} width={100} className="relative object-contain w-[10%] max-w-[120px] hidden lg:block" src="/images/about/mission2.webp" alt="" />
      <Image height={100} width={100} className="relative object-contain w-[29%] max-w-[290px] hidden lg:block" src="/images/about/mission3.webp" alt="" />
      
      <div className="bg-[#00ADF1] text-white m-2 p-5 md:w-[30%] max-w-[223px] lg:m-0">
        <h3 className="text-2xl mb-5">Vision Statement</h3>
        <p className='text-md '>
          To make the world a better place by providing innovative products and
          utilities that enhances life
        </p>
      </div>
      <Image height={100} width={100} className="relative hidden max-w-[151px] object-contain lg:block w-[14%]" src="/images/about/mission4.webp" alt="" />
    </div>
  );
}
