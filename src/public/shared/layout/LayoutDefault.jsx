import React from 'react'
import Header from '../components/Header/Header'
import DefaultWrapper from '../components/wrappers/DefaultWrapper'
import Footer from '../footer/Footer'

const LayoutDefault = ({ children }) => {
    return (
        <>

            <Header />
            {children}
            <DefaultWrapper>
                <Footer />
            </DefaultWrapper>

        </>
    )
}

export default LayoutDefault