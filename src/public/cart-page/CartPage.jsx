import React from 'react'
import DefaultWrapper from '../shared/components/wrappers/DefaultWrapper'
import CartProducts from './components/cart-products/CartProducts'
import Breadcrumb from '../shared/components/breadcrumb/Breadcrumb'
import CartTotal from './components/cart-totals/CartTotal'

const CartPage = () => {
    return (

        <DefaultWrapper>
            <Breadcrumb />
            <CartProducts />
            <CartTotal />
        </DefaultWrapper>

    )
}

export default CartPage