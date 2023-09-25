import React from 'react'
import img from '../../assets/product-2.png'
import { MdAdd, MdRemove } from 'react-icons/md'
import { BiCross } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
const CartProducts = () => {
    return (
        <section className='mt-8  bg-opacity-60 py-8 px-4'>
            <div className="shadow-md sm:rounded-lg">
                <div style={{ 'scrollbarWidth': 'thin' }} className="relative overflow-x-auto sm:rounded-t-lg ">

                    <table className="w-full text-sm text-left text-gray-500 ">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>

                                <th scope="col" className="px-6 py-3">
                                    Product
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Qantity
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Sub Total
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {[...new Array(6)].map(item =>
                                <tr className="bg-white border-b   hover:bg-gray-50">

                                    <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap ">
                                        <img className="w-10 h-10 rounded-md" src={img} alt="Jese image" />
                                        <div className="pl-3">
                                            <div className="text-base font-semibold">Uiisii C100 Super Bass..</div>
                                            <div className="font-normal text-gray-500"><button className='hover:text-blue-500 hover:underline'>Remove</button></div>
                                        </div>
                                    </th>
                                    <td className="px-6 py-4">
                                        $140
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="">
                                            <div className="quantity flex border border-gray-200 px-4 py-2 rounded w-fit">
                                                <button className=''><MdRemove /> </button>
                                                <input className='max-w-[50px] mx-2 border-x border-gray-200 text-center outline-none' type="text" value={1} />
                                                <button className=''><MdAdd /></button>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        $450
                                    </td>
                                </tr>)}


                        </tbody>
                    </table>
                </div>
                <div className="bg-white font-WorkSans sm:rounded-b-lg py-6 px-4">
                    <div className="flex gap-2 flex-col md:flex-row">
                        <input type="text" className='bg-gray-100 px-4 py-3  rounded outline-none text-DarkGray font-Ubuntu' placeholder='Coupon Code' />
                        <button className='bg-LightBlue shadow-2 text-white rounded px-4 py-2'>Apply Coupon</button>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default CartProducts