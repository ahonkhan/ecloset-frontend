import React from 'react'
import { MdStar, MdStarOutline } from 'react-icons/md'

export const FilterHeading = ({ children }) => {
    return (
        <div className="heading font-Poppins relative after:content-[''] after:absolute after:w-[75px] after:bottom-0 after:z-[10] after:h-[2px] after:left-0 after:bg-LightBlue  ">
            <h2 className='font-medium text-gray-800 border-b-2 border-gray-200 pb-2 '>{children}</h2>
        </div>
    )
}

export const RatingStar = ({ count }) => {
    return (
        <ul className='flex items-center gap-0.5'>
            {[...new Array(count)].map(item =>
                <li >
                    <MdStar className='text-YellowDark text-xl' />
                </li>)
            }
            {[...new Array(5 - count)].map(item =>
                <li >
                    <MdStarOutline className='text-gray-400 text-xl' />
                </li>)
            }
        </ul>
    )
}

export const RatingProgressBar = ({ progress }) => {
    return (
        <div className='w-full h-1.5 rounded bg-gray-200'>
            <span className={`line block h-full bg-YellowDark rounded`} style={{ width: progress + '%' }}></span>
        </div>
    )
}