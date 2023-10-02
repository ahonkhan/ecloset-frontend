import React, { useState } from 'react'
import { SectionTitle } from '../../../shared/components/typography/Typography'
import { ProductCard, ProductCardResponsive, ProductCardResponsiveModalLess } from '../../../shared/components/cards/Card'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ProductViewModal from '../../../shared/components/modals/ProductViewModal';
import { AnimatePresence } from 'framer-motion';

const TrendingProduct = () => {
    const [modalStatus, setModalStatus] = useState(false)

    return (
        <>
            <section className="trendingProducts mt-8 site-container">
                <SectionTitle>Trending Products</SectionTitle>
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
                    <SwiperSlide><ProductCardResponsiveModalLess modalStatus={modalStatus} setModalStatus={setModalStatus} /></SwiperSlide>
                    <SwiperSlide><ProductCardResponsiveModalLess modalStatus={modalStatus} setModalStatus={setModalStatus} /></SwiperSlide>
                    <SwiperSlide><ProductCardResponsiveModalLess modalStatus={modalStatus} setModalStatus={setModalStatus} /></SwiperSlide>
                    <SwiperSlide><ProductCardResponsiveModalLess modalStatus={modalStatus} setModalStatus={setModalStatus} /></SwiperSlide>
                    <SwiperSlide><ProductCardResponsiveModalLess modalStatus={modalStatus} setModalStatus={setModalStatus} /></SwiperSlide>
                    <SwiperSlide><ProductCardResponsiveModalLess modalStatus={modalStatus} setModalStatus={setModalStatus} /></SwiperSlide>

                </Swiper>
            </section>
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

export default TrendingProduct