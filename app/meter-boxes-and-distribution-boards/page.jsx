import React from "react";
import BannerComponent from "../components/bannercomponent";
import WhoWeAre from "../components/secondcomponent";
import SecondComponent from "../components/secondcomponent";
import Paragraph from "../components/styled/paragraph";
import Carousel from "../components/styled/carousel";
import CustomButton from "../components/buttons/custombutton";
import Image from "next/image";
import { productSansBold } from "../font/font";

const list = [
  {
      imageUrl:"meter-boxes/item1.webp",
      bgColor:"#ffffff"
  },
  {
      imageUrl:"meter-boxes/item2.webp",
      bgColor:"#ffffff"
  },
  {
      imageUrl:"meter-boxes/item3.webp",
      bgColor:"#ffffff"
  },
  {
      imageUrl:"meter-boxes/item4.webp",
      bgColor:"#ffffff"
  },
  {
      imageUrl:"meter-boxes/item5.webp",
      bgColor:"#ffffff"
  },
  {
      imageUrl:"meter-boxes/item6.webp",
      bgColor:"#ffffff"
  },
  {
      imageUrl:"meter-boxes/item7.webp",
      bgColor:"#ffffff"
  },
]

export default function HospitalEquipment() {
  return (
    <div>
      
      <section
        className={` h-[100vh] bg-[linear-gradient(to_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url("/images/meter-boxes/item1.webp")] bg-contain bg-center text-white p-[5%] flex justify-end flex-col pb-[20vh] relative`}
      >
        <h1
          className={`${productSansBold.className} text-3xl md:text-4xl lg:text-6xl mb-3 z-20`}
        >
          Meter Boxes &
        </h1>
        <h1
          className={`${productSansBold.className} text-3xl md:text-4xl lg:text-6xl mb-5 z-20`}
        >
          Distribution Boards
        </h1>
        <div className="text-white h-max bg-sky-900 absolute rotate-[-180deg] flex items-center justify-center p-3 py-10 top-[50%] translate-y-[-50%] right-0 text-rotated">
          <p>sales@confidepay.co.zw</p>
        </div>
        <CustomButton text="Learn more" url='#rest' />
        <Image
          height={100}
          width={100}
          src="/images/lines.png"
          alt=""
          className="absolute w-full h-full z-[1] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        />
      </section>
      <SecondComponent middle="Meter Boxes & Distribution Boards">
        <Paragraph>
          We manufacture and supply high-quality meter boxes and distribution
          boards for residential, commercial, and industrial applications. Our
          products are made from durable materials and designed to meet safety
          standards and regulations. We also offer custom solutions to meet
          specific requirements.
        </Paragraph>

        <Paragraph>
          We also provide secure fencing solutions including palisade fencing,
          diamond mesh fencing, and razor wire installations to protect your
          property and electrical infrastructure.
        </Paragraph>
      </SecondComponent>
      <Carousel list={list} />
    </div>
  );
}
