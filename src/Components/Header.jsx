import React from 'react'
import { easeIn, easeOut, motion } from "motion/react"
import '../index.css'

const Header = () => {
  return (
    <div className='flex flex-row justify-center w-full pt-10'>
        
         <motion.h6
         
         whileHover={{
             textShadow: "0 0 16px #cf932d, 0 0 32px #ce842d, 0 0 8px #fce",
             
             scale: 1.02
         }}
         transition={{
          ease: easeIn
         }}

         className=' text-outline centered text-8xl pt-8 font-bold'>TCP/UDP VISUALISATION</motion.h6>
    </div>
  )
}

export default Header