import React from "react";
import BannerComponent from "../components/bannercomponent";
import SecondComponent from "../components/secondcomponent";
import Paragraph from "../components/styled/paragraph";
import Carousel from "../components/styled/carousel";

const list = [
  {
      imageUrl:"Office/_MG_1604 copy.webp",
      bgColor:"#ffffff"
  },
  {
      imageUrl:"Office/_MG_1605 copy.webp",
      bgColor:"#ffffff"
  },
  {
      imageUrl:"Office/_MG_1608 copy.webp",
      bgColor:"#ffffff"
  },
  {
      imageUrl:"Office/10aa.webp",
      bgColor:"#ffffff"
  },
  {
      imageUrl:"Office/Mop wringer trolley.webp",
      bgColor:"#ffffff"
  },
  {
      imageUrl:"Office/th0UGFYP6Y.webp",
      bgColor:"#ffffff"
  },
  {
      imageUrl:"School/40-654761fb1742a.webp",
      bgColor:"#ffffff"
  },
  {
      imageUrl:"School/examination-chair-654761fcebbf7.webp",
      bgColor:"#ffffff"
  },
  {
      imageUrl:"School/mg-2935-copy-654761edc553f.webp",
      bgColor:"#ffffff"
  },
  {
      imageUrl:"School/mg-2944-copy-654761edad01e.webp",
      bgColor:"#ffffff"
  },
  {
      imageUrl:"School/mg-4192-copy-654761f3052ae.webp",
      bgColor:"#ffffff"
  },
  {
      imageUrl:"School/mg-4225-copy-654761f40dd17.webp",
      bgColor:"#ffffff"
  },
  {
      imageUrl:"School/padded-chair-654761fec2dc4.webp",
      bgColor:"#ffffff"
  },
  {
      imageUrl:"School/school-desk-654761fed136d.webp",
      bgColor:"#ffffff"
  },
  {
      imageUrl:"School/see-saw-65476200023d1.webp",
      bgColor:"#ffffff"
  },
  {
      imageUrl:"School/single-combined-desk-crossed-65476203ba57c.webp",
      bgColor:"#ffffff"
  },
  {
      imageUrl:"School/swing edit 1 (1).webp",
      bgColor:"#ffffff"
  },
  {
      imageUrl:"School/teachers-desk-with-drawers-1-654762079249a.webp",
      bgColor:"#ffffff"
  },
  
  
]

export default function SchoolAndOfficeEquipment() {
  return (
    <div>
      <BannerComponent
        imageUrl="school-and-office/banner.webp"
        text="School &"
        text1="Office Equipment"
        link="/"
      />
      <SecondComponent middle="School & Office Equipment">
        <Paragraph>
          Desks, Chairs, Beds and Mattresses, Tables (office and students),
          Canteen tables, Student lockers, Filing cabinets, Secretarial chairs,
          Executive Chairs and Boardroom chairs, Office Furniture, Upholstery
        </Paragraph>
      </SecondComponent>
      <Carousel list={list} />
    </div>
  );
}
