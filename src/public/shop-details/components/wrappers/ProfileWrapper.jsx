import React from 'react'
import ProfileWrapperInfo from './ProfileWrapperInfo'
import ReviewRatingDisplay from '../Review/ReviewRatingDisplay'
import './wrapper.scss';
import TotalReview from '../Review/TotalReview';
const ProfileWrapper = () => {
    return (
        <section>
            <ProfileWrapperInfo />
            <ReviewRatingDisplay />
            <TotalReview  />
        </section>
    )
}

export default ProfileWrapper