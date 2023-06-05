"use client"
import Image from 'next/image'
import React from 'react'
import { useState } from "react";
import { motion } from "framer-motion";
import Link from 'next/link';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  const toggleHover = () => setIsHovered(!isHovered);

  const hoverStyles = {
    scale: 1.05,
    rotate: -5,
    transition: { duration: 0.2 },
  };

  return (
    <div className=' flex flex-row mx-[5vw] max-md:flex-col '>
        <div className=' overflow-hidden rounded-lg block my-auto transform -rotate-3'>
            <Image
            src={'/object1.png'}
            width={800}
            height={960}
            alt='cool gnowl'
            className=' w-[40vw] max-md:w-[90vw] rounded-lg object-cover transition hover:scale-105 duration-500'
            />
        </div>
        <div className=' flex flex-col mx-auto w-[60vw] max-md:w-[90vw] m-[1rem] ml-[4rem] max-md:ml-0'>
          <div className=''>
            <h1 className=' font-lora text-4xl sm:text-7xl text-[#3E6957]'>
              What is GNOWLS?
            </h1>
            <p className=' text-[#133629]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non velit in provident numquam laudantium, dolorum nostrum quo odit harum sequi reprehenderit rem sint! Quibusdam quo esse hic doloribus natus fuga.
            </p>
            <p className=' text-[#133629]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ea tenetur in, quae voluptate enim temporibus aut, iure et, possimus delectus! At, reiciendis amet sed similique maxime excepturi. Et, dicta.
            </p>
            <p className=' text-[#133629]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati inventore iure soluta ipsam! Ratione repellendus aut deleniti dolorum, error, temporibus et, quas corporis consectetur voluptas minima. Tempore placeat non cumque!
            </p>
          </div>
          <div className=' flex flex-row max-md:flex-col w-full gap-[4rem] my-[2rem] max-md:gap-[1rem] justify-center'>
            <motion.button
              onMouseEnter={toggleHover}
              onMouseLeave={toggleHover}
              whileHover={hoverStyles}
              whileTap={{ scale: 0.9 }}
              className="bg-[#3E6957] hover:bg-[#133629] text-[#E9E7DC] font-bold py-2 px-4 hover:text-[#E9E7DC]  rounded-lg "
            >
              <div className="relative">
                <div className="relative z-10">{isHovered ? "Join The Crew" : "Buy some Gnowls"}</div>
              </div>
            </motion.button>
            <Link
              className="group relative inline-flex  bg-[#3E6957]/30 hover:bg-[#3E6957]/60 items-center overflow-hidden rounded-lg border border-current px-8 py-3 text-[#133629]  "
              href="#"
            >
              <span className="absolute -end-full transition-all group-hover:end-4">
                <svg
                  className="h-5 w-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>

              <span className="text-sm font-medium transition-all group-hover:me-4">
                Go to Docs
              </span>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Hero