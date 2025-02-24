"use client";
import React from "react";
import Form from "./styled/form";
import { productSansBold } from "../font/font";


export default function Contact() {
  
  return (
    <section id="contact" className="p-5 md:p-[5%]">
      <h3 className={` ${productSansBold.className} text-3xl pb-2`}>Have a project in mind?</h3>
      <p className="font-light">
        For inquiries or to discuss your container needs, please reach out to
        our dedicated team at Confide Engineering. Let&apos;s collaborate to bring your vision to life. Contact us
        today!
      </p>
      <Form />
    </section>
  );
}
