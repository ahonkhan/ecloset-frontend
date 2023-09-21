import React, { useContext, useState } from 'react'
import SearchProducts from './SearchProducts'
import SearchFilter from './SearchFilter'
import { AiOutlineArrowRight, AiOutlineClose } from 'react-icons/ai';
import { BiFilter } from 'react-icons/bi';
import { GetSearchContext } from '../../context/SearchContext';

const ProductWrapper = () => {
    const context = useContext(GetSearchContext)
    return (
        <>

            <section className='flex site-container mt-6 gap-4' >
                <div className="left w-full">
                    <SearchProducts />
                </div>

                <div className={`fixed ${context.searchFilterStatus ? '' : 'translate-x-full md:translate-x-0'} duration-300 md:static top-0 right-0 z-[160] md:block w-full xs:w-[300px]  shrink-0`}>
                    <div className="relative md:pt-0 z-[160] h-screen md:h-auto overflow-y-auto">
                        <SearchFilter />
                        <button onClick={() => context.setSearchFilterStatus(false)} className={`absolute duration-200 md:hidden rounded-full ${context.searchFilterStatus ? '' : 'translate-x-full'} bg-white p-2 top-0 xs:right-full `}>
                            <AiOutlineClose />
                        </button>
                    </div>
                    <button onClick={() => context.setSearchFilterStatus(false)} className={`absolute duration-200 md:hidden ${context.searchFilterStatus ? '' : 'translate-x-full'} bg-white p-2 top-0 xs:right-full `}>
                        <AiOutlineClose />
                    </button>
                </div >
                <div className={`fixed ${context.searchFilterStatus ? 'opacity-100' : 'pointer-events-none opacity-0'} md:hidden duration-300 h-screen w-screen bg-black z-[150] bg-opacity-50 top-0 left-0`}>
                </div>
            </section >
        </>
    )
}

export default ProductWrapper