import { AnimatePresence, motion } from 'framer-motion';
import React, { useContext } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { GetGlobalContext } from '../../../../context/GlobalContext';
import img from '../../assets/headphone.png';
import { Link } from 'react-router-dom';
const CartSidebar = () => {
    const globalcontext = useContext(GetGlobalContext)
    return (
        <>
            <AnimatePresence>
                {
                    globalcontext.cartSideStatus &&
                    (<motion.aside transition={{ duration: 0.3 }} initial={{ x: '100%' }} exit={{ x: '100%' }} animate={{ x: 0 }} className='fixed top-0 right-0 w-full xs:w-[350px] md:w-[400px] bg-white h-screen z-[160]'>
                        <div className="flex flex-col h-screen ">
                            <div className="cart-header shrink-0 mt-4 px-4 flex justify-end">
                                <button onClick={() => { globalcontext.setCartSideStatus(false); document.body.classList.remove('overflow-hidden') }} className='text-xl'>
                                    <AiOutlineClose />
                                </button>
                            </div>
                            <ul style={{ 'scrollbarWidth': 'thin' }} className="cart-list font-WorkSans mt-4  overflow-y-auto h-full">
                                {
                                    [...new Array(5)].map((item, index) =>
                                        <li className={`flex ${index === 0 ? 'border-t' : ''} px-4 border-b items-center  border-gray-200 py-4 gap-4`}>
                                            <div className="shrink-0 h-[80px] flex justify-between flex-col items-center">
                                                <button className='w-6 h-6 flex items-center justify-center rounded-full bg-GreenLight text-white'>
                                                    <BiPlus />
                                                </button>
                                                <p className='text-gray-700'>5</p>
                                                <button className='w-6 h-6 flex items-center justify-center rounded-full bg-gray-300 text-gray-800'>
                                                    <BiMinus />
                                                </button>
                                            </div>
                                            <img className='h-[100px]' src={img} alt="" />
                                            <div className="">
                                                <h2 className="title text-gray-900 font-medium leading-5">Headphones Bluetooth Style 3 Lavender </h2>
                                                <p className='text-gray-500'>4000 * 5</p>
                                                <p className='text-Green text-lg'>$48.45</p>
                                            </div>
                                            <button className='shrink-0 text-rose-500'>
                                                <AiOutlineClose />
                                            </button>
                                        </li>
                                    )
                                }
                            </ul>
                            <div className="shrink-0">
                                <Link onClick={() => { globalcontext.setCartSideStatus(false); document.body.classList.remove('overflow-hidden') }} to={'/checkout'} className='w-full block text-center bg-GreenLight text-white py-2.5 font-WorkSans '>Proceed to checkout</Link>
                            </div>
                        </div>
                    </motion.aside>)
                }
            </AnimatePresence>
            {
                globalcontext.cartSideStatus && (
                    <div onClick={() => { globalcontext.setCartSideStatus(false); document.body.classList.remove('overflow-hidden') }} className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-50 z-[150]"></div>

                )
            }
        </>
    )
}

export default CartSidebar