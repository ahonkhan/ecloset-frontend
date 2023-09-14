import React from 'react'
import { Navbar } from './Navbar'
import { DesktopMenu } from './Menu'
import { DesktopSidebar } from '../Sidebar/Sidebar'

const DesktopHeader = () => {
    return (
        <header className='bg-white hidden lg:block'>
            <Navbar />
            <DesktopMenu />
            <DesktopSidebar />
        </header>
    )
}

export default DesktopHeader