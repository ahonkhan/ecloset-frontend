import React from 'react'
import AddReviewForm from './AddReviewForm'
import RatingsDisplay from './RatingsDisplay'
import TotalReview from './TotalReview'

const ReviewsTab = () => {
    return (
        <div className="reviews ">
            <RatingsDisplay />
            <AddReviewForm />
            <TotalReview />
        </div>
    )
}

export default ReviewsTab