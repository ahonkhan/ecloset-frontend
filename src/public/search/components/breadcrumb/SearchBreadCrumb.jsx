import React, { useContext } from 'react'
import Breadcrumb from '../../../shared/components/breadcrumb/Breadcrumb'
import { BiFilter } from 'react-icons/bi'
import { GetSearchContext } from '../../context/SearchContext'

const SearchBreadCrumb = () => {
    const context = useContext(GetSearchContext)
    return (
        <section className='flex bg-white'>
            <Breadcrumb />
            <button onClick={() => context.setSearchFilterStatus(!context.searchFilterStatus)} className='shrink-0 md:hidden text-2xl px-2 text-DarkGray'><BiFilter /></button>
        </section>
    )
}

export default SearchBreadCrumb