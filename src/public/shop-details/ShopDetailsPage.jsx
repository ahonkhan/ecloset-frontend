import React, { useEffect, useState } from 'react'
import { PageAnimation } from '../shared/components/page/PageAnimation'
import DefaultWrapper from '../shared/components/wrappers/DefaultWrapper'
import ShopHeader from './components/ShopHeader/ShopHeader'
import ShopMenu from './components/ShopMenu/ShopMenu'
import { AnimatePresence, motion } from 'framer-motion'
import ProductWrapper from './components/wrappers/ProductWrapper'
import { useSearchParams } from 'react-router-dom'
import ProfileWrapper from './components/wrappers/ProfileWrapper'
import EventWrapper from './components/wrappers/EventWrapper'

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
            case 'overview':
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
        <>
            <PageAnimation>
                <DefaultWrapper>
                    <ShopHeader />
                    <ShopMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
                    <section className="site-container py-4">
                        <AnimatePresence>
                            {
                                activeMenu === 0 && (
                                    <motion.div style={{ 'overflow': 'clip' }} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
                                        <ProductWrapper />
                                    </motion.div>

                                )
                            }
                        </AnimatePresence>
                        <AnimatePresence>
                            {
                                activeMenu === 1 && (
                                    <motion.div style={{ 'overflow': 'clip' }} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
                                        <ProfileWrapper />
                                    </motion.div>

                                )
                            }
                        </AnimatePresence>
                        <AnimatePresence>
                            {
                                activeMenu === 2 && (
                                    <motion.div style={{ 'overflow': 'clip' }} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
                                        <EventWrapper />
                                    </motion.div>

                                )
                            }
                        </AnimatePresence>
                    </section>
                    <div className="mt-8"></div>

                </DefaultWrapper>
            </PageAnimation>
        </>
    )
}

export default ShopDetailsPage