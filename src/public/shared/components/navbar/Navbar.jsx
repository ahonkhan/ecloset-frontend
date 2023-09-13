import React, { useState } from 'react'
import style from './navbar.module.scss';
import LogoGreen from '../../assets/LogoGreen';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiPhoneCall } from 'react-icons/bi';
import { MdOutlineSupportAgent } from 'react-icons/md';
import { Link } from 'react-router-dom';
// import 
const Navbar = () => {
    const [IsLoading, setIsLoading] = useState(false);
    return (
        <nav className='flex items-center gap-12 py-4'>
            <Link to={''} className="logo">
                <LogoGreen />
            </Link>
            <div className="search-bar border-[1.5px] flex justify-between rounded-3xl items-center border-gray-300 w-full h-[44px] px-1">
                <input type="text" className='w-full border-none outline-none pl-3 pr-4 font-Poppins text-sm text-gray-400 font-normal' placeholder='Search here...' />
                <button className='shrink-0 w-[36px] hover:bg-GreenLight duration-200 text-2xl text-white h-[36px] bg-Green rounded-full flex items-center justify-center'>
                    <AiOutlineSearch className={`${IsLoading ? style.pulse : ''}`} />
                </button>
            </div>
            <div className="right w-[500px] flex items-center justify-between gap-8">
                <div className="">
                    <div className="icon">
                        <MdOutlineSupportAgent className='text-[28px] text-gray-500' />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar