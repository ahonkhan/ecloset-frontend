import React from 'react'
import { Link } from 'react-router-dom'
const HaveCoupon = () => {
    return (
        <div className='site-container mt-8'>
            <div className="bg-white font-WorkSans w-full py-3 px-4 flex items-center gap-2 rounded">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.33301 1.33333H5.99967C2.66634 1.33333 1.33301 2.66667 1.33301 6V10C1.33301 13.3333 2.66634 14.6667 5.99967 14.6667H9.99967C13.333 14.6667 14.6663 13.3333 14.6663 10V8.66667" stroke="#40D7E1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M10.6933 2.01333L5.43992 7.26667C5.23992 7.46667 5.03992 7.86 4.99992 8.14667L4.71325 10.1533C4.60659 10.88 5.11992 11.3867 5.84659 11.2867L7.85325 11C8.13325 10.96 8.52659 10.76 8.73325 10.56L13.9866 5.30667C14.8933 4.4 15.3199 3.34667 13.9866 2.01333C12.6533 0.68 11.5999 1.10667 10.6933 2.01333Z" stroke="#40D7E1" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M9.94043 2.76667C10.3871 4.36 11.6338 5.60667 13.2338 6.06" stroke="#40D7E1" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p className='text-gray-500'>Have a coupon?</p>
                <p className='text-darkBlue hover:underline shrink-0 cursor-pointer '><span>Click here</span> <span className='hidden md:inline'>to enter your code</span></p>
            </div>
        </div>
    )
}

export default HaveCoupon