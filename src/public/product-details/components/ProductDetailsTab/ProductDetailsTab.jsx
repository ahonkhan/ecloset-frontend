import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react'
import DescriptionTab from './DescriptionTab';
import ReviewsTab from './ReviewsTab';

const ProductDetailsTab = () => {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = ['Description', 'Reviews']
    return (
        <section className='mt-8 lg:mt-16 site-container'>

            <div className="heading  relative after:content-[''] after:absolute after:w-[100%] after:bottom-0 after:z-[10] after:h-[2px] after:left-0 after:bg-gray-200  ">
                <div className="flex gap-3">
                    {
                        tabs.map((item, index) =>
                            <button onClick={() => setActiveTab(index)} className={`${activeTab == index ? 'text-darkBlue after:content-[""] after:absolute after:w-[65%] after:bottom-0 after:z-[10] after:h-[2px] after:left-0 after:bg-LightBlue z-[20]' : 'text-gray-800'} text-base md:text-xl py-4 tracking-wide font-Literata relative `}>{item}</button>
                        )
                    }
                </div>
            </div>


            {activeTab === 0 && (
                <motion.div initial={{ opacity: 0 }} exit={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <DescriptionTab />

                </motion.div>
            )}



            {activeTab === 1 && (
                <motion.div initial={{ opacity: 0 }} exit={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <ReviewsTab />

                </motion.div>
            )}



        </section >

    )
}

export default ProductDetailsTab