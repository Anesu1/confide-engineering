import React from "react";
import SocialLinkFooter from "./buttons/sociallinkfooter";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";
import FooterLink from "./buttons/footerlink";
import { productSansBold } from "../font/font";
import LinkButton from "./buttons/LinkButton";

export default function Footer() {
  return (
    <footer className="lg:flex w-full justify-between">
      <div className="bg-[#0255A1] p-5 text-white md:p-[5%] lg:w-[562px]">
        <h5 className="uppercase text-sm mb-5">Call us today</h5>
        <p className={`${productSansBold.className} text-2xl mb-3`}>
          16 Ely Close Greencroft <br />
          Harare, Zimbabwe{" "}
        </p>
        <p className={`${productSansBold.className} text-2xl mb-3`}>
          Tel: +263 &#40; 242 &#41; 331 307-8 <br />
          Cell: +263 772 420 069 <br />
          Cell: +263 771 519 756
        </p>
        <p className="text-2xl mb-3">sales@confidepay.co.zw</p>
        <div className="flex">
          <SocialLinkFooter link="" >
            <AiOutlineTwitter />
          </SocialLinkFooter>
          <SocialLinkFooter link="/">
            <BsLinkedin />
          </SocialLinkFooter>
          <SocialLinkFooter link="/">
            <BiLogoFacebook />
          </SocialLinkFooter>
        </div>
      </div>
      <div className="right bg-[#00215B] text-white p-5 md:p-[5%] flex-1">
        <div className="top md:flex">
          <div className="md:w-1/3">
            <h3 className="text-2xl">Quick Links</h3>
            <ul className="mt-2 mb-4 flex flex-col">
              <FooterLink label="About Company" pageLink="/about" />
              <FooterLink label="Our Services" pageLink="#services" />
            </ul>
          </div>
          <div className="left">
            <h3 className="text-2xl">Our Products</h3>
            <ul>
              <FooterLink label="Hospital Equipment" pageLink="/hospital-equipment" />
              <FooterLink label="School and office Equipment" pageLink="/school-and-office-equipment" />
              <FooterLink label="Catering Equipment, Industrial Kitchen & Butchery Equipment" pageLink="/catering-kitchen-and-butcher" />
              <FooterLink label="Commercial Trolleys" pageLink="/commercial-trolleys" />
              <FooterLink label="General Hardware Supplies" pageLink="/general-hardware-supplies" />
              <FooterLink label="Fencing" pageLink="/fencing" />
            </ul>
          </div>
        </div>
        <div className="mt-10 text-sm md:flex justify-between">
          <p className="mb-2">Confide Engineering ©  All rights reserved 2025. </p>
          <p>Crafted with love by <LinkButton text="revixions" link="revixions.com" /> Team</p>
        </div>
      </div>
    </footer>
  );
}
