import React, { useContext, useEffect, useState } from 'react'
import MessageContext from '../Context/MessageContext'
import { easeIn, easeOut, motion, AnimatePresence, easeInOut } from "motion/react"
import { Server } from "react-feather"

const TCPPanel = () => {

  const [recieved, setRecieved] = useState(false)
  const [travel, setTravel] = useState(false)
  const [handshakeStep, setHandshakeStep] = useState(0);



  const { message } = useContext(MessageContext)

  useEffect(() => {

    if (message) {
      setTravel(false);
      setRecieved(false);

      // Step 1: SYN
      setHandshakeStep(1);
      setTimeout(() => {
        // Step 2: SYN-ACK
        setHandshakeStep(2);
        setTimeout(() => {
          // Step 3: ACK
          setHandshakeStep(3);

          // Start packet transmission after ACK
          setTravel(true);
          setTimeout(() => {
            setTravel(false);
            setRecieved(true);
          }, 2000);

        }, 1000);
      }, 1000);
    }



  }, [message])

  // Animation variants for scroll effect
  const cardVariants = {
    hidden: { opacity: 0, y: 60, skewX: 26, skewY: 66, borderRadius: "1000px" },
    visible: {
      opacity: 1,
      y: 0,
      skewX: 0,
      skewY: 0,
      borderRadius: "16px",
      transition: { duration: 0.7, ease: easeOut }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{
        scale: 1.02
      }}


      className='bg-transparent w-102  shadow-[0_0_15px_rgba(34,197,94,0.7),0_0_30px_rgba(34,197,94,0.4)]'
    >
      <div className="w-91 bg-transparent rounded-xl shadow-lg p-8 py-12 m-8 flex flex-col items-start">
        <motion.h2

          whileHover={{
            scale: 1.22,
            opacity: [0, 1],
            textShadow: "0 0 6px rgba(29, 78, 216, 0.8), 0 0 12px rgba(29, 78, 216, 0.6)"
          }}



          className="text-2xl font-bold mb-6 text-blue-300 flex items-center gap-2">
          <motion.span
            whileHover={{
              rotate: [360, 0],
              scale: 1.22
            }}

            transition={{
              ease: easeOut,
              duration: 2
            }}

            className="bg-blue-100 p-2  text-blue-700 rounded-full"><Server size={24} /></motion.span>
          TCP Panel
        </motion.h2>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white">Sender:</span>
            <span className="text-white">{message}</span>
          </div>
          <AnimatePresence>
            {travel && (
              <motion.div
                key={message}
                initial={{ x: 0, opacity: 1 }}
                animate={{ y: 110, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2, ease: easeOut }}
                className=" px-2 py-2 bg-blue-300 rounded-lg text-black shadow"
              >
                {message}
              </motion.div>
            )}
          </AnimatePresence>
          <div className="flex flex-col gap-2 mt-2">
            {handshakeStep === 1 && (
              <motion.div
                animate={{
                  scale: 1.2,
                  boxShadow: "0 4px 6px 1px rgba(255, 193, 7, 0.7), 0 2px 4px 2px rgba(255, 193, 7, 0.6)",
                  opacity: [0, 1]
                }}

                transition={{
                  ease: easeInOut
                }}


                className="px-2 py-1 bg-yellow-300 rounded text-sm font-medium shadow flex justify-center">
                SYN → <motion.span
                  animate={
                    handshakeStep === 1
                      ? { rotate: 360, color: "#f59e42" }
                      : handshakeStep === 2
                        ? { scale: 1.3, color: "#2563eb" }
                        : handshakeStep === 3
                          ? { y: [0, -10, 0], color: "#22c55e" }
                          : {}
                  }
                  transition={{ duration: 0.7, repeat: handshakeStep === 3 ? Infinity : 0, repeatType: "loop" }}

                > <Server className='py-0.5 ml-1.5' /> </motion.span>
              </motion.div>
            )}
            {handshakeStep === 2 && (
              <motion.div
                animate={{
                  scale: 1.2,
                  boxShadow: "0 0 12px #3b82f6, 0 0 24px #2563eb, 0 0 48px #60a5fa",
                  opacity: [0, 1],
                }}
                transition={{
                  ease: easeInOut
                }}


                className="px-2 py-1 bg-blue-400 rounded text-sm font-medium shadow flex justify-center">
                SYN-ACK ← <motion.span
                  animate={
                    handshakeStep === 1
                      ? { rotate: 360, color: "#f59e42" }
                      : handshakeStep === 2
                        ? { scale: 1.3, color: "#2563eb" }
                        : handshakeStep === 3
                          ? { y: [0, -10, 0], color: "#22c55e" }
                          : {}
                  }
                  transition={{ duration: 0.7, repeat: handshakeStep === 3 ? Infinity : 0, repeatType: "loop" }}

                > <Server className='py-0.5 ml-1.5' /> </motion.span>
              </motion.div>
            )}
            {handshakeStep === 3 && (
              <motion.div
                animate={{
                  scale: 1.02,
                  opacity: [0, 1],
                  boxShadow: "4px 4px 12px rgba(0, 0, 0, 0.15), -2px -2px 8px rgba(255, 255, 255, 0.6)"


                }}
                className="px-2 py-1 bg-green-300 rounded text-sm font-medium shadow flex justify-center">
                ACK →<motion.span
                  animate={
                    handshakeStep === 1
                      ? { rotate: 360, color: "#f59e42" }
                      : handshakeStep === 2
                        ? { scale: 1.3, color: "#2563eb" }
                        : handshakeStep === 3
                          ? { y: [0, -3, 0], color: "#22c55e" }
                          : {}
                  }
                  transition={{ duration: 0.7, repeat: handshakeStep === 3 ? Infinity : 0, repeatType: "loop" }}

                > <Server className='py-0.5 ml-1.5' /> </motion.span>
              </motion.div>
            )}
          </div>
          <div className="flex items-center gap-2 mt-4">
            <span className="font-semibold text-white">Receiver:</span>
            <span className="text-white">{recieved ? message : ''}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default TCPPanel