import React from 'react'
import { DefaultModalWide } from './DefaultModal'
import productPhoto from '../../assets/popupPhoto.png'
import company from '../../assets/company.jpg'
import { MdAdd, MdRemove, MdStar } from 'react-icons/md'
import { BiHeart } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { IoIosHeart } from 'react-icons/io'
const ProductViewModal = ({ modalStatus, setModalStatus }) => {
    return (
        <DefaultModalWide setModalStatus={setModalStatus} modalStatus={modalStatus}>
            <div className="flex h-full flex-col lg:flex-row">


                <div className="w-full md:h-full h-auto bg-red-500">
                    <img className='w-full h-full object-cover' src={productPhoto} alt="" />

                </div>
                <div className="shrink-0 w-[400px]">
                    <div className="content-wrapper h-fit w-full bg-white px-4 py-4 rounded">
                        <h1 className="title text-lg lg:text-2xl font-WorkSans text-gray-800">Black Short Tops</h1>
                        <div className="rating flex items-center gap-1">
                            <MdStar className='text-YellowDark' />
                            <MdStar className='text-YellowDark' />
                            <MdStar className='text-YellowDark' />
                            <MdStar className='text-YellowDark' />
                            <MdStar className='text-YellowDark' />
                        </div>
                        <div className="flex justify-between mt-2">
                            <p className='text-darkBlue text-2xl font-Ubuntu'>$75.0</p>
                            <p className='text-sm text-darkBlue font-WorkSans'>50 In Stock</p>
                        </div>
                        <div className="short-desc mt-2 tracking-tight">
                            <p className='text-sm md:text-base text-DarkGray font-WorkSans'>Masha Allah Alhamdulillah ,,, NHB SHOP Kurtis are made in Bangladesh. We cater to all needs at low prices. If you want to buy a new dress at low price then this dress is for you Girls of any age with slim body can wear it  Our clothes are available up to 40 body. Follow our store, stay with us and buy new dresses</p>
                        </div>
                        <div className="control mt-4  flex items-start flex-col  gap-4">
                            <div className="flex gap-4">
                                <div className="quantity flex border border-gray-200 px-4 py-2 rounded w-fit">
                                    <button className=''><MdRemove /> </button>
                                    <input className='max-w-[50px] mx-2 border-x border-gray-200 text-center outline-none' type="text" value={1} />
                                    <button className=''><MdAdd /></button>
                                </div>
                                <button className='bg-rose-500 px-3 text-lg text-white rounded-md'>
                                    <BiHeart />
                                </button>
                            </div>
                            <div className="flex items-center gap-4">
                                <button className='bg-LightBlue px-8 py-2.5 rounded text-white font-WorkSans'>Add to cart</button>
                                <button className='bg-LightBlue px-8 py-2.5 rounded text-white font-WorkSans'>Buy now</button>
                            </div>
                        </div>


                        <div className="seller-info-area mt-4">
                            <div className="seller-info-wrapper flex items-center gap-4">
                                <Link onClick={() => document.body.classList.remove('overflow-hidden')} to="/stores/samsung.512.bd/?tab=products" className="shrink-0">
                                    <img className='w-10 sm:w-12 h-10 sm:h-12 rounded-full' src={company} alt="" />
                                </Link>
                                <div className="">
                                    <Link onClick={() => document.body.classList.remove('overflow-hidden')} to={'/stores/samsung.512.bd/?tab=profile'} className='font-WorkSans text-gray-800 font-medium'>SamSung</Link>
                                    <p className='font-WorkSans text-sm text-gray-600 font-medium'>(451) Rating</p>

                                </div>
                                <Link onClick={() => document.body.classList.remove('overflow-hidden')} to={'/profile/inbox?chat=ecloset.samsung'} className='px-4 py-2 rounded-sm bg-GreenLight font-WorkSans  text-white'>
                                    <span className='block'>Send Message</span>

                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </DefaultModalWide>

    )
}

export default ProductViewModal