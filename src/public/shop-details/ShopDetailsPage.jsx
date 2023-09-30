import React, { useEffect, useState } from 'react'
import { PageAnimation } from '../shared/components/page/PageAnimation'
import DefaultWrapper from '../shared/components/wrappers/DefaultWrapper'
import ShopHeader from './components/ShopHeader/ShopHeader'
import ShopMenu from './components/ShopMenu/ShopMenu'
import { AnimatePresence, motion } from 'framer-motion'
import ProductWrapper from './components/wrappers/ProductWrapper'
import { useSearchParams } from 'react-router-dom'

const ShopDetailsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)

    }, [])
    const [activeMenu, setActiveMenu] = useState(0);
    const [URLSearchParams] = useSearchParams();
    useEffect(() => {
        switch (URLSearchParams.get('tab')) {
            case 'products':
                setActiveMenu(0);
                break;
            case 'profile':
                setActiveMenu(1);
                break;
            case 'events':
                setActiveMenu(2);
                break;

            default:
                setActiveMenu(0);
                break;
        }
    }, [])
    return (
        <PageAnimation>
            <DefaultWrapper>
                <ShopHeader />
                <ShopMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
                <section className="site-container">
                    <AnimatePresence>
                        {
                            activeMenu === 0 && (
                                <motion.div style={{ 'overflow': 'clip' }} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
                                    <ProductWrapper />
                                </motion.div>

                            )
                        }
                    </AnimatePresence>
                </section>
            </DefaultWrapper>
        </PageAnimation>
    )
}

export default ShopDetailsPage