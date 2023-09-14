import React from 'react'
import DesktopHeader from './DesktopHeader'
import MobileHeader from './MobileHeader'
import { SharedContext } from '../../context/Context'
const Header = () => {
    return (
        <SharedContext>
            <DesktopHeader />
            <MobileHeader />
        </SharedContext>
    )
}

export default Header