import React, { useState } from 'react'
import { ProductCard, ProductCardResponsive } from '../../../shared/components/cards/Card'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
const SearchProducts = () => {
    const [page, setPage] = useState(1);
    return (
        <>
            <div className="products grid gap-y-4 grid-cols-1 xs:grid-cols-1 sm:grid-cols-3 md:grid-cols-2 gap-x-4 lg:grid-cols-3 xl:grid-cols-4">
                <ProductCardResponsive />
                <ProductCardResponsive />
                <ProductCardResponsive />
                <ProductCardResponsive />
                <ProductCardResponsive />
                <ProductCardResponsive />
                <ProductCardResponsive />
                <ProductCardResponsive />
            </div>

            <div className="flex justify-center mt-6 gap-2">
                <button className='text-xl text-darkBlue'> <MdChevronLeft /> </button>
                <button className='px-4 py-2 bg-darkBlue text-center shadow-1 rounded text-gray-800 font-Ubuntu '>1</button>
                <button className='px-4 py-2 text-center bg-white shadow-1 rounded text-gray-800 font-Ubuntu '>2</button>
                <button className='px-4 py-2 text-center bg-white shadow-1 rounded text-gray-800 font-Ubuntu '>3</button>
                <button className='text-xl text-darkBlue'> <MdChevronRight /> </button>
            </div>
        </>
    )
}

export default SearchProducts