import { Link } from 'react-router-dom';
import img from '../../assets/headphone.png';
import style from './card.module.scss';
import { ImStarFull, ImStarHalf } from 'react-icons/im'
import { FaCartPlus } from 'react-icons/fa6'
import { AiFillEye, AiOutlineEye, AiOutlineHeart } from 'react-icons/ai'
import { RatingStar } from '../../../search/components/typography/Typography';
import { useContext, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ProductViewModal from '../modals/ProductViewModal';
export const ProductCard = () => {
    return (
        <div className={`product-card xs:max-w-[100%]  ${style.ProductCardStyle} bg-white rounded-[10px] pb-2.5`}>
            <div className={`product-img min-h-[300px] cursor-pointer relative ${style.productImgWrapper}`}>
                <img src={img} alt="" className='rounded-[10px] w-full' />
                <div className={`${style.OverLay2} py-3 px-4 w-full h-full flex justify-between flex-col  absolute top-0  rounded-[10px]`}>
                </div>
                <div className={`${style.OverLay} z-[20] py-3 overflow-hidden px-4 w-full h-full flex justify-between flex-col  absolute top-0  rounded-[10px]`}>
                    <div className="overlay-top flex justify-end flex-col items-end gap-2">
                        <button className={`${style.SlideRight} w-7 h-7 flex items-center justify-center text-lg text-DarkGray bg-white rounded-full`}><AiOutlineHeart /> </button>
                        <button className={`${style.SlideRight} w-7 h-7 flex items-center justify-center text-lg text-DarkGray bg-white rounded-full`}><AiOutlineEye /> </button>

                    </div>
                    <div className="overlay-bottom overflow-hidden w-full flex items-center justify-center">
                        <button className={`${style.FadeUp} bg-White px-4 rounded-md text-Green font-Roboto text-sm font-medium py-2 w-full`}>Add to cart</button>
                    </div>
                </div>
            </div>

            <div className="product-info px-3">
                <Link to={'/products/a4tech-gaming-keyboard'}>
                    <h2 className="title hover:text-sky-500 text-DarkGray font-WorkSans text-sm mt-[14px]">Uiisii C100 Super Bass Stereo In Ear Headphone - Black...</h2>
                </Link>
                <p className="price text-Red font-Poppins pt-2 font-medium text-lg"><span className=''>৳ </span>1400</p>
                <p className='text-xs font-WorkSans text-DarkGray'><span>৳</span> <strike>2800</strike> <span className='ml-2'>-</span> <span>50%</span> </p>
            </div>
            <div className="product-footer px-2 mt-1 flex justify-between items-center">
                <p className='flex items-center'>
                    <ImStarFull className='text-YellowDark text-sm' />
                    <ImStarFull className='text-YellowDark text-sm' />
                    <ImStarFull className='text-YellowDark text-sm' />
                    <ImStarFull className='text-YellowDark text-sm' />
                    <ImStarHalf className='text-YellowDark text-sm' />
                    <span className='ml-2 text-xs'>(250)</span>
                </p>
                <p className='text-xs text-DarkGray'>Free Shipping</p>

            </div>
        </div>
    )
}

export const ProductCardResponsive = () => {
    const [modalStatus, setModalStatus] = useState(false)
    return (
        <>

            <div className={`product-card flex sm:block xs:max-w-[100%]  ${style.ProductCardStyle} bg-white rounded-[10px] sm:pb-2.5`}>
                <div className={`product-img  md:min-h-[300px] cursor-pointer relative ${style.productImgWrapper}`}>
                    <img src={img} alt="" className='rounded-[10px] w-full' />
                    <div className={`${style.OverLay2} py-3 px-4 w-full h-full hidden sm:flex justify-between flex-col  absolute top-0  rounded-[10px]`}>
                    </div>
                    <div className={`${style.OverLay} hidden z-[20] py-3 overflow-hidden px-4 w-full h-full sm:flex justify-between flex-col  absolute top-0  rounded-[10px]`}>
                        <div className="overlay-top flex justify-end flex-col items-end gap-2">
                            <button className={`${style.SlideRight} w-7 h-7 flex items-center justify-center text-lg text-DarkGray bg-white rounded-full`}><AiOutlineHeart /> </button>
                            <button onClick={() => { setModalStatus(true); document.querySelector('body').classList.add('overflow-hidden') }} className={`${style.SlideRight} w-7 h-7 flex items-center justify-center text-lg text-DarkGray bg-white rounded-full`}><AiOutlineEye /> </button>

                        </div>
                        <div className="overlay-bottom overflow-hidden w-full flex items-center justify-center">
                            <button className={`${style.FadeUp} bg-White px-4 rounded-md text-Green font-Roboto text-sm font-medium py-2 w-full`}>Add to cart</button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-between xs:justify-center xs:gap-4">
                    <div className="">
                        <div className="product-info px-3">
                            <Link to={'/products/a4tech-gaming-keyboard'}>
                                <h2 className="title hover:text-sky-500 text-DarkGray font-WorkSans text-sm mt-[14px]">Uiisii C100 Super Bass Stereo In Ear Headphone - Black...</h2>
                            </Link>
                            <p className="price text-Red font-Poppins pt-2 font-medium text-lg"><span className=''>৳ </span>1400</p>
                            <p className='text-xs font-WorkSans text-DarkGray'><span>৳</span> <strike>2800</strike> <span className='ml-2'>-</span> <span>50%</span> </p>
                        </div>
                        <div className="product-footer flex-col xs:flex-row  px-2 mt-1 flex justify-between sm:items-center">
                            <p className='flex items-center'>
                                <ImStarFull className='text-YellowDark text-sm' />
                                <ImStarFull className='text-YellowDark text-sm' />
                                <ImStarFull className='text-YellowDark text-sm' />
                                <ImStarFull className='text-YellowDark text-sm' />
                                <ImStarHalf className='text-YellowDark text-sm' />
                                <span className='ml-2 text-xs'>(250)</span>
                            </p>
                            <p className='text-xs text-DarkGray'>Free Shipping</p>

                        </div>
                    </div>
                    <div className="sm:hidden pb-4 flex gap-2 px-4">
                        <button className={`${style.cartFooterButton}`}>
                            <AiFillEye onClick={() => { setModalStatus(true); document.querySelector('body').classList.add('overflow-hidden') }} />
                        </button>
                        <button className={`${style.cartFooterButton}`}>
                            <AiOutlineHeart />
                        </button>
                        <button className={`${style.cartFooterButton}`}>
                            <FaCartPlus />
                        </button>
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {
                    modalStatus && (
                        <ProductViewModal setModalStatus={setModalStatus} modalStatus={modalStatus} />
                    )
                }
            </AnimatePresence>
        </>
    )
}

export const ProductCardResponsiveModalLess = ({ modalStatus, setModalStatus }) => {
    return (

        <div className={`product-card flex sm:block xs:max-w-[100%]  ${style.ProductCardStyle} bg-white rounded-[10px] sm:pb-2.5`}>
            <div className={`product-img  md:min-h-[300px] cursor-pointer relative ${style.productImgWrapper}`}>
                <img src={img} alt="" className='rounded-[10px] w-full' />
                <div className={`${style.OverLay2} py-3 px-4 w-full h-full hidden sm:flex justify-between flex-col  absolute top-0  rounded-[10px]`}>
                </div>
                <div className={`${style.OverLay} hidden z-[20] py-3 overflow-hidden px-4 w-full h-full sm:flex justify-between flex-col  absolute top-0  rounded-[10px]`}>
                    <div className="overlay-top flex justify-end flex-col items-end gap-2">
                        <button className={`${style.SlideRight} w-7 h-7 flex items-center justify-center text-lg text-DarkGray bg-white rounded-full`}><AiOutlineHeart /> </button>
                        <button onClick={() => { setModalStatus(true); document.querySelector('body').classList.add('overflow-hidden') }} className={`${style.SlideRight} w-7 h-7 flex items-center justify-center text-lg text-DarkGray bg-white rounded-full`}><AiOutlineEye /> </button>

                    </div>
                    <div className="overlay-bottom overflow-hidden w-full flex items-center justify-center">
                        <button className={`${style.FadeUp} bg-White px-4 rounded-md text-Green font-Roboto text-sm font-medium py-2 w-full`}>Add to cart</button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-between xs:justify-center xs:gap-4">
                <div className="">
                    <div className="product-info px-3">
                        <Link to={'/products/a4tech-gaming-keyboard'}>
                            <h2 className="title hover:text-sky-500 text-DarkGray font-WorkSans text-sm mt-[14px]">Uiisii C100 Super Bass Stereo In Ear Headphone - Black...</h2>
                        </Link>
                        <p className="price text-Red font-Poppins pt-2 font-medium text-lg"><span className=''>৳ </span>1400</p>
                        <p className='text-xs font-WorkSans text-DarkGray'><span>৳</span> <strike>2800</strike> <span className='ml-2'>-</span> <span>50%</span> </p>
                    </div>
                    <div className="product-footer flex-col xs:flex-row  px-2 mt-1 flex justify-between sm:items-center">
                        <p className='flex items-center'>
                            <ImStarFull className='text-YellowDark text-sm' />
                            <ImStarFull className='text-YellowDark text-sm' />
                            <ImStarFull className='text-YellowDark text-sm' />
                            <ImStarFull className='text-YellowDark text-sm' />
                            <ImStarHalf className='text-YellowDark text-sm' />
                            <span className='ml-2 text-xs'>(250)</span>
                        </p>
                        <p className='text-xs text-DarkGray'>Free Shipping</p>

                    </div>
                </div>
                <div className="sm:hidden pb-4 flex gap-2 px-4">
                    <button className={`${style.cartFooterButton}`}>
                        <AiFillEye onClick={() => { setModalStatus(true); document.querySelector('body').classList.add('overflow-hidden') }} />
                    </button>
                    <button className={`${style.cartFooterButton}`}>
                        <AiOutlineHeart />
                    </button>
                    <button className={`${style.cartFooterButton}`}>
                        <FaCartPlus />
                    </button>
                </div>
            </div>
        </div>

    )
}


export const ReviewCard = ({ img }) => {
    return (
        <div className="review-item cursor-pointer flex gap-4 border-b pb-4">
            <div className="profile shrink-0">
                <img className='w-[80px] h-[80px] object-cover object-top rounded-full ' src={img} alt="" />
            </div>
            <div className="review-content">
                <p className="date text-DarkGray text-sm font-WorkSans">28 Feb, 2022</p>
                <div className="flex justify-between">
                    <p className="username text-Green font-medium font-Ubuntu">Olga Devidson</p>
                    <p className="rating">
                        <RatingStar count={5} />
                    </p>
                </div>
                <p className='text-DarkGray font-WorkSans tracking-tight mt-2 text-sm'>
                    Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm hedi corper turet ipsum dolor sit amet, consectetu Maecenas dignissim orci quis odio egestas, vitae interdum urna sagittis.
                </p>
            </div>
        </div>
    )
}


export const EventCard = () => {
    return (
        <div className='event-card text-center bg-slate-100 px-4 py-6 select-none rounded font-WorkSans'>
            <h2 className="eventCardTitle text-LightBlue text-2xl font-medium">2023 quiz to get one Laptop</h2>
            <p className='date my-1 text-gray-500'>Sunday,1 October 2023</p>
            <p className="disc  italic text-gray-600 text-sm font-Exo">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptas ipsam nam quo beatae minus recusandae harum repellendus quibusdam ullam!

            </p>
            <Link to={'/events/12445214/'} className='text-blue-500 text-sm'>Learn more</Link>
        </div>


    )
}