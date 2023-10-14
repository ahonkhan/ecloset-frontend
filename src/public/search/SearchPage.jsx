import React, { useEffect } from 'react'
import DefaultWrapper from '../shared/components/wrappers/DefaultWrapper'
import Breadcrumb from '../shared/components/breadcrumb/Breadcrumb'
import { animate, motion } from 'framer-motion'
import ProductWrapper from './components/wrapper/ProductWrapper'
import { SharedContext } from '../shared/context/Context'
import SearchBreadCrumb from './components/breadcrumb/SearchBreadCrumb'
import { SearchContext } from './context/SearchContext'
import LoadingPage from '../shared/components/page/LoadingPage'
import { PageAnimation } from '../shared/components/page/PageAnimation'
const SearchPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)

    }, [])
    return (
        <PageAnimation>
            <SharedContext>
                <SearchContext>

                    <DefaultWrapper>
                        <SearchBreadCrumb />
                        <ProductWrapper />
                        <div className="mt-8"></div>
                    </DefaultWrapper >


                </SearchContext>
            </SharedContext>
        </PageAnimation>

    )
}

export default SearchPage