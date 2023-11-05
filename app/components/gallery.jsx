import Image from 'next/image'
import React from 'react'

export default function Gallery() {
  return (
    <div className="p-1 flex flex-wrap items-center justify-center">

   
    <div className="flex-shrink-0 m-6 relative overflow-hidden bg-[#005180] rounded-lg max-w-xs shadow-lg">
        <svg className="absolute bottom-0 left-0 mb-8 opacity-10" viewBox="0 0 375 283" fill="none"
            >
            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
        </svg>
        <div className="relative pt-10 px-10 flex items-center justify-center">
            <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                >
            </div>
            <Image height={100} width={100} className="relative w-40" src="/images/hi.png" alt="" />
        </div>
        <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">Outdoor</span>
            <div className="flex justify-between">
                <span className="block font-semibold text-xl">Oak Tree</span>
                <span className=" bg-white rounded-full text-[#005180] text-xs font-bold px-3 py-2 leading-none flex items-center">$68.50</span>
            </div>
        </div>
    </div>

    <div className="flex-shrink-0 m-6 relative overflow-hidden bg-[#00ADF1] rounded-lg max-w-xs shadow-lg">
        <svg className="absolute bottom-0 left-0 mb-8 opacity-10" viewBox="0 0 375 283" fill="none"
            >
            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
        </svg>
        <div className="relative pt-10 px-10 flex items-center justify-center">
            <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
               >
            </div>
            <Image height={100} width={100} className="relative w-40" src="/images/hi.png" alt="" />        </div>
        <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">Outdoor</span>
            <div className="flex justify-between">
                <span className="block font-semibold text-xl">Oak Tree</span>
                <span className=" bg-white rounded-full text-[#00ADF1] text-xs font-bold px-3 py-2 leading-none flex items-center">$68.50</span>
            </div>
        </div>
    </div>
    <div className="flex-shrink-0 m-6 relative overflow-hidden bg-[#005180] rounded-lg max-w-xs shadow-lg">
        <svg className="absolute bottom-0 left-0 mb-8 opacity-10" viewBox="0 0 375 283" fill="none"
            >
            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
        </svg>
        <div className="relative pt-10 px-10 flex items-center justify-center">
            <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                >
            </div>
            <Image height={100} width={100} className="relative w-40" src="/images/hi.png" alt="" />
        </div>
        <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">Outdoor</span>
            <div className="flex justify-between">
                <span className="block font-semibold text-xl">Oak Tree</span>
                <span className=" bg-white rounded-full text-[#005180] text-xs font-bold px-3 py-2 leading-none flex items-center">$68.50</span>
            </div>
        </div>
    </div>

    <div className="flex-shrink-0 m-6 relative overflow-hidden bg-[#00ADF1] rounded-lg max-w-xs shadow-lg">
        <svg className="absolute bottom-0 left-0 mb-8 opacity-10" viewBox="0 0 375 283" fill="none"
            >
            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
        </svg>
        <div className="relative pt-10 px-10 flex items-center justify-center">
            <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
               >
            </div>
            <Image height={100} width={100} className="relative w-40" src="/images/hi.png" alt="" />        </div>
        <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">Outdoor</span>
            <div className="flex justify-between">
                <span className="block font-semibold text-xl">Oak Tree</span>
                <span className=" bg-white rounded-full text-[#00ADF1] text-xs font-bold px-3 py-2 leading-none flex items-center">$68.50</span>
            </div>
        </div>
    </div>

    
    </div>
  )
}
