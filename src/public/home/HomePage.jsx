import React, { useContext, useEffect } from 'react'
import DefaultWrapper from '../shared/components/wrappers/DefaultWrapper'
import Hero from './components/Hero/Hero'
import { ProductCard } from '../shared/components/cards/Card'
import Category from './components/category/Category'
import TrendingProduct from './components/products/TrendingProduct'
import Footer from '../shared/footer/Footer'
import { motion } from 'framer-motion'
import LoadingPage from '../shared/components/page/LoadingPage'
import { PageAnimation } from '../shared/components/page/PageAnimation'
const HomePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);

    }, [])

    return (

        <>
            <PageAnimation>
                <DefaultWrapper>
                    <Hero />
                    <Category />
                    <TrendingProduct />

                </DefaultWrapper>
            </PageAnimation>
        </>


    )
}

export default HomePage