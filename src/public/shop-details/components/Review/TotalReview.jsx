import React from 'react'
import profile from '../../assets/profile.jpg'
import { RatingStar } from '../../../search/components/typography/Typography'
import { ReviewCard } from '../../../shared/components/cards/Card'
const TotalReview = () => {
    return (
        <section className='py-4 md:py-8 px-4 md:px-8 mt-4 rounded-md bg-white'>
            <h2 className='text-center text-Green font-WorkSans'>Reviews</h2>
            <div className="reviews-wrapper grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8 ">
                {
                    [...new Array(6)].map(item =>
                        <ReviewCard img={profile} />
                    )
                }

            </div>
        </section>)
}

export default TotalReview