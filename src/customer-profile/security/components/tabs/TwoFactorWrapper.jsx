import React from 'react'
import { SwitchDefault } from '../../../shared/components/input-fields/InputField'

const TwoFactorWrapper = () => {
    return (
        <div className="wrapper rounded-b border-t-2 px-4 bg-slate-100 py-4">
            <div className="password-wrapper">
                <div className="tab-info gap-2 flex items-center justify-between duration-300 hover:bg-slate-300 select-none bg-slate-200 px-4 py-4 rounded-md font-WorkSans">
                    <div className="w-full">
                        <h2 className='text-base md:text-lg text-slate-800 font-medium'>Two-factor authentication</h2>
                        <p className='text-slate-700 text-sm'>
                            This will protect you from hackers. <span className='hidden md:inline'>But you will need a security code sent to your email while logging in.</span>
                        </p>
                    </div>
                    <div className="switch  flex items-center shrink-0">
                        <SwitchDefault />
                    </div>
                </div>
                <div className="wrapper-content items-center  flex justify-center mt-4">
                    <div className={`box duration-300 w-full min-h-[250px] sm:min-h-[200px]  relative sm:w-[450px] overflow-x-hidden overflow-y-hidden`}>



                    </div>
                </div>

            </div>
        </div>
    )
}

export default TwoFactorWrapper