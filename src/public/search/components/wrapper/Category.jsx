import React, { useContext } from 'react'
import { FilterHeading } from '../typography/Typography'
import { GetSharedContext } from '../../../shared/context/Context'
import { MdChevronRight } from 'react-icons/md'

const Category = () => {
    const context = useContext(GetSharedContext)
    return (
        <div className="category">
            <FilterHeading>Categories</FilterHeading>
            <ul className='mt-4 flex flex-col gap-y-2'>

                {
                    context?.Categories.map((category, index) =>

                        <li className='flex items-center cursor-pointer'>
                            <p className='w-full font-Roboto text-DarkGray text-sm tracking-wide'>{category.name}</p>
                            <button className='shrink-0 px-2'>
                                <MdChevronRight />
                            </button>
                        </li>
                    )
                }


            </ul>
        </div>)
}

export default Category