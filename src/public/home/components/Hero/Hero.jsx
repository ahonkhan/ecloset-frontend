import React from 'react'
import heroImg1 from '../../assets/slider-4.jpg'
import heroImg2 from '../../assets/slider-5.jpg'
import heroImg3 from '../../assets/slider-6.jpg'
import eventLogo from '../../assets/event-logo.png'
import eventBg from '../../assets/event-bg.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <section className='site-container mt-4'>
            <div className="flex gap-6 flex-col md:flex-row">
                <div className="img-slider w-full h-fit overflow-hidden">
                    <Swiper
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <Link to={''}>
                                <img src={heroImg1} className='rounded-xl lg:h-[400px]' alt="" />

                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to={''}>
                                <img src={heroImg2} className='rounded-xl lg:h-[400px]' alt="" />

                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to={''}>
                                <img src={heroImg3} className='rounded-xl lg:h-[400px]' alt="" />

                            </Link>
                        </SwiperSlide>

                    </Swiper>
                </div>
                <div className="upcoming-events shrink-0 md:w-[280px] lg:w-[400px] xl:w-[500px] py-4 px-4 bg-white rounded-xl h-[400px] md:h-auto lg:h-[400px]">
                    <h2 className='font-WorkSans text-DarkGray font-medium'>Upcoming events</h2>
                    <div className="event-wrapper mt-4 flex flex-col gap-4 h-[330px] overflow-y-auto pr-4" style={{ 'scrollbarWidth': 'none' }}>
                        <div style={{ 'backgroundImage': "url('" + eventBg + "')" }} className="event-item h-[150px] items-center bg-cover bg-center bg-opacity-30 bg-rose-500  py-4 px-8 rounded-xl grid grid-cols-2">
                            <div className="" >
                                <img src={eventLogo} alt="" />
                                <p className='text-GreenLight font-Poppins font-semibold text-lg'>Event Starts in</p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-GreenLight text-white font-WorkSans font-medium py-1 px-2 rounded-md">
                                    <p className='p-2 text-xl text-center'>10<span>d</span></p>
                                </div>
                                <div className="bg-GreenLight text-white font-WorkSans font-medium py-1 px-2 rounded-md">
                                    <p className='p-2 text-xl text-center'>1<span>h</span></p>
                                </div>
                                <div className="bg-GreenLight text-white font-WorkSans font-medium py-1 px-2 rounded-md">
                                    <p className='p-2 text-xl text-center'>41<span>m</span></p>
                                </div>
                                <div className="bg-GreenLight text-white font-WorkSans font-medium py-1 px-2 rounded-md">
                                    <p className='p-2 text-xl text-center'>53<span>s</span></p>
                                </div>

                            </div>
                        </div>

                        <div style={{ 'backgroundImage': "url('" + eventBg + "')" }} className="event-item h-[150px] items-center bg-cover bg-center bg-opacity-30 bg-rose-500  py-4 px-8 rounded-xl grid grid-cols-2">
                            <div className="" >
                                <img src={eventLogo} alt="" />
                                <p className='text-GreenLight font-Poppins font-semibold text-lg'>Event Starts in</p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-GreenLight text-white font-WorkSans font-medium py-1 px-2 rounded-md">
                                    <p className='p-2 text-xl text-center'>10<span>d</span></p>
                                </div>
                                <div className="bg-GreenLight text-white font-WorkSans font-medium py-1 px-2 rounded-md">
                                    <p className='p-2 text-xl text-center'>1<span>h</span></p>
                                </div>
                                <div className="bg-GreenLight text-white font-WorkSans font-medium py-1 px-2 rounded-md">
                                    <p className='p-2 text-xl text-center'>41<span>m</span></p>
                                </div>
                                <div className="bg-GreenLight text-white font-WorkSans font-medium py-1 px-2 rounded-md">
                                    <p className='p-2 text-xl text-center'>53<span>s</span></p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero