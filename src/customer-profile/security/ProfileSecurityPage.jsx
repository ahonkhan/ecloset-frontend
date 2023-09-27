import React, { useEffect } from 'react'
import { PageAnimation } from '../../public/shared/components/page/PageAnimation'

const ProfileSecurityPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = 'E-closet | Profile Security'
    })
    return (
        <PageAnimation>
            this is security profile
        </PageAnimation>
    )
}

export default ProfileSecurityPage