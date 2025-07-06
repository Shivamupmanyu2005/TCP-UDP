import React, { useContext, useEffect, useState } from 'react'
import MessageContext from '../Context/MessageContext'
import { motion, AnimatePresence, easeOut } from "motion/react"
import { Send } from "react-feather"

const UDPPanel = () => {
  const [recieved, setRecieved] = useState(false)
  const [travel, setTravel] = useState(false)
  const { message } = useContext(MessageContext);
  const shouldDrop = Math.random() < 0.3

  useEffect(() => {

    if (message && !shouldDrop) {
      setRecieved(false);
      setTravel(true);
      setTimeout(() => {
        setRecieved(true);
        setTravel(false);
      }, 2000)
    } else {
      console.log("Packet is dropped");

    }
  }, [message])

  // Basic card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 60, borderRadius: "1000px" },
    visible: { opacity: 1, y: 0, borderRadius: "16px", transition: { duration: 0.7 } },
    hover: { scale: 1.03, transition: { duration: 0.3 } }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      className="w-96 bg-transparent rounded-2xl shadow-[0_0_15px_rgba(59,130,246,0.7),0_0_30px_rgba(59,130,246,0.4)] hover:shadow-[0_0_20px_rgba(59,130,246,0.8),0_0_35px_rgba(59,130,246,0.5)] p-8  flex flex-col items-start h-77 mb-48 ml-3 my-3"
    >
      <motion.h2 
      whileHover={{
         scale: 1.22,
            opacity: [0, 1],
            textShadow: "0 0 6px rgba(29, 78, 216, 0.8), 0 0 12px rgba(29, 78, 216, 0.6)"
      }}
      
      className="text-xl font-bold mb-4 text-blue-300 flex items-center gap-2">
        <motion.span
          whileHover={{
            rotate: [360, 0],
            scale: 1.22
          }}
          
          transition={{
              ease: easeOut,
              duration: 2
          }}

        > <Send size={22} className="text-blue-400 " /></motion.span> UDP Panel
      </motion.h2>
      <div className="flex flex-col gap-4 w-full items-start">
        <div className="flex items-center gap-2 py-12">
          <span className="font-semibold text-white">Sender:</span>
          <span className="text-white">{message}</span>
        </div>
        <AnimatePresence>
          {travel && (
            <motion.div
              key={message}
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: 70, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2 }}
              className="px-4 py-1 bg-blue-200 rounded-lg text-black shadow"
            >
              {message}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center gap-2 mt-4">
          <span className="font-semibold text-white">Receiver:</span>
          <span className="text-white">{recieved ? message : ''}</span>
        </div>
      </div>
    </motion.div>
  )
}

export default UDPPanel