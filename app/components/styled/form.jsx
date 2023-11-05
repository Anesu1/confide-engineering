"use client"
import React from 'react'
import TextField from '@mui/material/TextField';
import { avenirNext, productSansBold } from '@/app/font/font';


export default function Form() {
  return (
    <form action="" className={`${ avenirNext.className } mt-5 md:flex md:flex-wrap gap-3 justify-between`}>
      
        <div className="uppercase md:w-[49%] lg:w-[40.5%]">
                    <TextField className='w-full  bg-[#F2F2F2] mb-5' id="username" label="Name" variant="standard" />
                    <TextField className='w-full  bg-[#F2F2F2] mb-5' id="email" type="email" label="Example@mail.com" variant="standard" />
                    <TextField className='w-full  bg-[#F2F2F2] mb-5' id="contact-number" label="contact number" variant="standard" />
                    
                </div>
                <div className="uppercase md:w-[49%] lg:w-[58%]">
                <TextField className='w-full  bg-[#F2F2F2] mb-5' id="filled-basicw" label="Name" variant="standard" />
                <TextField
                  id="filled-multiline-static"
                  className='w-full bg-[#F2F2F2] mb-5'
                  label="Message"
                  multiline
                  rows={7}
                  variant="filled"
                />
                </div>
     
        
        <button className='bg-[#005180] text-white h-[50px] text-center w-full'>Send Message</button>
    </form>
  )
}

