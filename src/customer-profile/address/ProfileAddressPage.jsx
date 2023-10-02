import React, { useContext, useEffect, useState } from 'react'
import { PageAnimation, PageAnimationProfile } from '../../public/shared/components/page/PageAnimation'
import { BsPlusLg } from 'react-icons/bs'
import { BiShow } from 'react-icons/bi'
import { MdOutlineDeleteOutline } from 'react-icons/md'
import AddressItem from './components/address-item/AddressItem'
import AddressModal from './components/address-item/AddressModal'
import { AnimatePresence, motion } from 'framer-motion'
const ProfileAddressPage = () => {
    const [modalStatus, setModalStatus] = useState(false)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <PageAnimationProfile>
                <div className="wrapper min-h-[510px] profile-container">
                    <div className="header flex justify-between items-center font-WorkSans">
                        <p className='profile-title'>Address Book</p>

                        <button onClick={() => { setModalStatus(true); document.querySelector('body').classList.add('overflow-hidden') }} className='flex rounded items-center duration-300 group justify-center px-4 py-2 gap-2 bg-GreenLight text-white'>
                            <span>Add new</span>
                            <span className='w-6 h-6 bg-Green flex items-center duration-300 group-active:scale-95 justify-center rounded-full bg-opacity-40'> <BsPlusLg className='text-white' /> </span>
                        </button>
                    </div>
                    <div className="address-wrapper mt-8 flex flex-col gap-2  select-none">
                        <AddressItem />
                    </div>

                </div>

            </PageAnimationProfile>
            <AnimatePresence>
                {
                    modalStatus && (
                        <AddressModal setModalStatus={setModalStatus} modalStatus={modalStatus} />
                    )
                }
            </AnimatePresence>

        </>)
}

export default ProfileAddressPage