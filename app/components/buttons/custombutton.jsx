"use client"
import { productSansRegular } from '@/app/font/font';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {BsArrowDown} from "react-icons/bs";

const CustomButton = ({text, url}) => {
    return(
    <Link href={url} className={`${productSansRegular.className} box text-white text-2xl flex items-center cursor-pointer z-20 w-max`}>{text} <BsArrowDown className='border rounded-[50%] border-white ml-2 text-white h-[35px] w-[35px] text-2xl p-[10px]' /></Link>
    );
};

export default CustomButton;
