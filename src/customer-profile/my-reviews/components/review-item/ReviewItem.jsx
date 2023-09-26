import React, { useRef, useState } from 'react'
import productImg from '../../assets/image.png'
import { BsThreeDotsVertical } from 'react-icons/bs'
import './review-item.scss'
import { AnimatePresence, motion } from 'framer-motion'
import ReviewOptions from './ReviewOptions'
const ReviewItem = ({ }) => {
    let text = "আলহামদুলিল্লাহ, আমি সফল।আমার গাছে ফল আসিয়াছে 🥰। তাদের দেওয়া নিয়ম অনুযায়ী আমি যত্ন করেছি। লাগানোর ২৭ মাস পর ফলন আসছে।💓💓💓💓🥰।। অনেক কষ্টের টাকা দিয়ে প্রতি মাসে ১ টা বা কখনো ২/৩ মাস পর পর একটা চারা কিনতাম। এই নিয়ে মোট ১৭ টি চারা কিনেছি। আস্তে আস্তে টাকা হলে আরো কিনার ইচ্ছে আছে। প্রথম এ আমি ভাবছি ভুয়া গাছ। পরে কৃিষি অফিসার গাছ দেখে বলছে, এইটা অরিজিনাল। যত্ন করেন।২/৩ বছরে ফলন পাবেন। ধন্যবাদ সেলারকে।💓💓💓    "
    const [textSeeMore, setTextSeeMore] = useState(false)
    const [moreOptionActive, setMoreOptionActive] = useState(false);

    return (
        <div className={`review-item group flex-col sm:flex-row ${moreOptionActive ? 'bg-gray-100' : ''} select-none flex gap-3 duration-300 hover:bg-gray-100 py-4 rounded px-4`}>
            <div className="shrink-0 flex h-fit justify-between">

                <div className="shrink-0">
                    <img className='w-[100px] rounded' src={productImg} alt="" />
                </div>
                <div className="flex sm:hidden relative justify-between">
                    <button onClick={() => setMoreOptionActive(!moreOptionActive)} className={`w-7 shrink-0 ${moreOptionActive ? 'opacity-100 bg-gray-300' : 'opacity-0 group-hover:opacity-100 hover:bg-gray-300'}   rounded-full flex items-center justify-center h-7 duration-200 active:scale-95 `}>
                        <BsThreeDotsVertical />
                    </button>
                    <AnimatePresence>
                        {
                            moreOptionActive && (

                                <motion.div style={{ 'overflow': 'clip' }} initial={{ height: 0, opacity: 0, width: 0 }} animate={{ height: 'auto', opacity: 1, width: 'auto' }} exit={{ opacity: 0, height: 0, width: 0 }} className={`review-more shadow-1 rounded-md absolute top-10 right-0 bg-white`}>
                                    <ReviewOptions />
                                </motion.div>
                            )
                        }

                    </AnimatePresence>
                </div>
            </div>
            <div className="">
                <div className="hidden sm:flex relative justify-between">
                    <h2 className='text-xl  text-gray-800 font-WorkSans font-medium'>নারকেল এর চারা গাছ</h2>
                    <button onClick={() => setMoreOptionActive(!moreOptionActive)} className={`w-7 shrink-0 ${moreOptionActive ? 'opacity-100 bg-gray-300' : 'opacity-0 group-hover:opacity-100 hover:bg-gray-300'}   rounded-full flex items-center justify-center h-7 duration-200 active:scale-95 `}>
                        <BsThreeDotsVertical />
                    </button>
                    <AnimatePresence>
                        {
                            moreOptionActive && (

                                <motion.div style={{ 'overflow': 'clip' }} initial={{ height: 0, opacity: 0, width: 0 }} animate={{ height: 'auto', opacity: 1, width: 'auto' }} exit={{ opacity: 0, height: 0, width: 0 }} className={`review-more shadow-1 rounded-md absolute top-10 right-0 bg-white`}>
                                    <ReviewOptions />
                                </motion.div>
                            )
                        }

                    </AnimatePresence>
                </div>
                <h2 className='text-xl sm:hidden  text-gray-800 font-WorkSans font-medium'>নারকেল এর চারা গাছ</h2>

                <p className="review-text text-gray-600 font-WorkSans font-medium">
                    <span className='md:hidden'>
                        {
                            text.slice(0, textSeeMore ? -1 : 150)
                        }
                        {
                            text.length > 150 ? <button onClick={() => setTextSeeMore(!textSeeMore)} className='ml-2 duration-200'>{textSeeMore ? 'see less' : 'see more...'}</button> : ''
                        }
                    </span>
                    <span className='hidden md:block'>{text}</span>

                </p>
            </div>
        </div>)
}

export default ReviewItem