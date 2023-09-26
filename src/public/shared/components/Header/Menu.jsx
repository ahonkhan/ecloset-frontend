import React, { useContext, useState } from 'react'
import style from './navbar.module.scss';
import LogoGreen from '../../assets/LogoGreen';
import { MdOutlineSupportAgent, MdSearch, MdShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { AiOutlineHeart, AiOutlineMenu, AiOutlineUser } from 'react-icons/ai';
import { ImCart } from 'react-icons/im';
import { GetSharedContext } from '../../context/Context';
// import 
export const DesktopMenu = () => {

    const context = useContext(GetSharedContext);
    return (
        <menu className={`flex ${style.HeaderPaddingDesktop} justify-between bg-GreenLight py-2 bg-opacity-30`}>
            <div className="flex items-center gap-4">
                <button onClick={() => context.SetDesktopSidebarStatus(!context.desktopSidebarStatus)} className='flex gap-2 items-center group py-1 pl-1 pr-4 rounded-3xl  bg-white'>
                    <span className='bg-GreenLight group-hover:bg-Green duration-300 text-white w-8 h-8 flex items-center justify-center text-xl rounded-full'><AiOutlineMenu /></span>
                    <span className='font-Poppins text-[15px] text-gray-500'>All Categories</span>
                </button>
                {
                    context.menu?.map(item =>
                        <Link to={item.path} className='px-4 text-gray-700 rounded-3xl duration-300 hover:text-Green hover:bg-opacity-40 hover:bg-GreenLight py-2  font-Poppins text-[15px] tracking-wide font-medium'>{item.name}</Link>
                    )
                }
            </div>
            <div className="flex items-center gap-4">
                <Link to={'/profile/index'}>
                    <button className='w-9 h-9 flex items-center hover:shadow-xl duration-300 justify-center rounded-full bg-white text-GreenLight'>
                        <AiOutlineUser className='text-xl' />
                    </button>
                </Link>
                <button className='w-9 h-9 flex items-center hover:shadow-xl duration-300 justify-center rounded-full bg-white text-GreenLight'>
                    <AiOutlineHeart className='text-xl' />
                </button>
                <div className="flex items-center gap-2">
                    <Link to={'/cart'}>
                        <button className='w-9 h-9 flex items-center hover:shadow-xl duration-300 justify-center rounded-full text-white bg-GreenLight'>
                            <MdShoppingCart className='text-xl' />
                        </button>
                    </Link>
                    <span className='font-Ubuntu font-medium text-gray-600'><span>৳ </span>0.00</span>
                </div>
            </div>
        </menu>
    )
}

export const MobileMenu = () => {
    const [IsLoading, setIsLoading] = useState(false);

    return (
        <menu className={`flex ${style.HeaderPaddingMobile} gap-2 justify-center bg-GreenLight py-2 bg-opacity-30`}>
            <div className="search-bar bg-white  flex justify-between rounded-3xl items-center w-full h-[40px] md:h-[44px] px-1">
                <input type="text" className='w-full font-Ubuntu bg-transparent border-none outline-none pl-3  text-[15px] text-gray-400 font-normal' placeholder='Search for product..' />
                <button className='shrink-0 w-[36px] hover:bg-GreenLight duration-200 text-2xl text-white h-[36px] bg-Green rounded-full flex items-center justify-center'>
                    <MdSearch className={`${IsLoading ? style.pulse : ''}`} />
                </button>
            </div>

            <div className="flex items-center gap-2">

                <Link to={'/cart'}>
                    <button className='w-9 h-9 flex items-center hover:shadow-xl duration-300 justify-center rounded-full text-white bg-GreenLight'>
                        <MdShoppingCart className='text-xl' />
                    </button>
                </Link>
            </div>
        </menu>
    )
}