import React from 'react'
import { RatingProgressBar, RatingStar } from '../../../search/components/typography/Typography'
import RatingsDisplay from './RatingsDisplay'
import AddReviewForm from './AddReviewForm'

const ReviewsTab = () => {
    return (
        <div className="reviews ">
            <RatingsDisplay />
            <AddReviewForm />

        </div>
    )
}

export default ReviewsTab