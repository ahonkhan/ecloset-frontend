import React, { useEffect, useState } from 'react'
import { PageAnimation, PageAnimationProfile } from '../../public/shared/components/page/PageAnimation'

import ReviewItem from './components/review-item/ReviewItem'
const MyReviewsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)

    }, [])
    return (
        <PageAnimationProfile>
            <div className="min-h-[510px]">
                {
                    [...new Array(6)].map(item =>
                        <ReviewItem />
                    )
                }
            </div>
        </PageAnimationProfile>
    )
}

export default MyReviewsPage