import React from 'react'
import YourOrders from './YourOrders'
import PaymentInformation from './PaymentInformation'

const CheckoutRight = () => {
    return (
        <section className='md:grid  grid-cols-2 lg:flex gap-4 lg:flex-col lg:gap-8'>
            <YourOrders />
            <PaymentInformation />

        </section>
    )
}

export default CheckoutRight