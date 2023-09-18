import React from 'react'
import { ProductCard } from '../public/shared/components/cards/Card'
import Header from '../public/shared/components/Header/Header'
import LayoutDefault from '../public/shared/layout/LayoutDefault'
import HomePage from '../public/home/HomePage'

const Ahon = () => {
    return (
        <>

            <LayoutDefault>
                <HomePage />
            </LayoutDefault>

            <div className='p-8 xs:p-2 md:p-8'>
                <div className="wrapper grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-y-8 gap-4">
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
        </>
    )
}

export default Ahon