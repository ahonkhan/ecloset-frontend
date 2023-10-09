import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const ChatListItem = ({ index, isUnRead, id }) => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const [isActiveChat, setIsActive] = useState(false);
    useEffect(() => {
        if (params.get('user') == id) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [params.get('user')])

    // console.log(isActiveChat)
    return (
        <Link to={'/profile/inbox?user=' + id} className={`border-l-4  ${isActiveChat ? 'activeChat' : 'border-l-transparent'} chatlistItem bg-white ${index === 0 ? 'border-t' : ''} ${isUnRead ? 'chatUnReadStyle' : ''} border-b flex items-center px-4 py-3 gap-2`}>
            <img className='w-[45px] h-[45px] rounded-full' src="https://images.sftcdn.net/images/t_app-icon-m/p/2f20511b-928a-4bac-bf29-fed3635f17ec/1133253762/profile-pic-maker-pfp-maker-logo" alt="" />
            <div className="w-full">
                <div className="flex justify-between">
                    <p className="profile-name font-medium">Samsung Galaxi</p>
                    <p className='text-gray-600 text-sm'>10:48</p>
                </div>
                <div className="flex items-center">
                    <p className='w-full text-gray-600 message text-sm'>Lorem ipsum dolor sit amet...</p>
                    {
                        isUnRead && (
                            <p className='shrink-0 text-xs bg-slate-200 text-darkBlue w-5 h-5 rounded-full flex items-center justify-center'>4</p>
                        )
                    }
                </div>
            </div>

        </Link>)
}

export default ChatListItem