import React from "react";
import BannerComponent from "../components/bannercomponent";
import WhoWeAre from "../components/secondcomponent";
import SecondComponent from "../components/secondcomponent";
import Paragraph from "../components/styled/paragraph";

export default function GeneralHardwareSupplies() {
  return (
    <div>
      <BannerComponent
        imageUrl="gsh/banner.webp"
        text="General"
        text1="Hardware Supplies"
        link="#rest"
      />
      <SecondComponent middle="General Hardware Supplies">
        <Paragraph>
        Steel, window frames, doors, door frames, Timber, tools, Electricals, Tools, Paint.
        </Paragraph>
      </SecondComponent>
    </div>
  );
}
