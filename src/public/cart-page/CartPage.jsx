import React, { useEffect } from 'react'
import DefaultWrapper from '../shared/components/wrappers/DefaultWrapper'
import CartProducts from './components/cart-products/CartProducts'
import Breadcrumb from '../shared/components/breadcrumb/Breadcrumb'
import CartTotal from './components/cart-totals/CartTotal'
import { PageAnimation } from '../shared/components/page/PageAnimation'
const CartPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)

    }, [])
    return (

        <>
            <PageAnimation>
                <DefaultWrapper>
                    <Breadcrumb />
                    <CartProducts />
                    <CartTotal />
                </DefaultWrapper>
            </PageAnimation>
        </>

    )
}

export default CartPage