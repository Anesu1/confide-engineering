import Image from 'next/image';
import React from 'react';

export default function GalleryItem({bgColor, imageUrl}) {
  return (
    <div className={`flex-shrink-0 relative overflow-hidden bg-[${bgColor}] rounded-lg max-w-xs shadow-md m-auto flex-col justify-center mt-auto pb-10 h-[350px] flex items-center`}>
        <svg className="absolute bottom-0 left-0 mb-8 opacity-10" viewBox="0 0 375 283" fill="none"
            >
            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
        </svg>
        <div className="relative pt-10 px-10 flex items-center justify-center">
            <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
               >
            </div>
            <Image height={100} width={600} className="relative w-full m-auto block" src={`/images/${imageUrl}`} alt="" />        </div>
       
    </div>
  )
}
