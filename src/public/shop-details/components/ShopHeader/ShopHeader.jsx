import React, { useState } from 'react'
import img from '../../assets/logo.jpg'
import { BsShop } from 'react-icons/bs';
import { HiChatBubbleLeftRight } from 'react-icons/hi2';

const ShopHeader = () => {

    return (
        <div className='site-container font-WorkSans shadow-1 py-2 md:py-3 bg-white flex items-center justify-between md:justify-start md:gap-8'>
            <div className="left flex items-center gap-4">
                <img src={img} className='w-12 h-12 cursor-pointer md:w-[50px] md:h-[50px] rounded-full' alt="" />
                <div className="flex flex-col justify-center leading-4 mb-2.5 md:mb-0 md:leading-5">
                    <p className='font-medium text-gray-800 text-lg'>Samsung</p>
                    <p className='text-gray-700'>5k followers</p>
                </div>
            </div>
            <div className="right text-lg md:text-2xl flex gap-4">
                <button className='text-blue-500 duration-300 active:scale-95 bg-slate-200 p-2 rounded-md'>
                    <HiChatBubbleLeftRight />
                </button>
                <button className='text-rose-500 relative duration-300 active:scale-95 bg-rose-100 p-2 rounded-md'>
                    <BsShop />
                    <span className='absolute top-[45%] -right-0.5'>+</span>
                </button>
            </div>
        </div>
    )
}

export default ShopHeader