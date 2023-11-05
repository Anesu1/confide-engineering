// Import Swiper React components
"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { FreeMode, Pagination, Navigation, Autoplay } from 'swiper/modules';
import GalleryItem from './galleryitem';
import { useState } from 'react';




export default function Carousel({list}) {
  const [count, setCount] = useState(1);
  return (
    <Swiper
    slidesPerView={1}
    spaceBetween={15}
   
    loop
    navigation={true}
    speed={3000}
    autoplay={{
       delay: 10,
       disableOnInteraction: false,
    }}
    onSlideChange={(swiper) => {
       if (count === 5) {
         setCount(1);
         swiper.autoplay.stop();
         setTimeout(() => {
           swiper.autoplay.start();
         }, 5000);
       } else {
         setCount((prev) => prev + 1);
       }
    }}
    modules={[FreeMode, Pagination, Navigation, Autoplay]}
    className="mySwiper py-[10%]"
    breakpoints={{
        576: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView:3,
        },
        1200: {
          slidesPerView:5,
        },

      }}
      >
        {list.map((item, i)=>{
            return <SwiperSlide key={i} className='m-auto'>
            <GalleryItem imageUrl={item.imageUrl} bgColor={item.bgColor} />
        </SwiperSlide>
        })}
       
        
      </Swiper>
  )
}




