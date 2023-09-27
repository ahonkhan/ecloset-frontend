import React, { useEffect } from 'react'
import { PageAnimation } from '../../public/shared/components/page/PageAnimation'
import { MdAdd, MdAddShoppingCart, MdChevronLeft, MdChevronRight, MdRemove } from 'react-icons/md'
import img from './assets/image.png'
import { Link } from 'react-router-dom'
import { AiOutlineArrowRight, AiOutlineShoppingCart } from 'react-icons/ai'
const WishlistPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)

    }, [])
    return (
        <PageAnimation>
            <div className="min-h-[510px]">
                <div className="overflow-x-auto" style={{ 'scrollbarWidth': 'thin' }}>

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
                                    Add
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    View
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
                                    <td className="px-2 py-3">
                                        <button className='hover:bg-gray-200 duration-200 py-2 px-4 rounded'>
                                            <MdAddShoppingCart />
                                        </button>

                                    </td>
                                    <td className="px-2 py-3">
                                        <Link to={'/products/electronics-iron'} className='group'>
                                            <button className='group-hover:bg-gray-200 duration-200 py-2 px-4 rounded'>
                                                <AiOutlineArrowRight />
                                            </button>
                                        </Link>
                                    </td>
                                </tr>)}


                        </tbody>
                    </table>
                </div>
                <div className="flex text-gray-500 mt-4 font-WorkSans justify-end gap-4 items-center">
                    <div className="">
                        <p>1 of <span>10</span> </p>
                    </div>
                    <div className="flex text-xl gap-4 items-center">
                        <button>
                            <MdChevronLeft />
                        </button>
                        <button>
                            <MdChevronRight />
                        </button>
                    </div>
                </div>
            </div>
        </PageAnimation>
    )
}

export default WishlistPage