import React, { useEffect, useState } from 'react'
import { PageAnimation, PageAnimationProfile } from '../../public/shared/components/page/PageAnimation'
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import OrderTable from './components/order-table/OrderTable';
import OrderDetails from './components/order-details/OrderDetails';
import { AnimatePresence, motion } from 'framer-motion';

const ProfileOrderPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)

    }, [])
    const [orderDetailStatus, setOrderDetailStatus] = useState(false);
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    useEffect(() => {
        if (query.get('id')) {
            setOrderDetailStatus(true);
        }

    }, [])
    return (
        <PageAnimationProfile>
            <div style={{ 'scrollbarWidth': 'thin' }} className={`relative overflow-hidden duration-200 ${orderDetailStatus ? 'min-h-[700px] overflow-y-auto' : ''}`}>
                <OrderTable setOrderDetailStatus={setOrderDetailStatus} />
                <OrderDetails orderDetailStatus={orderDetailStatus} setOrderDetailStatus={setOrderDetailStatus} />

            </div>
        </PageAnimationProfile>
    )
}

export default ProfileOrderPage