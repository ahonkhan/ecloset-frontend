import React, { useEffect } from 'react'

const DefaultWrapper = ({ children }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className='lg:pl-[60px]'>{children}</div>
    )
}

export default DefaultWrapper