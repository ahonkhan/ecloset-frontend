import React from 'react'
import { ProductCard } from '../public/shared/components/cards/Card'

const Ahon = () => {
    return (
        <div className='p-8 xs:p-2 md:p-8'>
            <div className="wrapper grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-y-8 gap-4">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />

            </div>
        </div>
    )
}

export default Ahon