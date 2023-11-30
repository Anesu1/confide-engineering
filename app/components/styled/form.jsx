"use client"
import React from 'react'
import {useState} from "react"
import TextField from '@mui/material/TextField';
import { avenirNext, productSansBold } from '@/app/font/font';

import axios from "axios";


export default function Form() {
   const [isSubmitted, setIsSubmitted] = useState(false);
   const [isFailed, setIsFailed] = useState("");
   const [formData, setFormData] = useState({
     fullName: "",
     email: "",
     contactNumber:"",
     subject:"",
     message: "",
   });

   const handleInputChange = (event) => {
     const { name, value } = event.target;
     setFormData({ ...formData, [name]: value });
   };

   const handleSubmit = async (event) => {
     event.preventDefault();
     await axios.post(
        "https://formsubmit.co/a64be50d7a64fbe989df721fe6359a9e",
        formData
      ).then((res) => {
        console.log(res)
         console.log("Form submission successful:", response.data);
         setIsSubmitted(true);
         setTimeout(() => {
           setIsSubmitted(false);
           setFormData({
             fullName: "",
             email: "",
             contactNumber: "",
             subject: "",
             message: "",
           });
         }, 5000);
      }).catch((error) => {
        console.log(error)
        setIsFailed("Form submission failed");
        setTimeout(() => {
          setIsFailed("");
        }, 5000);
      })



    //  try {
    //    // Send form data to server or API endpoint
    //    const response = await axios.post(
    //      "https://formsubmit.co/a64be50d7a64fbe989df721fe6359a9e",
    //      formData
    //    );
    //    console.log("Form submission successful:", response.data);
    //    setIsSubmitted(true);
    //    setTimeout(() => {
    //      setIsSubmitted(false);
    //      setFormData({
    //        fullName: "",
    //        email: "",
    //        contactNumber: "",
    //        subject: "",
    //        message:""
    //      });
    //    }, 5000);
    //  } catch (error) {
    //   console.log(error)
    //    setIsFailed("Form submission failed");
    //    setTimeout(() => {
    //      setIsFailed("");
    //    }, 5000);
    //  }
   };
  return (
    <>
      <form
        method="POST"
        onSubmit={handleSubmit}
        className={`${avenirNext.className} mt-5 md:flex md:flex-wrap gap-3 justify-between`}
      >
        <div className="uppercase md:w-[49%] lg:w-[40.5%]">
          <TextField
            className="w-full  bg-[#F2F2F2] mb-5"
            id="username"
            label="Name"
            variant="standard"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
          />
          <TextField
            className="w-full  bg-[#F2F2F2] mb-5"
            id="email"
            type="email"
            name="email"
            label="Example@mail.com"
            value={formData.email}
            onChange={handleInputChange}
            variant="standard"
          />
          <TextField
            className="w-full  bg-[#F2F2F2] mb-5"
            id="contact-number"
            name="contactNumber"
            label="contact number"
            value={formData.contactNumber}
            onChange={handleInputChange}
            variant="standard"
          />
        </div>
        <div className="uppercase md:w-[49%] lg:w-[58%]">
          <TextField
            className="w-full  bg-[#F2F2F2] mb-5"
            id="filled-basicw"
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            variant="standard"
          />
          <TextField
            id="filled-multiline-static"
            className="w-full bg-[#F2F2F2] mb-5"
            label="Message"
            multiline
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={7}
            variant="filled"
          />
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-[#005180] text-white h-[50px] text-center w-full"
        >
          Send Message
        </button>
        {isSubmitted && (
        <div style={{ color: "green", marginTop: 20, textAlign: "center" }}>
          <p>Submitted successfully!</p>{" "}
        </div>
      )}
      <div style={{ color: "red", marginTop: 20, textAlign: "center" }}>
        <p>{isFailed}</p>
      </div>
      </form>
      
    </>
  );
}

