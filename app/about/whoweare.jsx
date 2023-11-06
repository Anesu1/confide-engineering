import React from "react";
import Heading from "../components/heading";
import Paragraph from "../components/styled/paragraph";

export default function WhoWeAre() {
  return (
    <section id="about-second" className="p-5 md:p-[5%]">
      <div className="top lg:flex lg:justify-between lg:items-center">
        <div className="left">
          <Heading first="who" middle="A few words about us" last="we are" />
        </div>
        <div className="lg:w-[49.5%] flex flex-col gap-5">
          <Paragraph>
            The organization has achieved prominence as a leading manufacturer
            and supplier in various sectors, encompassing medical equipment,
            catering equipment, butchery equipment, bakery equipment, and
            commercial trolleys. Additionally, we are involved in the production
            of school and office furniture. Our core strengths lie in welding
            and metal fabrication. Simultaneously, our hardware division offers
            an extensive array of products, including window frames, door
            frames, paint, and related items.
          </Paragraph>
          <Paragraph>
            Confide Engineering stands as a recognized and respected brand, with
            a broad customer base spanning diverse industries and geographic
            regions. 
          </Paragraph>
          <Paragraph>
            We take great pride in the superior quality of our products, all of
            which adhere to stringent international standards.
          </Paragraph>
        </div>
      </div>
    </section>
  );
}
