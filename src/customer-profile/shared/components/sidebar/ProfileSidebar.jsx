import React, { useContext, useState } from 'react'
import { AiOutlineComment, AiOutlineCustomerService, AiOutlineHeart, AiOutlineHeatMap, AiOutlineLock, AiOutlineLogout, AiOutlineMessage, AiOutlineSetting, AiOutlineShoppingCart, AiOutlineUser, AiOutlineWallet } from 'react-icons/ai'
import { MdChevronLeft, MdShoppingBag } from 'react-icons/md'
import { Link, NavLink } from 'react-router-dom'
import './Sidebar.scss'
import { AnimatePresence, motion } from 'framer-motion'
import { GetProfileContext } from '../../context/ProfileContext'
const ProfileSidebar = () => {
    const menu = [
        { 'name': 'Profile', 'icon': <AiOutlineUser />, 'path': '/profile/index' },
        { 'name': 'Orders', 'icon': <MdShoppingBag />, 'path': '/profile/orders' },
        { 'name': 'Inbox', 'icon': <AiOutlineMessage />, 'path': '/profile/inbox' },
        { 'name': 'Wishlist', 'icon': <AiOutlineHeart />, 'path': '/profile/wishlist' },
        { 'name': 'Refunds', 'icon': <AiOutlineWallet />, 'path': '/profile/refunds' },
        { 'name': 'Reviews', 'icon': <AiOutlineComment />, 'path': '/profile/reviews' },
        { 'name': 'Address', 'icon': <AiOutlineHeatMap />, 'path': '/profile/address' },
        { 'name': 'Security', 'icon': <AiOutlineLock />, 'path': '/profile/security' },
        { 'name': 'Settings', 'icon': <AiOutlineSetting />, 'path': '/profile/settings' },
    ]
    const context = useContext(GetProfileContext)
    const Setdefault = () => {
        context.setMenuStatus(false)
        window.scrollTo(0, 0)
    }
    return (
        <aside className='bg-white rounded py-2'>
            <button onClick={() => context.setMenuStatus(!context.menuStatus)} className="flex w-full sm:hidden text-xl px-4 justify-between">
                <span className='text-sm text-gray-500'>Menu</span>
                <span>
                    <MdChevronLeft className={`${context.menuStatus ? 'rotate-90' : '-rotate-90'} text-gray-500 duration-300`} />
                </span>
            </button>
            <div className={`sm:hidden ${context.menuStatus ? 'pt-2' : ''} duration-200`}>
                <AnimatePresence>
                    {
                        context.menuStatus && (
                            <motion.div initial={{ height: 0 }} exit={{ height: 0 }} animate={{ height: 'auto' }} className="">
                                <ul className='flex flex-col sm:flex-row md:justify-center lg:flex-col'>
                                    {
                                        menu.map(item =>
                                            <li onClick={Setdefault} className='w-full sm:w-[65px] overflow-clip xl:w-full'>
                                                <NavLink to={item.path} className='profileLink'>
                                                    <span className='text-xl rounded p-2 flex items-center  justify-center  shadow-1'>{item.icon}</span>
                                                    <span className='font-WorkSans font-medium'>{item.name}</span>
                                                </NavLink>
                                            </li>
                                        )
                                    }
                                    <li className='w-full sm:w-[65px] overflow-clip xl:w-full'>
                                        <button className='profileLink'>
                                            <span className='text-xl rounded p-2 flex items-center  justify-center  shadow-1'><AiOutlineLogout /></span>
                                            <span className='font-WorkSans font-medium'>Logout</span>
                                        </button>
                                    </li>


                                </ul>
                            </motion.div>
                        )
                    }
                </AnimatePresence>
            </div>
            <ul className='hidden sm:flex flex-col sm:flex-row md:justify-center lg:flex-col'>
                {
                    menu.map(item =>
                        <li className='w-full sm:w-[65px] overflow-clip xl:w-full'>
                            <NavLink to={item.path} className='profileLink'>
                                <span className='text-xl rounded p-2 flex items-center  justify-center  shadow-1'>{item.icon}</span>
                                <span className='font-WorkSans font-medium'>{item.name}</span>
                            </NavLink>
                        </li>
                    )
                }
                <li className='w-full sm:w-[65px] overflow-clip xl:w-full'>
                    <button className='profileLink'>
                        <span className='text-xl rounded p-2 flex items-center  justify-center  shadow-1'><AiOutlineLogout /></span>
                        <span className='font-WorkSans font-medium'>Logout</span>
                    </button>
                </li>


            </ul>
        </aside>
    )
}

export default ProfileSidebar