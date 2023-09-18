import React from 'react'
import { MobileNavbar } from './Navbar'
import { MobileMenu } from './Menu'
import { MobileSidebar } from '../Sidebar/Sidebar'

const MobileHeader = () => {
    return (
        <header className='lg:hidden'>
            <MobileNavbar />
            <MobileMenu />
            <MobileSidebar />
        </header>
    )
}

export default MobileHeader