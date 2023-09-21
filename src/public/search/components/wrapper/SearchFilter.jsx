import React, { useContext, useEffect, useState } from 'react'
import { MdChevronRight, MdSearch } from 'react-icons/md'
import FilterWrapperCard from '../card/FilterWrapperCard'
import { FilterHeading } from '../typography/Typography'
import { GetSharedContext } from '../../../shared/context/Context'
import Tags from './Tags'
import Category from './Category'
import Sizes from './Sizes'

const SearchFilter = () => {

    const context = useContext(GetSharedContext)
    return (
        <div className="search-filter flex flex-col md:gap-y-4">


            <FilterWrapperCard>
                <div className="search-box bg-gray-200 flex rounded overflow-hidden shadow-1 ">
                    <input type="text" placeholder='Search here..' className='bg-transparent font-Ubuntu text-sm text-DarkGray w-full outline-none border-none px-4' />
                    <button className='shrink-0 w-12 flex items-center py-2.5 text-xl text-white bg-darkBlue duration-200 hover:bg-LightBlue justify-center'><MdSearch /></button>
                </div>
            </FilterWrapperCard>

            <FilterWrapperCard>
                <Category />
            </FilterWrapperCard >
            <FilterWrapperCard>
                <Tags />
            </FilterWrapperCard>
            <FilterWrapperCard>
                <Sizes />
            </FilterWrapperCard>
        </div >
    )
}

export default SearchFilter