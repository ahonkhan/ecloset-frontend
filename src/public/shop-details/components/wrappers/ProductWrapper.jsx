import React from 'react'
import { ProductCard, ProductCardResponsive } from '../../../shared/components/cards/Card'

const ProductWrapper = () => {
    return (
        <div className='grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
            {
                [...new Array(10)].map(item =>
                    <ProductCardResponsive />
                )
            }
        </div>
    )
}

export default ProductWrapper