import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { Link } from 'react-router-dom';
const ShopMenu = ({ setActiveMenu, activeMenu }) => {
    const menus = [
        { name: 'Products', tab: 'products' },
        { name: 'Profile', tab: 'profle' },
        { name: 'Events', tab: 'events' },
    ];
    return (
        <menu className=' bg-blue-100 font-WorkSans border-y shadow-1  flex justify-between items-center sm:pr-4 '>
            <div className="left w-full">
                <div className="tab-buttons grid grid-cols-3 text-center sm:text-start   sm:flex items-center">
                    {
                        menus.map((item, index) =>
                            <Link to={'/stores/samsung.124/?tab=' + item.tab} onClick={() => setActiveMenu(index)} className={`duration-200 ${activeMenu === index ? 'bg-blue-400 text-white ' : 'text-slate-800'}  rounded px-6 py-2  font-medium'`}>{item.name}</Link>
                        )
                    }

                </div>
            </div>
            <div className="right hidden sm:flex md:shrink-0">
                <div className="search-box flex items-center border  border-blue-300 h-[36px] rounded ">
                    <input type="text" className='bg-transparent w-full px-4 h-full outline-none rounded-l text-gray-700 placeholder:text-sm placeholder:text-slate-500 ' placeholder='Search Store' />
                    <button className='shrink-0 px-4 bg-blue-500 h-full text-white'>
                        <BiSearch />
                    </button>
                </div>
            </div>
        </menu>
    )
}

export default ShopMenu