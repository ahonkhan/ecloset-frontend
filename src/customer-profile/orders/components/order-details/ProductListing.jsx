import React from 'react'

const ProductListing = () => {
    return (
        <div className="">
            <h2 className='text-2xl text-slate-700 py-4'>Order Details</h2>
            <ul>
                <li className='flex justify-between uppercase text-sm font-medium border-b-2 border-b-slate-300 py-2 items-center text-slate-700'>
                    <p>Product</p>
                    <p>Price</p>
                </li>
                <li className='flex justify-between text-sm font-medium border-b py-2 items-center text-slate-700'>
                    <p>Uiisii C100 Super Bass Stereo In Ear Headphone <span>x 5</span></p>
                    <p>$140.4</p>
                </li>
                <li className='flex justify-between text-sm font-medium border-b py-2 items-center text-slate-700'>
                    <p>Uiisii C100 Super Bass Stereo In Ear Headphone <span>x 5</span></p>
                    <p>$10.4</p>
                </li>
                <li className='flex justify-between text-sm font-medium border-b py-2 items-center text-slate-700'>
                    <p>Uiisii C100 Super Bass Stereo In Ear Headphone <span>x 5</span></p>
                    <p>$40.4</p>
                </li>
                <li className='flex justify-between text-sm font-medium border-b py-2 items-center text-slate-700'>
                    <p>Sub Total</p>
                    <p>$280.4</p>
                </li>
                <li className='flex justify-between text-sm font-medium border-b py-2 items-center text-slate-700'>
                    <p>Shipping</p>
                    <p>$2.4</p>
                </li>
                <li className='flex justify-between text-sm font-medium border-b py-2 items-center text-slate-700'>
                    <p>Payment Method</p>
                    <p>Cash on delevery</p>
                </li>
                <li className='flex justify-between text-sm font-medium border-b py-2 items-center text-slate-700'>
                    <p>Total</p>
                    <p>$214.4</p>
                </li>
            </ul>
            <div className="mt-4 flex gap-2">
                <button className='bg-GreenLight text-white px-4 py-2 rounded'>Reorder</button>
                <button className='bg-slate-800 text-white px-4 py-2 rounded'>Download invoice</button>

            </div>
        </div>)
}

export default ProductListing