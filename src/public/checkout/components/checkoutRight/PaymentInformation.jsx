import React, { useState } from 'react'
import { MdShoppingCart } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { CgPaypal, CgCreditCard } from 'react-icons/cg'
import { } from 'react-icons/ai'
import { InputCheckout, InputPaymentInfo, SelectCheckout, SelectPaymentMethod } from '../../../shared/components/input-field/InputField'
import { range } from '../../../../utils/Library'
import { AnimatePresence, motion } from 'framer-motion'
const PaymentInformation = () => {
    const [selectedMethod, setSelectedMethod] = useState(1);
    const methods = [
        { 'text': 'PayPal', 'icon': <CgPaypal /> },
        { 'text': 'Credit Card', 'icon': <CgCreditCard /> },
    ]
    const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const date = new Date();
    const year = range(1970, date.getFullYear())
    // console.log(currentYear)
    return (
        <div className='mt-8 md:mt-0 w-full'>
            <h2 className="font-Ubuntu text-xl text-gray-800">Payment Information</h2>


            <div className="box mt-4 w-full lg:w-[420px] rounded-md shadow-1 py-6 px-6 bg-white">
                <div className="methods overflow-x-clip">
                    <div className="grid grid-cols-2 gap-2">
                        {
                            methods.map((item, index) =>
                                <button onClick={() => setSelectedMethod(index)} className={`flex items-center border duration-300  ${selectedMethod === index ? 'border-LightBlue text-LightBlue' : 'border-gray-100 bg-gray-100 text-gray-700'}  justify-center gap-2 font-WorkSans py-3 rounded `}>
                                    {item.icon}
                                    <span className=' font-medium'>{item.text}</span>
                                </button>
                            )
                        }

                    </div>
                    <AnimatePresence>
                        {
                            (selectedMethod === 1) && (
                                <motion.div initial={{ opacity: 0, x: '-100%', height: 0 }} animate={{ opacity: 1, x: 0, height: 'auto' }} exit={{ opacity: 0, x: '100%', height: 0 }}>
                                    <div className="method-info-credit-card pt-4 flex flex-col gap-2">
                                        <div className="input-item mt-2">
                                            <p className='text-gray-500 font-Poppins text-sm'>Credit Card Number</p>
                                            <div className="mt-2">
                                                <InputPaymentInfo type={'password'} placeholder={'** ** **'} />

                                            </div>
                                        </div>
                                        <div className="input-item mt-2">
                                            <p className='text-gray-500 font-Poppins text-sm'>Expiration Date</p>
                                            <div className="mt-2 grid grid-cols-2 gap-4">
                                                <SelectPaymentMethod placeholder={'Month'} data={months} />
                                                <SelectPaymentMethod placeholder={'Year'} data={year} />
                                            </div>
                                        </div>
                                        <div className="input-item mt-2">
                                            <p className='text-gray-500 font-Poppins text-sm'>Security Code</p>
                                            <div className="mt-2">
                                                <InputPaymentInfo type={'text'} placeholder={'Security Code'} />

                                            </div>
                                        </div>
                                        <button className='py-3 bg-LightBlue text-white rounded w-full font-medium'>Pay now</button>
                                    </div>
                                </motion.div>
                            )
                        }


                    </AnimatePresence>
                    <AnimatePresence>
                        {
                            (selectedMethod === 0) && (
                                <motion.div initial={{ opacity: 0, x: '100%', height: 0 }} animate={{ opacity: 1, x: 0, height: 'auto' }} exit={{ opacity: 0, x: '-100%', height: 0 }}>
                                    <div className="method-info-credit-card pt-4 flex flex-col gap-2">
                                        <div className="input-item mt-2">
                                            <p className='text-gray-500 font-Poppins text-sm'>Paypal Email</p>
                                            <div className="mt-2">
                                                <InputPaymentInfo type={'email'} placeholder={'** ** **'} />

                                            </div>
                                        </div>
                                        <div className="input-item mt-2">
                                            <p className='text-gray-500 font-Poppins text-sm'>Expiration Date</p>
                                            <div className="mt-2 grid grid-cols-2 gap-4">
                                                <SelectPaymentMethod placeholder={'Month'} data={months} />
                                                <SelectPaymentMethod placeholder={'Year'} data={year} />
                                            </div>
                                        </div>
                                        <div className="input-item mt-2">
                                            <p className='text-gray-500 font-Poppins text-sm'>Security Code</p>
                                            <div className="mt-2">
                                                <InputPaymentInfo type={'text'} placeholder={'Security Code'} />

                                            </div>
                                        </div>
                                        <button className='py-3 bg-LightBlue text-white rounded w-full'>Pay now</button>
                                    </div>
                                </motion.div>
                            )
                        }
                    </AnimatePresence>
                    <div className="mt-4 flex items-center gap-4">
                        <span onClick={() => setSelectedMethod(2)} className='w-6 h-6 rounded-full flex items-center justify-center border-2 border-gray-200 '>
                            <span className={`${selectedMethod === 2 ? 'opacity-100' : 'opacity-0'} duration-200 w-4 h-4 cursor-pointer rounded-full bg-LightBlue`}></span>
                        </span>
                        <p className='text-gray-700 font-medium font-WorkSans'>
                            Cash on delevery
                        </p>
                    </div>
                    <AnimatePresence>
                        {
                            (selectedMethod === 2) && (
                                <motion.div initial={{ opacity: 0, x: '100%', height: 0 }} animate={{ opacity: 1, x: 0, height: 'auto' }} exit={{ opacity: 0, x: '-100%', height: 0 }}>
                                    <div className="method-info-credit-card pt-4 flex flex-col gap-2">


                                        <button className='py-3 bg-LightBlue text-white rounded w-full'>Place Order</button>
                                    </div>
                                </motion.div>
                            )
                        }
                    </AnimatePresence>

                </div>
            </div>
        </div>)
}

export default PaymentInformation