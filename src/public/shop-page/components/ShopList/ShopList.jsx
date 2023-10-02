import React from 'react'
import ShopItem from './ShopItem'

const ShopList = () => {
    return (
        <section className='grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4'>
            {
                [...new Array(30)].map(item => <ShopItem />)

            }
        </section>
    )
}

export default ShopList