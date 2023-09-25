import React from 'react'
import { InputCheckout, SelectCheckout, TextAreaCheckout } from '../../../shared/components/input-field/InputField'

const CheckoutLeft = () => {
    const country = ['Bangladesh', 'Germany', 'United Kingdom', 'China']
    const city = ['Rangpur', 'Dhaka', 'Khulna', 'Dinajpur']
    return (
        <section>
            <h2 className="font-Ubuntu text-xl flex items-center gap-4 text-gray-800">
                <span>Billing Address</span>
                <p className='text-sm cursor-pointer text-LightBlue font-medium'>Saved Address</p>
            </h2>
            <form action="" className='mt-4 flex flex-col gap-3' onSubmit={(e) => e.preventDefault()}>
                <InputCheckout type={'text'} placeholder={'Your First Name'} />
                <InputCheckout type={'text'} placeholder={'Your Last Name'} />
                <SelectCheckout placeholder={'Country'} data={country} />
                <SelectCheckout placeholder={'Town/City'} data={city} />
                <InputCheckout type={'text'} placeholder={'Street Address'} />
                <InputCheckout type={'text'} placeholder={'Appartment Number'} />
                <InputCheckout type={'text'} placeholder={'District'} />
                <InputCheckout type={'text'} placeholder={'Postal/Zip Code'} />
                <InputCheckout type={'text'} placeholder={'Phone'} />
                <InputCheckout type={'text'} placeholder={'Email'} />
                <TextAreaCheckout placeholder={'Order Notes'} />
            </form>
        </section>
    )
}

export default CheckoutLeft