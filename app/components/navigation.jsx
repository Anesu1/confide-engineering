"use client"
import Link from "next/link";
import { React, useState, useEffect } from "react";
import AnimatedLink from "./navbar/animatedlink";
import { AnimatePresence, motion } from "framer-motion";
import MobileNavLink from "./navbar/mobilenavlink";
import MyDropdown from "./navbar/dropdown";
import Image from "next/image";

const navLinks = [
  { title: "What we do", href: "/" },
  { title: "How it works", href: "/" },
  { title: "Case studies", href: "/" },
  { title: "About", href: "/" },
  { title: "Contact", href: "/" },
];



const Navigation = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setOpen(false);
      } 
    };

    // Set the initial state
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Remove event listener on component cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="absolute w-full z-50 bg-transparent">
      <nav className="flex items-center justify-between px-3 py-4 md:px-5 md:py-10 lg:px-15 xl:px-20">
        <div className="">
          <Image
            height={100}
            width={250}
            src="/images/logo.png"
            alt="Confide Engineering Logo"
          />
        </div>
        <div className="lg:flex hidden gap-12 text-md text-white">
          <AnimatedLink
            onClick={() => setOpen(false)}
            link="/"
            title={"Home"}
          />
          <AnimatedLink
            onClick={() => setOpen(false)}
            link="/about"
            title={"About"}
          />

          <MyDropdown setIsOpen={setOpen} />
          <AnimatedLink
            onClick={() => setOpen(false)}
            link="#contact"
            title={"Contact"}
          />
          <span className=" px-3 rounded-[26px] border-2 border-white flex items-center translate-y-[-10px]">
            +263 ( 4 ) 331 307-8
          </span>
        </div>
        <div
          className="cursor-pointer lg:hidden text-lg text-white"
          onClick={toggleMenu}
        >
          Menu
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen origin-top bg-sky-900 text-white px-3 py-4 md:px-5 md:py-10 lg:px-20 lg:hidden"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-between">
                <h1 className="text-lg text-white font-semibold tracking-widest">
                  Confide Engineering
                </h1>
                <p
                  className="cursor-pointer text-lg text-white"
                  onClick={toggleMenu}
                >
                  Close
                </p>
              </div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center font-lora items-center gap-4 "
              >
                <div className="overflow-hidden">
                  <MobileNavLink
                    title="Home"
                    href="/"
                    onClick={() => setOpen(false)}
                  />
                </div>
                <div className="overflow-hidden">
                  <MobileNavLink
                    title="About"
                    href="/about"
                    onClick={() => setOpen(false)}
                  />
                </div>
                <MyDropdown setIsOpen={setOpen} />

                <div className="overflow-hidden">
                  <MobileNavLink
                    title="Contact"
                    href="#contact"
                    onClick={() => setOpen(false)}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navigation;


