import React, {useContext,useState} from 'react'
import MessageContext from "../Context/MessageContext";
import '../index.css'
import { easeIn, easeOut, motion, AnimatePresence} from "motion/react"
import Header from './Header';


const MessagePanel = () => {
  const { setMessage }  = useContext(MessageContext);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");

  const handleInputChange = (e)=> {
      e.preventDefault();
      setInput(e.target.value);
    
  }
  const handleSend = (e) => {
    setLoading(true);
    setTimeout(() => {setLoading(false);

      setMessage(input)


    }


    , 1000);
     // 1 second loader

  };


  return (
    <div>
      <Header />
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col items-center justify-center min-h-[40vh]"
      >
        <div className="bg-white/90 shadow-xl rounded-2xl px-8 py-8 flex flex-col items-center w-[420px] max-w-full border border-blue-100">
          <motion.label
            whileHover={{ color: "#fbbf24", x: 2}}
            transition={{ type: "spring", stiffness: 180 }}
            className="text-blue-700 text-lg font-semibold uppercase tracking-wide mb-4"
            htmlFor="message"
          >
            Message
          </motion.label>
          <div className="flex flex-row items-center w-full gap-3">
            <motion.input
              whileFocus={{ scale: 1.03, boxShadow: "0 0 8px #ff944d" }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              type="text"
              placeholder="Your message goes here"
              onChange={(e) => { handleInputChange(e) }}
              className="px-5 py-2 rounded-full bg-gray-50 text-black outline-none focus:ring-2 focus:ring-orange-400 w-64 border border-gray-200 shadow-sm text-base"
            />
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 12px #3b82f6, 0 0 24px #2563eb, 0 0 48px #60a5fa" }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: "spring", stiffness: 400 }}
              type="submit"
              onClick={handleSend}
              disabled={loading}
              className="rounded-full bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold w-[90px] py-2 ml-2.5 shadow-md hover:from-blue-500 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              Send
            </motion.button>
            <AnimatePresence>
              {loading && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1, boxShadow: "0 0 12px #3b82f6, 0 0 24px #2563eb, 0 0 48px #60a5fa" }}
                  exit={{ opacity: 0, scale: 0.7 }}
                  transition={{ duration: 1 }}
                  className="ml-3"
                >
                  <div className="w-8 h-8 border-4 border-blue-400 border-t-transparent rounded-full animate-spin" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>



  )
}

export default MessagePanel

