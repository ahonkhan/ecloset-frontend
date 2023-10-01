import React, { useEffect, useState } from 'react'
import './LoadingPage.scss';
import { AnimatePresence, motion } from 'framer-motion';
const LoadingPage = () => {
    const [loadingPage, setLoadingPage] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoadingPage(false);
        }, 3000)
    }, [])
    return (
        <AnimatePresence>
            {loadingPage &&
                (
                    <motion.section initial={{ y: 0, opacity: 1 }} animate={{ y: 0, opacity: 1 }} exit={{ y: '-100vh', opacity: 0 }} className='fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-orange-400 z-[1000]'>
                        <div class="bounce2 bounce"></div>

                    </motion.section>
                )
            }
        </AnimatePresence>
    )
}

export default LoadingPage