import React from "react";
import BannerComponent from "../components/bannercomponent";
import WhoWeAre from "../components/secondcomponent";
import SecondComponent from "../components/secondcomponent";
import Paragraph from "../components/styled/paragraph";
import Carousel from "../components/styled/carousel";

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
      <BannerComponent
        imageUrl="meter-boxes/banner.webp"
        text="Meter Boxes &"
        text1="Distribution Boards"
        link="#rest"
      />
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
