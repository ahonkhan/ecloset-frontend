import React from 'react'
import profile from '../../assets/profile.jpg'
import { RatingStar } from '../../../search/components/typography/Typography'
const TotalReview = () => {
    return (
        <section className='py-4 md:py-8 px-4 md:px-8 mt-4 rounded-md bg-white'>
            <h2 className='text-center text-Green font-WorkSans'>Reviews</h2>
            <div className="reviews-wrapper grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8 ">
                <div className="review-item cursor-pointer flex gap-4 border-b pb-4">
                    <div className="profile shrink-0">
                        <img className='w-[80px] h-[80px] object-cover object-top rounded-full ' src={profile} alt="" />
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
                <div className="review-item cursor-pointer flex gap-4 border-b pb-4">
                    <div className="profile shrink-0">
                        <img className='w-[80px] h-[80px] object-cover object-top rounded-full ' src={profile} alt="" />
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
                <div className="review-item cursor-pointer flex gap-4 border-b pb-4">
                    <div className="profile shrink-0">
                        <img className='w-[80px] h-[80px] object-cover object-top rounded-full ' src={profile} alt="" />
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
                <div className="review-item cursor-pointer flex gap-4 border-b pb-4">
                    <div className="profile shrink-0">
                        <img className='w-[80px] h-[80px] object-cover object-top rounded-full ' src={profile} alt="" />
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


            </div>
        </section>
    )
}

export default TotalReview