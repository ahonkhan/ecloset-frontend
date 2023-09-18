import React from 'react'
import { SectionTitle } from '../../../shared/components/typography/Typography'
import { ProductCard } from '../../../shared/components/cards/Card'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const TrendingProduct = () => {
    return (
        <section className="trendingProducts mt-8 site-container">
            <SectionTitle>Trending Products</SectionTitle>
            {/* <div className="wrapper grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-y-8 gap-4">




            </div> */}
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                navigation={true}
                breakpoints={{
                    480: {
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
                <SwiperSlide><ProductCard /></SwiperSlide>
                <SwiperSlide><ProductCard /></SwiperSlide>
                <SwiperSlide><ProductCard /></SwiperSlide>
                <SwiperSlide><ProductCard /></SwiperSlide>
                <SwiperSlide><ProductCard /></SwiperSlide>
                <SwiperSlide><ProductCard /></SwiperSlide>
                <SwiperSlide><ProductCard /></SwiperSlide>

            </Swiper>
        </section>
    )
}

export default TrendingProduct