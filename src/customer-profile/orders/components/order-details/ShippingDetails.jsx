import React from 'react'

const ShippingDetails = () => {
    return (
        <div className="">
            <h2 className='text-2xl text-slate-700 py-4'>Shipping Details</h2>
            <ul>

                <li className='flex justify-between text-sm font-medium border-b py-2 items-center text-slate-700'>
                    <p>Bhendabari,Peerganj,Rangpur</p>
                </li>
                <li className='flex justify-between text-sm font-medium border-b py-2 items-center text-slate-700'>
                    <p>Houes No.</p>
                    <p>803</p>
                </li>
                <li className='flex justify-between text-sm font-medium border-b py-2 items-center text-slate-700'>
                    <p>Phone</p>
                    <p>+8801313386702</p>
                </li>
                <li className='flex justify-between text-sm font-medium border-b py-2 items-center text-slate-700'>
                    <p>Country</p>
                    <p>Bangladesh</p>
                </li>

            </ul>

        </div>)
}

export default ShippingDetails