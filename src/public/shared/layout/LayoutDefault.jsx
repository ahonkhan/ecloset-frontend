import React from 'react'
import Header from '../components/Header/Header'

const LayoutDefault = ({ children }) => {
    return (
        <>

            <Header />
            {children}

        </>
    )
}

export default LayoutDefault