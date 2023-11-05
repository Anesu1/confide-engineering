import React from "react";
import BannerComponent from "../components/bannercomponent";
import WhoWeAre from "../components/secondcomponent";
import SecondComponent from "../components/secondcomponent";
import Paragraph from "../components/styled/paragraph";
import Carousel from "../components/styled/carousel";

const list = [
  {
      imageUrl:"Catering/_MG_0042 copy.webp",
      bgColor:"#ffffff"
  },
  {
      imageUrl:"Catering/_MG_1911.webp",
      bgColor:"#ffffff"
  },
  {
      imageUrl:"Catering/[000431].webp",
      bgColor:"#ffffff"
  },
  {
      imageUrl:"Catering/8aa.webp",
      bgColor:"#ffffff"
  },
  {
      imageUrl:"Catering/26aa.webp",
      bgColor:"#ffffff"
  },
  {
      imageUrl:"Catering/BAIN003.webp",
      bgColor:"#ffffff"
  },
  {
      imageUrl:"Catering/Bendsaw blades.webp",
      bgColor:"#ffffff"
  },
  {
      imageUrl:"Catering/Blender.webp",
      bgColor:"#ffffff"
  },
  {
      imageUrl:"Catering/Burn Marie.webp",
      bgColor:"#ffffff"
  },
  {
      imageUrl:"Catering/Burn Mariee.webp",
      bgColor:"#ffffff"
  },
  {
      imageUrl:"Catering/CDB0003.webp",
      bgColor:"#ffffff"
  },
  {
      imageUrl:"Catering/Chaffing Dish.webp",
      bgColor:"#ffffff"
  },
  {
      imageUrl:"Catering/Chip Fryer Double.webp",
      bgColor:"#ffffff"
  },
  {
      imageUrl:"Catering/Chip Fryer Gas.webp",
      bgColor:"#ffffff"
  },
  {
      imageUrl:"Catering/Chip Fryer Single.webp",
      bgColor:"#ffffff"
  },
  {
      imageUrl:"Catering/Chip Warmer.webp",
      bgColor:"#ffffff"
  },
  {
      imageUrl:"Catering/CHIPFRYER.webp",
      bgColor:"#ffffff"
  },
  {
      imageUrl:"Catering/Chipper s.webp",
      bgColor:"#ffffff"
  },
  {
      imageUrl:"Catering/Chipper.webp",
      bgColor:"#ffffff"
  },
  {
      imageUrl:"Catering/Digital Scales.webp",
      bgColor:"#ffffff"
  },
]

export default function HospitalEquipment() {
  return (
    <div>
      <BannerComponent
        imageUrl="catering-and-butcher/banner.webp"
        text="Catering Equipment,"
        text1="Industrial Kitchen & Butchery Equipment"
        link="/"
      />
      <SecondComponent middle="Catering & Industrial Kitchen & Butchery Equipment">
        <Paragraph>
          Platform trolleys, Coke Trolleys, Serving Trolleys, Order Picking
          Trolleys, Folding Trolleys, Sack Trolleys, Plate Rakes, Crockery
          Trolleys. We also repair the trolleys as well as stock spares like
          Castor Wheels
        </Paragraph>
      </SecondComponent>
      <Carousel list={list} />
    </div>
  );
}
