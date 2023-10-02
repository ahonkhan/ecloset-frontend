import React, { useContext } from 'react'
import { IoMdAdd } from 'react-icons/io'
import { MdClose, MdOutlineCancel } from 'react-icons/md'
import { AnimatePresence, motion } from 'framer-motion'
export const DefaultModal = ({ setModalStatus, modalStatus, children }) => {
    return (

        <div className="modal-area flex items-center justify-center w-screen h-screen fixed bg-black top-0 left-0 z-[500] bg-opacity-50">
            <AnimatePresence>

                <motion.div initial={{ y: '-50vh', opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: '-40vh', opacity: 0 }} className="relative w-full sm:w-[500px]  md:w-[600px] ">
                    <div className="absolute top-0 -translate-x-2 translate-y-2 sm:translate-x-3 sm:-translate-y-2 right-0 z-[10]">
                        <button onClick={() => { setModalStatus(false); document.querySelector('body').classList.remove('overflow-hidden') }} className='text-xl bg-slate-800 text-white w-7 h-7 flex items-center justify-center rounded-full'><MdClose /></button>
                    </div>
                    <div style={{ 'scrollbarWidth': 'thin' }} className="modal-wrapper  font-WorkSans select-text px-4 py-8 h-screen  overflow-y-auto sm:overflow-y-auto sm:h-[70vh]  md:h-[70vh] md:max-h-[600px] bg-white rounded-md">
                        {children}
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

