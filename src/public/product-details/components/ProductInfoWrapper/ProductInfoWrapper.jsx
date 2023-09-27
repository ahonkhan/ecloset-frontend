import React from 'react'
import display_img from '../../assets/image.png'
import { MdAdd, MdRemove, MdStar } from 'react-icons/md'
import { ButtonAddToCart, ButtonHeart } from '../buttons/Buttons'
import ImageWrapper from '../imagewrapper/ImageWrapper'
import company from '../../assets/company.jpg'
import { Link } from 'react-router-dom'
const ProductInfoWrapper = () => {
    return (
        <div className='site-container mt-8 flex gap-8  flex-col md:flex-row'>
            <ImageWrapper />
            <div className="content-wrapper h-fit w-full bg-white px-4 py-8 rounded">
                <h1 className="title text-2xl font-WorkSans text-gray-800">Black Short Tops</h1>
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
                    <p className='text-base text-DarkGray font-WorkSans'>Masha Allah Alhamdulillah ,,, NHB SHOP Kurtis are made in Bangladesh. We cater to all needs at low prices. If you want to buy a new dress at low price then this dress is for you Girls of any age with slim body can wear it  Our clothes are available up to 40 body. Follow our store, stay with us and buy new dresses</p>
                </div>
                <div className="control mt-4  flex items-start flex-col sm:flex-row md:flex-col lg:flex-row gap-4">
                    <div className="quantity flex border border-gray-200 px-4 py-2 rounded w-fit">
                        <button className=''><MdRemove /> </button>
                        <input className='max-w-[50px] mx-2 border-x border-gray-200 text-center outline-none' type="text" value={1} />
                        <button className=''><MdAdd /></button>
                    </div>
                    <div className="flex items-center gap-4">
                        <ButtonAddToCart />
                        <ButtonHeart />
                    </div>
                </div>
                <div className="combnation mt-4 flex items-center ">
                    <p className='font-WorkSans text-Green w-[60px] shrink-0'>Sizes:</p>
                    <ul className='flex gap-1'>
                        <li className='border bg-darkBlue text-white border-gray-200 cursor-pointer  px-4  font-Ubuntu py-2 w-fit'>M</li>
                        <li className='border border-gray-200 cursor-pointer  px-4 text-gray-700 font-Ubuntu py-2 w-fit'>L</li>
                        <li className='border border-gray-200 cursor-pointer  px-4 text-gray-700 font-Ubuntu py-2 w-fit'>XXL</li>
                    </ul>

                </div>
                <div className="combnation mt-4 flex items-center ">
                    <p className='font-WorkSans text-Green w-[60px] shrink-0'>Colors:</p>
                    <ul className='flex gap-1 flex-wrap'>
                        <li className='border border-gray-200 cursor-pointer  px-4 text-gray-700 font-Ubuntu py-2 w-fit'>Black</li>
                        <li className='border border-gray-200 cursor-pointer  px-4 text-gray-700 font-Ubuntu py-2 w-fit'>Blue</li>
                        <li className='border bg-darkBlue text-white border-gray-200 cursor-pointer  px-4 font-Ubuntu py-2 w-fit'>Magenda</li>
                        <li className='border border-gray-200 cursor-pointer  px-4 text-gray-700 font-Ubuntu py-2 w-fit'>Pink</li>
                        <li className='border border-gray-200 cursor-pointer  px-4 text-gray-700 font-Ubuntu py-2 w-fit'>Orange</li>
                    </ul>

                </div>
                <div className="combnation mt-4 flex items-center ">
                    <p className='font-WorkSans text-Green w-[60px] shrink-0'>Share:</p>
                    <ul className='flex gap-1'>
                        <li className='cursor-pointer'>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="16" cy="16" r="16" fill="#40D7E1" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5424 22.8236C13.5424 22.921 13.6274 23 13.7322 23H16.4376C16.5424 23 16.6271 22.921 16.6271 22.8236V15.9448H18.5886C18.6869 15.9448 18.769 15.8745 18.7775 15.7834L18.9662 13.7108C18.9753 13.608 18.8882 13.5196 18.7769 13.5196H16.6271V12.0494C16.6271 11.7046 16.9279 11.4251 17.2987 11.4251H18.8102C18.9152 11.4251 19 11.3461 19 11.2487V9.17637C19 9.07902 18.9152 9 18.8102 9H16.2563C14.7575 9 13.5424 10.1287 13.5424 11.5214V13.5196H12.1898C12.085 13.5196 12 13.5987 12 13.696V15.7684C12 15.866 12.085 15.9448 12.1898 15.9448H13.5424V22.8236Z" fill="white" />
                            </svg>
                        </li>
                        <li className='cursor-pointer'>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="16" cy="16" r="16" fill="#55ACEE" />
                                <path d="M13.5608 21.2559C18.5139 21.2559 21.2225 17.1525 21.2225 13.5942C21.2225 13.4777 21.2201 13.3616 21.2149 13.2462C21.7407 12.8661 22.1976 12.3917 22.5582 11.8517C22.0757 12.0663 21.5564 12.2105 21.0118 12.2758C21.5677 11.9423 21.9945 11.4149 22.1958 10.7863C21.6756 11.0948 21.0993 11.3189 20.486 11.4399C19.9946 10.9165 19.2949 10.5892 18.5203 10.5892C17.0333 10.5892 15.8273 11.7951 15.8273 13.2816C15.8273 13.493 15.851 13.6985 15.8971 13.8956C13.6591 13.783 11.6744 12.7115 10.3464 11.0822C10.1153 11.48 9.98188 11.9424 9.98188 12.4357C9.98188 13.3698 10.4573 14.1947 11.1802 14.6771C10.7384 14.6635 10.3234 14.5422 9.96061 14.3404C9.96021 14.3517 9.96021 14.3627 9.96021 14.3747C9.96021 15.6789 10.8884 16.7678 12.1207 17.0145C11.8944 17.076 11.6562 17.1092 11.4106 17.1092C11.2374 17.1092 11.0685 17.0922 10.9044 17.0606C11.2473 18.1306 12.2414 18.9091 13.42 18.931C12.4984 19.6534 11.3373 20.0837 10.0755 20.0837C9.85843 20.0837 9.64388 20.0712 9.43311 20.0463C10.6249 20.8102 12.04 21.256 13.5609 21.256" fill="white" />
                            </svg>

                        </li>
                        <li className='cursor-pointer'>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="16" cy="16" r="16" fill="#FF2B2B" />
                                <g clip-path="url(#clip0_156_271)">
                                    <path d="M15.0313 18.2599C14.6638 20.1871 14.2148 22.035 12.8848 23.0002C12.4744 20.087 13.4877 17.8992 13.958 15.5766C13.1558 14.2259 14.0546 11.5079 15.7469 12.1778C17.8291 13.0014 13.9438 17.1989 16.5521 17.7231C19.2756 18.2703 20.3871 12.9978 18.6986 11.2834C16.2585 8.80742 11.5958 11.2268 12.1692 14.7716C12.3087 15.6382 13.2042 15.9012 12.5271 17.0969C10.9653 16.7508 10.4993 15.5192 10.5592 13.8772C10.6557 11.1893 12.9742 9.30753 15.2998 9.04722C18.2406 8.718 21.0007 10.1268 21.3819 12.8934C21.8112 16.0158 20.0543 19.3974 16.9098 19.1543C16.0572 19.0881 15.6996 18.6657 15.0313 18.2599Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_156_271">
                                        <rect width="14" height="14" fill="white" transform="translate(9 9)" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </li>
                        <li className='cursor-pointer'>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="16" cy="16" r="16" fill="#40D7E1" />
                                <g clip-path="url(#clip0_156_274)">
                                    <path d="M11.0219 9.711C10.0594 9.711 9.43018 10.343 9.43018 11.1736C9.43018 11.9859 10.0407 12.6359 10.9849 12.6359H11.0032C11.9844 12.6359 12.5951 11.9859 12.5951 11.1736C12.5768 10.343 11.9844 9.711 11.0219 9.711Z" fill="white" />
                                    <path d="M9.59717 13.7914H12.4107V22.2561H9.59717V13.7914Z" fill="white" />
                                    <path d="M19.3165 13.5931C17.7987 13.5931 16.7809 15.0194 16.7809 15.0194V13.7918H13.9673V22.2566H16.7808V17.5295C16.7808 17.2765 16.7991 17.0238 16.8735 16.8428C17.0769 16.3375 17.5397 15.814 18.317 15.814C19.3351 15.814 19.7423 16.5903 19.7423 17.7282V22.2566H22.5557V17.403C22.5557 14.803 21.1675 13.5931 19.3165 13.5931Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_156_274">
                                        <rect width="14" height="14" fill="white" transform="translate(9 9)" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </li>
                    </ul>

                </div>
                <div className="seller-info-area mt-4">
                    <div className="seller-info-wrapper flex items-center gap-4">
                        <Link to="/shop" className="">
                            <img className='w-12 h-12 rounded-full' src={company} alt="" />
                        </Link>
                        <div className="">
                            <Link to={'/shop'} className='font-WorkSans text-gray-800 font-medium'>SamSung</Link>
                            <p className='font-WorkSans text-sm text-gray-600 font-medium'>(451) Rating</p>

                        </div>
                        <Link to={'/profile/inbox?chat=ecloset.samsung'} className='px-4 py-2 rounded-sm bg-GreenLight font-WorkSans text-white'>Send Message</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductInfoWrapper