import React, { useContext, useState } from 'react'
import style from './navbar.module.scss';
import LogoGreen from '../../assets/LogoGreen';
import { MdMenu, MdOutlineSupportAgent, MdSearch } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineUser, AiOutlineWhatsApp } from 'react-icons/ai';
import { GetSharedContext } from '../../context/Context';
import { AnimatePresence, motion } from 'framer-motion';
export const Navbar = () => {
    const [IsLoading, setIsLoading] = useState(false);

    const [isFixed, setIsFixed] = useState(false);

    var lastScrollPosition = document.documentElement.scrollTop;

    window.addEventListener('scroll', () => {

        if (window.scrollY > 200) {
            setIsFixed(true);
        } else {
            setIsFixed(false);

        }


    })
    return (
        <nav className={`${style.HeaderPaddingDesktop} ${isFixed ? 'py-2.5' : 'py-4'} duration-200 bg-white hidden lg:flex sticky top-0 items-center z-[70] gap-12 `}>
            <Link to={'/'} className="logo">
                <LogoGreen />
            </Link>
            <div className="search-bar border-[1.5px] flex justify-between rounded-3xl items-center border-gray-300 w-full h-[44px] px-1">
                <input type="text" className='w-full font-Ubuntu bg-transparent border-none outline-none pl-3 pr-4  text-[15px] text-gray-400 font-normal' placeholder='Search for product..' />
                <button className='shrink-0 w-[36px] hover:bg-GreenLight duration-200 text-2xl text-white h-[36px] bg-Green rounded-full flex items-center justify-center'>
                    <MdSearch className={`${IsLoading ? style.pulse : ''}`} />
                </button>
            </div>
            <div className="right shrink-0  flex items-center justify-between gap-8">

                <div className="flex items-center gap-2">
                    <div className="icon">
                        <AiOutlineWhatsApp className='text-[32px] text-gray-400' />
                    </div>
                    <Link to='tel:+' className="flex flex-col items-start">
                        <p className='font-WorkSans font-medium'>24 Support</p>
                        <p className='text-DarkGray font-Poppins text-[15px] tracking-wide'>+88016-211549</p>
                    </Link>

                </div>
                <Link to={'/search'} className='font-Poppins text-sm border bg-Green text-white hover:bg-transparent duration-300 border-gray-400 hover:text-Green px-4 py-2.5 rounded-3xl'>Become a vendor</Link>
            </div>

        </nav>
    )
}




export const MobileNavbar = () => {
    const context = useContext(GetSharedContext);
    const [isFixed, setIsFixed] = useState(false);

    var lastScrollPosition = document.documentElement.scrollTop;

    window.addEventListener('scroll', () => {

        if (window.scrollY > 200) {
            setIsFixed(true);
        } else {
            setIsFixed(false);

        }


    })
    return (
        <nav className={`${style.HeaderPaddingMobile} ${isFixed ? 'py-1.5 shadow-1' : 'py-2'} duration-300 sticky top-0 z-[70] lg:hidden flex bg-white items-center justify-between gap-12`}>
            <button onClick={() => context.setMobileSidebarStatus(true)}>
                <MdMenu className='text-2xl text-DarkGray' />
            </button>
            <Link to={'/'} className={`logo duration-300 `}>
                <LogoGreen />
            </Link>

            <Link to={'/profile/index'}>
                <AiOutlineUser className='text-2xl text-DarkGray' />
            </Link>


        </nav>
    )
}