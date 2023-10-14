import React, { useEffect } from 'react'
import { PageAnimation } from '../shared/components/page/PageAnimation'
import DefaultWrapper from '../shared/components/wrappers/DefaultWrapper'
import Breadcrumb from '../shared/components/breadcrumb/Breadcrumb'
import HaveCoupon from './components/coupon/HaveCoupon'
import CheckoutLeft from './components/CheckoutLeft/CheckoutLeft'
import CheckoutRight from './components/checkoutRight/CheckoutRight'
const CheckoutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)

    }, [])

    return (
        <PageAnimation>
            <DefaultWrapper>
                <Breadcrumb />
                <HaveCoupon />
                <div className="flex gap-8 md:gap-[50px] xl:gap-[100px] flex-col lg:flex-row site-container mt-8">
                    <div className="checkoutLayoutLeft w-full">
                        <CheckoutLeft />
                    </div>
                    <div className="checkoutLayoutRight w-full lg:w-[450px] shrink-0">
                        <CheckoutRight />
                    </div>
                </div>
                <div className="mt-8"></div>

            </DefaultWrapper>
        </PageAnimation>
    )
}

export default CheckoutPage