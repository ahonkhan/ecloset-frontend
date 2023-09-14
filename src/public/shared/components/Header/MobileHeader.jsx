import React from 'react'
import { MobileNavbar } from './Navbar'
import { MobileMenu } from './Menu'

const MobileHeader = () => {
    return (
        <header className='lg:hidden'>
            <MobileNavbar />
            <MobileMenu />
        </header>
    )
}

export default MobileHeader