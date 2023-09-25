import React from 'react'
import { MdShoppingCart } from 'react-icons/md'
import { Link } from 'react-router-dom'

const YourOrders = () => {
    return (
        <div>
            <h2 className="font-Ubuntu text-xl text-gray-800">Your Orders</h2>


            <div className="box mt-4 w-full md:w-[420px] rounded-md shadow-1 py-6 px-6 bg-white">
                <div className="box-body flex flex-col">
                    <div className="box-item hover:bg-gray-50 duration-200 select-none py-2 flex justify-between items-center">
                        <p className='font-semibold text-gray-500 font-WorkSans'>Sub Total:</p>
                        <p className='font-medium text-gray-500 font-WorkSans'>$450</p>
                    </div>
                    <div className="box-item hover:bg-gray-50 duration-200 select-none py-2 border-t border-gray-100 flex justify-between items-center">
                        <p className='font-semibold text-gray-500 font-WorkSans'>Tax:</p>
                        <p className='font-medium text-gray-500 font-WorkSans'>5%</p>
                    </div>
                    <div className="box-item hover:bg-gray-50 duration-200 select-none py-2 border-t border-gray-100 flex justify-between items-center">
                        <p className='font-semibold text-gray-500 font-WorkSans'>Shipping:</p>
                        <p className='font-medium text-gray-500 font-WorkSans'>$15</p>
                    </div>
                    <div className="box-item hover:bg-gray-50 duration-200 select-none py-2 border-t-2  border-gray-200 flex justify-between items-center">
                        <p className='font-semibold text-gray-500 font-WorkSans'>Total:</p>
                        <p className='font-medium text-gray-500 font-WorkSans'>$650</p>
                    </div>
                    <Link to={'/cart'} className='text-darkBlue hover:underline flex items-center gap-2 font-medium font-WorkSans'>
                        <MdShoppingCart />
                        <span>Edit Cart</span>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default YourOrders