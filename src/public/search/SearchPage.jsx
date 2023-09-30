import React, { useEffect } from 'react'
import DefaultWrapper from '../shared/components/wrappers/DefaultWrapper'
import Breadcrumb from '../shared/components/breadcrumb/Breadcrumb'
import { animate, motion } from 'framer-motion'
import ProductWrapper from './components/wrapper/ProductWrapper'
import { SharedContext } from '../shared/context/Context'
import SearchBreadCrumb from './components/breadcrumb/SearchBreadCrumb'
import { SearchContext } from './context/SearchContext'
const SearchPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)

    }, [])
    return (
        <SharedContext>
            <SearchContext>
                <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <DefaultWrapper>
                        <SearchBreadCrumb />
                        <ProductWrapper />
                    </DefaultWrapper >
                </motion.section >
            </SearchContext>
        </SharedContext>
    )
}

export default SearchPage