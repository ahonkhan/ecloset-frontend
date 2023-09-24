import React from 'react'
import display_img from '../../assets/image.png'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Pagination } from 'swiper/modules';

const ImageWrapper = () => {
    return (
        <div className="image-wrapper md:w-[350px] xl:w-[450px] w-full shrink-0">
            <div className="display-img shrink-0">
                <img src={display_img} className='rounded-md w-full' alt="" />
            </div>
            {/* <div className="slider-image md:grid-cols-1 mt-4 grid grid-cols-5 gap-2 ">
                <div className="slider-item ">
                    <img src={display_img} className='rounded-md' alt="" />

                </div>

            </div> */}
            <div className="mt-4 productDetailsSlider">
                <Swiper slidesPerView={5} spaceBetween={10} navigation={true} modules={[Navigation]}>
                    {
                        [...new Array(10)].map(item =>
                            <SwiperSlide>
                                <button>
                                    <img src={display_img} className='rounded-md' alt="" />
                                </button>
                            </SwiperSlide>
                        )
                    }

                </Swiper>

            </div>
        </div >)
}

export default ImageWrapper