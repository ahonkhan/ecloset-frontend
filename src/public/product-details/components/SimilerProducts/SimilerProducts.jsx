import React, { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { ProductCard, ProductCardResponsive, ProductCardResponsiveModalLess } from '../../../shared/components/cards/Card'
import { AnimatePresence, motion } from 'framer-motion';
import ProductViewModal from '../../../shared/components/modals/ProductViewModal';

const SimilerProducts = () => {
    const [modalStatus, setModalStatus] = useState(false)
    return (
        <>

            <section className="SimilerProducts mt-8 site-container">

                <h1 className='text-3xl mt-8 mb-8 font-WorkSans text-gray-700 text-center'><span className='text-darkBlue'>Similer</span> Products</h1>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    navigation={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                        1324: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },
                    }}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><ProductCardResponsiveModalLess setModalStatus={setModalStatus} modalStatus={modalStatus} /></SwiperSlide>
                    <SwiperSlide><ProductCardResponsiveModalLess setModalStatus={setModalStatus} modalStatus={modalStatus} /></SwiperSlide>
                    <SwiperSlide><ProductCardResponsiveModalLess setModalStatus={setModalStatus} modalStatus={modalStatus} /></SwiperSlide>
                    <SwiperSlide><ProductCardResponsiveModalLess setModalStatus={setModalStatus} modalStatus={modalStatus} /></SwiperSlide>
                    <SwiperSlide><ProductCardResponsiveModalLess setModalStatus={setModalStatus} modalStatus={modalStatus} /></SwiperSlide>
                    <SwiperSlide><ProductCardResponsiveModalLess setModalStatus={setModalStatus} modalStatus={modalStatus} /></SwiperSlide>
                    <SwiperSlide><ProductCardResponsiveModalLess setModalStatus={setModalStatus} modalStatus={modalStatus} /></SwiperSlide>


                </Swiper>
            </section>
            <AnimatePresence>
                {
                    modalStatus && (
                        <motion.div transition={{ duration: 0.5 }}>

                            <ProductViewModal setModalStatus={setModalStatus} modalStatus={modalStatus} />

                        </motion.div>
                    )
                }
            </AnimatePresence>
        </>
    )
}

export default SimilerProducts
