import React from 'react'

const CartTotal = () => {
    return (
        <section className='site-container mt-8'>
            <div className="flex justify-end">
                <div className="box w-full md:w-[420px] rounded-md shadow-1 py-6 px-6 bg-white">
                    <div className="box-header ">
                        <h2 className="text-center text-gray-800 text-lg font-semibold font-Poppins">Cart Total</h2>

                    </div>
                    <div className="box-body flex flex-col mt-4">
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
                        <div className="box-item hover:bg-gray-50 duration-200 select-none py-2 border-t border-gray-100 flex justify-between items-center">
                            <p className='font-semibold text-gray-500 font-WorkSans'>Total:</p>
                            <p className='font-medium text-gray-500 font-WorkSans'>$650</p>
                        </div>
                        <button className='bg-LightBlue py-2.5 font-WorkSans shadow-2 duration-200 hover:bg-darkBlue px-2 rounded text-white'>Proceed To Checkout</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CartTotal