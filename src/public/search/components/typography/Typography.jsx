import React from 'react'

export const FilterHeading = ({ children }) => {
    return (
        <div className="heading font-Poppins relative after:content-[''] after:absolute after:w-[75px] after:bottom-0 after:z-[10] after:h-[2px] after:left-0 after:bg-LightBlue  ">
            <h2 className='font-medium text-gray-800 border-b-2 border-gray-200 pb-2 '>{children}</h2>
        </div>
    )
}

