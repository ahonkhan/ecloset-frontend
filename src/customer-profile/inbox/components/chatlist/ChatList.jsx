import React from 'react'
import { BiMessageAltEdit } from 'react-icons/bi'
import { BsChevronDown } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import ChatListItem from './ChatListItem'
import './chatlist.scss'
const ChatList = () => {
    return (
        <div className="chatlist-area h-[485px]  w-full md:w-[350px] shrink-0 flex flex-col">
            <div className="chatlist-header flex justify-between items-center py-3 text-gray-500 px-4 shrink-0 bg-white border-b border-r">
                <button className='flex items-center gap-2'>
                    <p>All Conversations</p>
                    <BsChevronDown />
                </button>

                <button className='w-7 h-7 flex items-center justify-center rounded-full text-lg'>
                    <BiMessageAltEdit />
                </button>
            </div>
            <div className=" h-full border-r pt-4">
                <div style={{ 'scrollbarWidth': 'thin' }} className="chat-list w-full h-full flex flex-col overflow-y-auto ">

                    {
                        [...new Array(2)].map((item, index) =>

                            <ChatListItem index={index} isUnRead={false} id={112425124} />
                        )
                    }
                    <ChatListItem isUnRead={true} id={1241} />


                </div>
            </div>
        </div>)
}

export default ChatList