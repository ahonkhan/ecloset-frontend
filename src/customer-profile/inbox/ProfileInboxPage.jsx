import React from 'react'
import { PageAnimationProfile } from '../../public/shared/components/page/PageAnimation'
import { Link } from 'react-router-dom'
import { BsChevronDown } from 'react-icons/bs'
import { BiMessageAltEdit } from 'react-icons/bi'
import ChatList from './components/chatlist/ChatList'

const ProfileInboxPage = () => {
    return (
        <PageAnimationProfile>

            <div className="wrapper font-WorkSans flex">
                <ChatList  />
                <div style={{ 'scrollbarWidth': 'thin' }} className="chat-box  bg-white w-full h-[535px] overflow-y-auto" ></div>
            </div>
        </PageAnimationProfile>
    )
}

export default ProfileInboxPage