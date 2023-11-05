import React from "react";
import BannerComponent from "../components/bannercomponent";
import WhoWeAre from "../components/secondcomponent";
import SecondComponent from "../components/secondcomponent";
import Paragraph from "../components/styled/paragraph";

export default function CommercialTrolleys() {
  return (
    <div>
      <BannerComponent
        imageUrl="about/banner.webp"
        text="Commercial Trolleys"
        text1=""
        link="/"
      />
      <SecondComponent middle="Commercial Trolleys">
        <Paragraph>
          Beds and Mattresses, Patient Benches, Staff and visitors Chairs, Step
          Stools, Medical Aid Boxes, Drug Trolleys, Patient Trolleys, Emergency
          Trolleys, Doctors and other Stools, Tables, Steel Cabinets, Stretcher
          Beds, Exam Couches, Gyno Couches, Delivery Beds etc
        </Paragraph>
      </SecondComponent>
    </div>
  );
}
