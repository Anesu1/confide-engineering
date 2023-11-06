'use client';
import {useState} from "react";
import Link from 'next/link';
import { BsChevronDown } from "react-icons/bs";
import { motion } from "framer-motion";

const mobile = {
  initial: {
    y: "0",
    opacity:0,
    transition: {
      duration: 1,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    opacity:1,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 1,
    },
  },
};



const list = [
  {
    link:"/hospital-equipment",
    text:"Hospital Equipment"
  },
  {
    link:"/school-and-office-equipment",
    text:"School and Office Equipment"
  },
  {
    link:"/catering-kitchen-and-butcher",
    text:"Catering & Butcher Equipment"
  },
  {
    link:"/commercial-trolleys",
    text:"Commercial Trolleys"
  },
  {
    link:"/fencing",
    text:"Fencing"
  },
  {
    link:"/general-hardware-supplies",
    text:"General Hardware Supplies"
  },
]


        

export default function MyDropdown({setIsOpen}) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div variants={mobile} className={open ? "w-max" : "w-max overflow-hidden transition"}>
        <span className="flex items-center uppercase justify-center pb-3 lg:capitalize" onClick={()=> setOpen(!open)}>Our Products <BsChevronDown className={open ? "ml-3 rotate-180 transition-all" : "ml-3 transition-all"} /></span>
        <div className={open ? "max-h-[900px] text-black bg-white flex flex-col rounded transition dropthing" : "transition text-black bg-white relative flex flex-col rounded h-auto max-h-0 dropthing"}>
            {list.map((item, i)=>{
              return <Link onClick={() => {
                setOpen(false);
                setIsOpen(false);
              }} key={i} className="block py-3 px-7 transition hover:bg-gray-400 cursor-pointer" href={item.link}>{item.text}</Link>
            })}
            
            
        </div>
    </motion.div>
  )
}


