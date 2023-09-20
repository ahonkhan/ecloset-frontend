import React from 'react'
import DefaultWrapper from '../shared/components/wrappers/DefaultWrapper'
import Breadcrumb from '../shared/components/breadcrumb/Breadcrumb'
import { animate, motion } from 'framer-motion'
const SearchPage = () => {
    return (
        <motion.section initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
            <DefaultWrapper>
                <Breadcrumb />
            </DefaultWrapper >
        </motion.section >
    )
}

export default SearchPage