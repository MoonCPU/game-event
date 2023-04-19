import React from "react";
import { motion } from "framer-motion";

import Marquee from "react-fast-marquee";

import {SiLogitech, SiRepublicofgamers, SiRazer, SiIntel, SiNvidia} from 'react-icons/si'
import {FaDiscord} from 'react-icons/fa'

function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
    <div className="h-72 md:h-[640px] 2xl:h-[768px] w-full bg-[url('image-bg.jpg')] bg-cover text-white flex flex-col items-center justify-end">
      <div className="font-[Pixels] mb-16">
        <h1 className="text-center text-2xl sm:text-4xl ">WELCOME TO</h1>
        <h1 className="text-center text-6xl sm:text-8xl">MORDHAU</h1>        
      </div>

    </div>

      <Marquee 
      speed={80}
      loop={0}
      gradient={false}
      direction="right"
      pauseOnClick={true}
      className="bg-[#302C51] w-full py-6">
        <SiLogitech color="#A18CAB" className="h-24 sm:h-32 w-full px-5" />
        <SiRepublicofgamers color="#A18CAB" className="h-24 sm:h-32 w-full px-5" />
        <SiRazer color="#A18CAB" className="h-24 sm:h-32 w-full px-5" />
        <FaDiscord color="#A18CAB" className="h-24 sm:h-32 w-full px-5" />        
        <SiIntel color="#A18CAB" className="h-24 sm:h-32 w-full px-5" />        
        <SiNvidia color="#A18CAB" className="h-24 sm:h-32 w-full px-5" />        
      </Marquee>
      
      <div className="h-full w-full backdrop-blur-xl flex items-center justify-center bg-[url('image-bg-2.jpg')] bg-cover">
        <img src="group.png" alt="group" className="" />  
      </div>

    </div>
  )
}

export default Home