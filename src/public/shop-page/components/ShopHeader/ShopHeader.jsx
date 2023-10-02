import React from 'react'
import { BiSearch } from 'react-icons/bi'

const ShopHeader = () => {
    return (
        <menu className='site-container bg-blue-100 font-WorkSans py-2 border-y shadow-1  flex justify-between items-center '>
            <div className="left w-full">
                <h1 className='text-xl text-slate-900'>Available Stores</h1>
            </div>
            <button className='shrink-0 h-7 w-7 rounded-full bg-blue-500 flex items-center justify-center sm:hidden text-white'>
                <BiSearch />
            </button>
            <div className="right hidden sm:flex md:shrink-0">
                <div className="search-box flex items-center border  border-blue-300 h-[36px] rounded ">
                    <input type="text" className='bg-transparent w-full px-4 h-full outline-none rounded-l text-gray-700 placeholder:text-sm placeholder:text-slate-500 ' placeholder='Search Store' />
                    <button className='shrink-0 px-4 bg-blue-500 h-full text-white'>
                        <BiSearch />
                    </button>
                </div>
            </div>
        </menu>)
}

export default ShopHeader