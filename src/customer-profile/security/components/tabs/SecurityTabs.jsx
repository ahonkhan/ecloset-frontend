import React, { useState } from 'react'
import './securityTabs.scss';
import { BiChevronRight } from 'react-icons/bi'
import PasswordWrapper from './PasswordWrapper';
import ChangeEmail from './ChangeEmail';
import { AnimatePresence, motion } from 'framer-motion';
const SecurityTabs = () => {
    const list = [
        {
            'title': 'Change Password',
            'wrapper': <PasswordWrapper />
        },
        {
            'title': 'Change Email',
            'wrapper': <ChangeEmail />
        },
        {
            'title': 'Two-Factor Authentication',
            'wrapper': ''
        },
    ]
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div className="mt-4 md:mt-8">
            <ul>
                {
                    list.map((item, index) =>
                        <li className='border-b'>
                            <div onClick={() => { setActiveTab(index); window.scrollTo(0, 0) }} className='flex items-center cursor-pointer justify-between rounded-t font-WorkSans text-gray-700 gap-3 bg-slate-100 py-4 px-4'>
                                <div className="flex items-center gap-3">
                                    <button className='h-5 w-5 flex items-center justify-center rounded-full border-2 border-LightBlue'>
                                        <span className={`w-3 h-3 duration-300 ${activeTab === index ? 'opacity-100' : 'opacity-0'} rounded-full bg-LightBlue `}></span>
                                    </button>
                                    <p>{item.title}</p>
                                </div>
                                <button className='text-2xl'>
                                    <BiChevronRight className={`duration-300 ${activeTab === index ? '-rotate-90' : 'rotate-90'}`} />
                                </button>
                            </div>
                            <AnimatePresence>
                                {
                                    activeTab === index && (
                                        <motion.div style={{ 'overflow': 'clip' }} initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}>
                                            {item.wrapper}
                                        </motion.div>
                                    )
                                }
                            </AnimatePresence>
                        </li>
                    )
                }


            </ul>
        </div>

    )
}

export default SecurityTabs