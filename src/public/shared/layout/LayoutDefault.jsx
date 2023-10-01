import React, { useContext, useEffect } from 'react'
import Header from '../components/Header/Header'
import DefaultWrapper from '../components/wrappers/DefaultWrapper'
import Footer from '../footer/Footer'
import { GetGlobalContext } from '../../../context/GlobalContext'

const LayoutDefault = ({ children }) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

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