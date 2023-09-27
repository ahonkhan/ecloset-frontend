import React, { useEffect } from 'react'
import { PageAnimation } from '../../public/shared/components/page/PageAnimation'
import { BsPlusLg } from 'react-icons/bs'
import { BiShow } from 'react-icons/bi'
import { MdOutlineDeleteOutline } from 'react-icons/md'
import AddressItem from './components/address-item/AddressItem'
const ProfileAddressPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <PageAnimation>
            <div className="wrapper min-h-[510px]">
                <div className="header md:px-4 flex justify-between items-center font-WorkSans">
                    <p className='text-2xl text-gray-800 font-medium'>Address Book</p>
                    <button className='flex rounded items-center duration-300 group justify-center px-4 py-2 gap-2 bg-GreenLight text-white'>
                        <span>Add new</span>
                        <span className='w-6 h-6 bg-Green flex items-center duration-300 group-active:scale-95 justify-center rounded-full bg-opacity-40'> <BsPlusLg className='text-white' /> </span>
                    </button>
                </div>
                <div className="address-wrapper md:px-4 mt-8 flex flex-col gap-2  select-none">
                    <AddressItem />

                </div>
            </div>
        </PageAnimation>
    )
}

export default ProfileAddressPage