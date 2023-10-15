import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import ProductListing from './ProductListing'
import ShippingDetails from './ShippingDetails'
const OrderDetails = ({ orderDetailStatus, setOrderDetailStatus }) => {
    return (

        <AnimatePresence>
            {orderDetailStatus && (
                <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} className="absolute px-2 py-2 font-WorkSans top-0 left-0 w-full  bg-white">
                    <div className="order-details-header">
                        <div className="flex  items-center gap-2 ">
                            <Link to={'/profile/orders'} className='text-gray-600 duration-300 bg-slate-100 block px-4 py-2 rounded' onClick={() => setOrderDetailStatus(false)}>
                                <BiArrowBack className=' ' />
                            </Link>
                            {/* <p className='text-slate-700 font-medium'>Order Details</p> */}
                            <p className='text-slate-700 '>Order <span className='text-Green'>#1212</span> was placed on <span className='text-Green'>14 June,2023</span> and currently <span className="text-Green">proccessing</span></p>

                        </div>
                    </div>
                    <ProductListing />
                    <ShippingDetails />
                </motion.div>
            )}


        </AnimatePresence>
    )
}

export default OrderDetails