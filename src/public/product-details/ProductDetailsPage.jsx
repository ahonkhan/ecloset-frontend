import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import DefaultWrapper from '../shared/components/wrappers/DefaultWrapper'
import Breadcrumb from '../shared/components/breadcrumb/Breadcrumb'
import ProductBreadCrumb from './components/breadcrumb/ProductBreadCrumb'
import ProductInfoWrapper from './components/ProductInfoWrapper/ProductInfoWrapper'
import ProductDetailsTab from './components/ProductDetailsTab/ProductDetailsTab'
import SimilerProducts from './components/SimilerProducts/SimilerProducts'
import LoadingPage from '../shared/components/page/LoadingPage'
import { PageAnimation } from '../shared/components/page/PageAnimation'
const ProductDetailsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <PageAnimation>
                <DefaultWrapper>
                    <ProductBreadCrumb />
                    <ProductInfoWrapper />
                    <ProductDetailsTab />
                    <SimilerProducts />
                </DefaultWrapper>
            </PageAnimation>
        </>
    )
}

export default ProductDetailsPage