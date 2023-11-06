import React from "react";
import BannerComponent from "../components/bannercomponent";
import WhoWeAre from "./whoweare";
import MissionAndValues from "./missionandvalues";

export default function AboutPage() {
  return (
    <div>
      <BannerComponent imageUrl="about/banner.webp" text="About" text1="Confide Engineering" link="#second-about" />
      <WhoWeAre />
      <MissionAndValues />
    </div>
  );
}
