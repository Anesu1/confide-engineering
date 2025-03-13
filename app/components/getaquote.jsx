import React from 'react';
import AppointmentButton from './buttons/appointment';
import Viewmap from './buttons/viewmap';
import SocialLink from './buttons/sociallink';
import {  BsLinkedin } from 'react-icons/bs';
import { BiLogoFacebook} from "react-icons/bi";
import { productSansBold, productSansRegular } from '../font/font';

export default function GetAQuote() {
  return (
    <section className="bg-[url('/images/pic1.webp')] bg-cover bg-center p-[5%] relative pb-[250px] md:pb-[200px] md:pt-[100px] lg:pt-[190px] lg:pb-[250px]">
      <div className="max-w-[900px] m-auto text-white  text-left flex justify-center items-center flex-col ">
        <h2
          className={`${productSansBold.className} text-2xl md:text-4xl lg:leading-[60px] lg:text-5xl `}
        >
          Our clientele comprises hospitals, educational institutions,
          corporations, contractors, individual consumers, municipal entities,
          and government agencies.
        </h2>
      </div>
      <div
        className={`${productSansRegular.className} absolute bottom-0 left-0 bg-sky-800 w-full text-white p-5 lg:px-[5%] lg:flex lg:justify-between lg:items-center`}
      >
        <p>
          No.5 Lustleigh Industrial Site, <br />
          Bonongwe, Marondera Rural - <Viewmap />
        </p>
        <div className="md:flex md:items-center gap-x-10 md:mt-3 lg:m-0">
          <p className="mt-3 mb-3">sales@confidepay.co.zw</p>
          <div className="flex items-center">
            <span>follow us on</span>
            <SocialLink link="/">
              <BiLogoFacebook />
            </SocialLink>
            <SocialLink link="/">
              <BsLinkedin />
            </SocialLink>
          </div>
        </div>
      </div>
    </section>
  );
}
