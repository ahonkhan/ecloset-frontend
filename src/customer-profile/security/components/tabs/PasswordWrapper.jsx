import React, { useState } from 'react'
import { MdRemoveRedEye } from 'react-icons/md'
import { AiFillEyeInvisible } from 'react-icons/ai'
import './securityTabs.scss';

const PasswordWrapper = () => {
    const [passShow, setPassShow] = useState(false)
    const [oldPassShow, setOldPassShow] = useState(false)
    return (
        <div className="wrapper rounded-b border-t-2 px-4 bg-slate-100 py-4">
            <div className="password-wrapper">
                <div className="tab-info  font-WorkSans">
                    <h2 className='text-lg text-slate-800 font-medium'>Change Password</h2>
                    <p className='text-slate-700 '>
                        Your password must be at least 6 characters and should include a combination of numbers, letters and special characters (!$@%).
                    </p>
                </div>
                <div className="wrapper-content mt-4">
                    <form action="" onClick={(e) => e.preventDefault()}>
                        <div className="flex flex-col gap-2">
                            <div className="input-item relative bg-slate-200 flex items-center ">
                                <input type={oldPassShow ? 'text' : 'password'} autoComplete='new-password' placeholder='Old password' className='inputField outline-none focus:ring-1 pr-8' />
                                <button onClick={() => setOldPassShow(!oldPassShow)} type='button' className='px-4 text-slate-500 absolute right-0 top-1/2 -translate-y-1/2'>
                                    {oldPassShow ? <AiFillEyeInvisible className='text-lg' /> : <MdRemoveRedEye className='text-lg' />}
                                </button>
                            </div>
                            <div className="input-item relative bg-slate-200 flex items-center ">
                                <input type={passShow ? 'text' : 'password'} autoComplete='new-password' placeholder='New password' className='inputField outline-none focus:ring-1 pr-8' />
                                <button onClick={() => setPassShow(!passShow)} type='button' className='px-4 text-slate-500 absolute right-0 top-1/2 -translate-y-1/2'>
                                    {passShow ? <AiFillEyeInvisible className='text-lg' /> : <MdRemoveRedEye className='text-lg' />}
                                </button>
                            </div>
                            <div className="input-item bg-slate-200 ">
                                <input type="password" autoComplete='new-password' placeholder='Repeat new password' className='inputField outline-none focus:ring-1' />
                            </div>
                            <div className="">
                                <button className='px-8 py-3 duration-200 active:scale-95 rounded bg-darkBlue text-slate-50 font-WorkSans font-medium'>Change</button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default PasswordWrapper