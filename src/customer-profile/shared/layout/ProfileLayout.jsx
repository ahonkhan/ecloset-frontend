import React, { useState } from 'react'
import DefaultWrapper from '../../../public/shared/components/wrappers/DefaultWrapper'
import { PageAnimation } from '../../../public/shared/components/page/PageAnimation'
import LayoutDefault from '../../../public/shared/layout/LayoutDefault'
import ProfileSidebar from '../components/sidebar/ProfileSidebar'
import { ProfileContext } from '../context/ProfileContext'

const ProfileLayout = ({ children }) => {

    useState(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <ProfileContext>
            <LayoutDefault>
                <DefaultWrapper>
                    <div className="site-container flex flex-col mt-8 gap-4 profile-wrapper lg:flex-row ">
                        <div className="profile-sidebar shrink-0 w-full lg:w-[65px] xl:w-[300px]  duration-300 overflow-clip rounded-md h-fit bg-white">
                            <ProfileSidebar />
                        </div>
                        <div className="profile-body rounded-md pt-2 pb-4 px-2 w-full h-fit  bg-white">
                            <PageAnimation>
                                {children}
                            </PageAnimation>
                        </div>
                    </div>

                </DefaultWrapper>
            </LayoutDefault>

        </ProfileContext>


    )
}

export default ProfileLayout


export const ProfileLayoutInbox = ({ children }) => {

    useState(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <ProfileContext>
            <LayoutDefault>
                <DefaultWrapper>
                    <div className="site-container flex flex-col mt-8 gap-4 profile-wrapper lg:flex-row ">
                        <div className="profile-sidebar shrink-0 w-full lg:w-[65px] xl:w-[300px]  duration-300 overflow-clip rounded-md h-fit bg-white">
                            <ProfileSidebar />
                        </div>
                        <div className="profile-body  rounded-md w-full h-fit  bg-white">
                            <PageAnimation>
                                {children}
                            </PageAnimation>
                        </div>
                    </div>
                    {/* <div className="mt-8"></div> */}

                </DefaultWrapper>
            </LayoutDefault>

        </ProfileContext>


    )
}