import React, { useEffect } from 'react'
import { PageAnimation } from '../../public/shared/components/page/PageAnimation'
import profile from './assets/profile.jpg'
import { AiOutlineCamera, AiOutlineCheck } from 'react-icons/ai'
import { MdCameraAlt, MdClose } from 'react-icons/md'
import { InputProfile, SelectDefault } from '../shared/components/input-fields/InputField'
import { range } from '../../utils/Library'

const ProfileHomePage = () => {
    let date = new Date();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <PageAnimation>
            <div className="wrapper">
                <div className="flex items-center justify-center">
                    <div className="profile-wrapper relative  w-[100px] h-[100px] md:w-[150px] md:h-[150px] border-4 border-LightBlue shadow-1  rounded-full">
                        <img className='w-full h-full rounded-full' src={profile} alt="" />
                        <button className='w-8 h-8 absolute bottom-2 right-2 bg-[#55ACEE]  shadow-2  text-white rounded-full flex items-center justify-center'>
                            <MdCameraAlt />
                        </button>
                    </div>
                </div>
                <div className="details-wrapper mt-8">
                    <form action="" onSubmit={(e) => e.preventDefault()}>
                        <div className="flex flex-col gap-2">
                            <div className="input-group grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="">
                                    <InputProfile type={'text'} value={'Md Aohinuzzaman'} placeholder={'First Name'} />

                                </div>
                                <div className="">
                                    <InputProfile type={'text'} value={'Ahon'} placeholder={'First Name'} />
                                </div>

                            </div>
                            <div className="">
                                <InputProfile type={'text'} value={'+8801313386702'} placeholder={'Phone Number'} />
                            </div>
                            <div className="input-group grid grid-cols-1 sm:grid-cols-2 gap-4">

                                <div className="">
                                    <SelectDefault data={['Bangladesh', 'Japan']} placeholder={'Bangladesh'} />
                                </div>
                                <div className="">
                                    <SelectDefault data={['Dhaka', 'Rangpur']} placeholder={'Rangpur'} />
                                </div>
                            </div>
                            <div className="input-group grid grid-cols-1 sm:grid-cols-2 gap-4">

                                <div className="">
                                    <InputProfile type={'text'} value={'Engineer'} placeholder={'Profession'} />
                                </div>
                                <div className="input-group grid grid-cols-1 sm:grid-cols-3 gap-4">

                                    <div className="">
                                        <SelectDefault data={range(1, 12)} placeholder={'12'} preText="Month" />
                                    </div>
                                    <div className="">
                                        <SelectDefault data={range(1, 31)} placeholder={'27'} preText="Day" />
                                    </div>

                                    <div className="">
                                        <SelectDefault data={range(1975, date.getFullYear())} placeholder={'2004'} preText="Year" />
                                    </div>

                                </div>
                            </div>

                            <div className="flex justify-center sm:justify-start items-center gap-2 mt-8">
                                <button className='flex bg-rose-500 text-white font-WorkSans font-medium  px-6 py-2 rounded items-center gap-2'>
                                    <MdClose />
                                    <span>Reset</span>
                                </button>
                                <button className='flex bg-green-500 text-white font-WorkSans font-medium  px-6 py-2 rounded items-center gap-2'>
                                    <AiOutlineCheck />
                                    <span>Update</span>
                                </button>
                            </div>

                        </div>
                    </form>

                </div>
            </div>
        </PageAnimation >
    )
}

export default ProfileHomePage