import React, { useEffect } from 'react'
import { PageAnimation, PageAnimationProfile } from '../../public/shared/components/page/PageAnimation'
import SecurityTabs from './components/tabs/SecurityTabs'

const ProfileSecurityPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    return (
        <PageAnimationProfile>
            <div className="wrapper min-h-[510px]  profile-container">
                <h2 className='profile-title'>Password and security</h2>
                <SecurityTabs />
            </div>
        </PageAnimationProfile>
    )
}

export default ProfileSecurityPage