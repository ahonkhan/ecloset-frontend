import React, { useEffect, useState } from 'react'
import { PageAnimation } from '../../public/shared/components/page/PageAnimation'

import ReviewItem from './components/review-item/ReviewItem'
const MyReviewsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)

    }, [])
    return (
        <PageAnimation>
            <div className="min-h-[510px]">
                {
                    [...new Array(6)].map(item =>
                        <ReviewItem />
                    )
                }
            </div>
        </PageAnimation>
    )
}

export default MyReviewsPage