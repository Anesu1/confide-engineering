import React from "react";
import BannerComponent from "../components/bannercomponent";
import WhoWeAre from "../components/secondcomponent";
import SecondComponent from "../components/secondcomponent";
import Paragraph from "../components/styled/paragraph";
import Carousel from "../components/styled/carousel";

const list = [
  {
      imageUrl:"hospital/_MG_00461.webp",
      bgColor:"#ffffff"
  },
  {
      imageUrl:"hospital/_MG_1914.webp",
      bgColor:"#ffffff"
  },
  {
      imageUrl:"hospital/5aa.webp",
      bgColor:"#ffffff"
  },
  {
      imageUrl:"hospital/11aa.webp",
      bgColor:"#ffffff"
  },
  {
      imageUrl:"hospital/12aa.webp",
      bgColor:"#ffffff"
  },
  {
      imageUrl:"hospital/13aa.webp",
      bgColor:"#ffffff"
  },
  {
      imageUrl:"hospital/26aa.webp",
      bgColor:"#ffffff"
  },
  {
      imageUrl:"hospital/2001.webp",
      bgColor:"#ffffff"
  },
  {
      imageUrl:"hospital/2006.webp",
      bgColor:"#ffffff"
  },
  {
      imageUrl:"hospital/commode.webp",
      bgColor:"#ffffff"
  },
  {
      imageUrl:"hospital/Instrument trolley small.webp",
      bgColor:"#ffffff"
  },
  {
      imageUrl:"hospital/Lockable Drug Trolley.webp",
      bgColor:"#ffffff"
  },
  {
      imageUrl:"hospital/single step stool.webp",
      bgColor:"#ffffff"
  },
  {
      imageUrl:"hospital/stretcher bed (2).webp",
      bgColor:"#ffffff"
  },
]

export default function HospitalEquipment() {
  return (
    <div>
      <BannerComponent
        imageUrl="hospital/banner.webp"
        text="Hospital"
        text1="Equipment"
        link="#rest"
      />
      <SecondComponent middle="Hospital Equipment">
        <Paragraph>
          Beds and Mattresses, Patient Benches, Staff and visitors Chairs, Step
          Stools, Medical Aid Boxes, Drug Trolleys, Patient Trolleys, Emergency
          Trolleys, Doctors and other Stools, Tables, Steel Cabinets, Stretcher
          Beds, Exam Couches, Gyno Couches, Delivery Beds etc
        </Paragraph>
      </SecondComponent>
      <Carousel list={list} />
    </div>
  );
}
