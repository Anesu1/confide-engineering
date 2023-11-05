import React from "react";
import HeadingCaps from "./styled/headingcaps";
import Paragraph from "./styled/paragraph";
import GetQuote from "./buttons/getquote";

export default function SecondComponent({children, middle}) {
  return (
    <section className="p-5 md:p-[5%]">
      <div className="top lg:flex lg:justify-between lg:items-center gap-10">
        <div className="left">
          <HeadingCaps first="OUR" middle={middle} last="PRODUCTS" />
        </div>
        <div className="lg:w-[45%] flex flex-col gap-5">
          {children}
          <GetQuote />
        </div>
      </div>
    </section>
  );
}
