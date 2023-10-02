import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react"
import { AiOutlineRocket } from "react-icons/ai"
import { BiSolidChevronRight } from "react-icons/bi"

export const ButtonBackToTop = () => {
  const [visible, setVisible] = useState(false);
  window.addEventListener('scroll', (e) => {
    if (window.scrollY > 400) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  })
  return (
    <AnimatePresence>
      {
        visible && (
          <motion.button transition={{ duration: 0.4,type:'spring' }} initial={{ y: '-100vh', opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: '-100vh', opacity: 0 }} onClick={() => window.scrollTo(0, 0)}
            className={`fixed right-0 h-8 text-white flex top-[80%] items-center justify-center text-xl  w-8 rounded-full shadow-2  z-[50] bg-blue-500`}>
            <BiSolidChevronRight className="-rotate-90" />
          </motion.button>
        )
      }
    </AnimatePresence>
  )
}