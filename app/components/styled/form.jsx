"use client";
import React from "react";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { sendEmail } from "../../lib/send-email";
import { useForm } from "react-hook-form";



export default function Form() {
 const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      contactNumber: "",
      subject: "",
      message: "",
    }
 });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function onSubmit(data) {
    sendEmail(data, setLoading, setIsSuccess, setMessage);
  }

  useEffect(() => {
    let timer;
    if (isSuccess) {
      timer = setTimeout(() => {
        setIsSuccess(false);
        setMessage("");
        reset();
      }, 5000);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [isSuccess, reset]);

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`font-avenir mt-5 md:flex md:flex-wrap gap-3 justify-between`}
      >
        <div className="uppercase md:w-[49%] lg:w-[40.5%]">
          <TextField
            className="w-full  bg-[#F2F2F2] mb-5"
            id="username"
            label="Name"
            variant="standard"
            {...register("fullName", { required: true })}
          />
          <TextField
            className="w-full  bg-[#F2F2F2] mb-5"
            id="email"
            type="email"
            {...register("email", { required: true })}
            label="Example@mail.com"
            variant="standard"
          />
          <TextField
            className="w-full  bg-[#F2F2F2] mb-5"
            id="contact-number"
            {...register("contactNumber", { required: true })}
            label="contact number"
            variant="standard"
          />
        </div>
        <div className="uppercase md:w-[49%] lg:w-[58%]">
          <TextField
            className="w-full  bg-[#F2F2F2] mb-5"
            id="filled-basicw"
            label="Subject"
            {...register("subject", { required: true })}
            variant="standard"
          />
          <TextField
            id="filled-multiline-static"
            className="w-full bg-[#F2F2F2] mb-5"
            label="Message"
            multiline
            {...register("message", { required: true })}
            rows={7}
            variant="filled"
          />
        </div>

        <button
          type="submit"
          className="bg-[#005180] text-white h-[50px] text-center w-full flex items-center
          justify-center"
        >
          {loading ? (
            <div className="loading-button"></div>
          ) : isSuccess ? (
            "Success"
          ) : (
            "Submit"
          )}
        </button>
        {message && <p className="text-primary font-primary">Message Sent</p>}
      </form>
    </>
  );
}
