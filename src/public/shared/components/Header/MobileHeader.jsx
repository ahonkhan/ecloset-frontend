import React from 'react'
import { MobileNavbar } from './Navbar'
import { MobileMenu } from './Menu'
import { MobileSidebar } from '../Sidebar/Sidebar'

const MobileHeader = () => {
    return (
        <>
            <MobileNavbar />

            <header className='lg:hidden'>
                <MobileMenu />
                <MobileSidebar />
            </header>
        </>
    )
}

export default MobileHeader