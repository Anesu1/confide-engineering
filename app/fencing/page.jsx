import React from "react";
import BannerComponent from "../components/bannercomponent";
import WhoWeAre from "../components/secondcomponent";
import SecondComponent from "../components/secondcomponent";
import Paragraph from "../components/styled/paragraph";
import Carousel from "../components/styled/carousel";

const list = [
  {
      imageUrl:"hi.png",
      bgColor:"#00ADF1"
  },
  {
      imageUrl:"hi.png",
      bgColor:"#005180"
  },
  {
      imageUrl:"hi.png",
      bgColor:"#00ADF1"
  },
  {
      imageUrl:"hi.png",
      bgColor:"#005180"
  },
  {
      imageUrl:"hi.png",
      bgColor:"#00ADF1"
  },
  {
      imageUrl:"hi.png",
      bgColor:"#005180"
  },
]

export default function Fencing() {
  return (
    <div>
      <BannerComponent
        imageUrl="fencing/banner.webp"
        text="Fencing"
        text1=""
        link="#rest"
      />
      <SecondComponent middle="Fencing">
        <Paragraph>
          Confide Engineering is highly equipped with metal works machinery so
          much that our products are of high quality and standards. The
          following is the summary of equipment and what we are capable of
          producing machinery such as:
        </Paragraph>
        <Paragraph>
          Press brakes, Guillotines, Plasma Cutter, Knotcher, Jenny Machine,
          Hydraulic Pipe Bender, Compressors, Spot Welding Machines, Mita Saws,
          Sanding Machines, Pipe Benders, Plate Rollers, Planners, MIG and TIG
          Machines, Drilling, Grinding Machines etc.
        </Paragraph>
      </SecondComponent>
      <Carousel list={list} />
    </div>
  );
}
