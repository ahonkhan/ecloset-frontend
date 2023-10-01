import React from 'react'
import { RatingProgressBar, RatingStar } from '../../../search/components/typography/Typography'

const ReviewRatingDisplay = () => {
    return (
        <div className="rating flex gap-8 md:gap-16 flex-col md:flex-row py-4 md:py-8 px-4 md:px-8 mt-4 rounded-md bg-white">
            <div className="rating-display shrink-0">
                <h1 className='text-4xl text-gray-800 font-medium font-Ubuntu'>4.1</h1>
                <p className='text-sm text-DarkGray font-WorkSans mt-2'>Based on 410 Reviews</p>
            </div>

            <div className="list-wrapper">
                <div className="rating-list items-center flex gap-4">
                    <div className="rating-star">
                        <RatingStar count={5} />
                    </div>
                    <div className="progress w-[100%] md:w-[300px]">
                        <RatingProgressBar progress={90} />
                    </div>
                    <div className='percent text-gray-600 font-WorkSans'><p>90%</p></div>
                </div>
                <div className="rating-list items-center flex gap-4">
                    <div className="rating-star">
                        <RatingStar count={4} />
                    </div>
                    <div className="progress w-full md:w-[300px]">
                        <RatingProgressBar progress={45} />
                    </div>
                    <div className='percent text-gray-600 font-WorkSans'><p>45%</p></div>
                </div>
                <div className="rating-list items-center flex gap-4">
                    <div className="rating-star">
                        <RatingStar count={3} />
                    </div>
                    <div className="progress w-full md:w-[300px]">
                        <RatingProgressBar progress={25} />
                    </div>
                    <div className='percent text-gray-600 font-WorkSans'><p>25%</p></div>
                </div>
                <div className="rating-list items-center flex gap-4">
                    <div className="rating-star">
                        <RatingStar count={2} />
                    </div>
                    <div className="progress w-full md:w-[300px]">
                        <RatingProgressBar progress={10} />
                    </div>
                    <div className='percent text-gray-600 font-WorkSans'><p>10%</p></div>
                </div>
                <div className="rating-list items-center flex gap-4">
                    <div className="rating-star">
                        <RatingStar count={1} />
                    </div>
                    <div className="progress w-full md:w-[300px]">
                        <RatingProgressBar progress={5} />
                    </div>
                    <div className='percent text-gray-600 font-WorkSans'><p>5%</p></div>
                </div>
            </div>
        </div>)
}

export default ReviewRatingDisplay