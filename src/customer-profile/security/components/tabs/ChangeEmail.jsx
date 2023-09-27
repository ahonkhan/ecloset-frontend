import React, { useState } from 'react'
import { ChangeEmailStep1, ChangeEmailStep2, ChangeEmailStep3 } from './Steps'
import { AnimatePresence, motion } from 'framer-motion'
const ChangeEmail = () => {
    const [currentStep, setCurrentStep] = useState(0)
    return (
        <div className="wrapper rounded-b border-t-2 px-4 bg-slate-100 py-4">
            <div className="password-wrapper">
                <div className="tab-info  font-WorkSans">
                    <h2 className='text-lg text-slate-800 font-medium'>Update email address</h2>
                    <p className='text-slate-700 '>
                        If you want to add another email address then you can do that.You will receive a security code in the email you provide and you can change the email by entering it within 150 seconds and entering your password.                    </p>
                </div>
                <div className="wrapper-content flex justify-center mt-4">
                    <div className={`box duration-300 w-full ${currentStep === 0 ? 'min-h-[180px] sm:min-h-[140px]' : 'min-h-[250px] sm:min-h-[200px]'}  relative sm:w-[450px] overflow-x-hidden overflow-y-hidden`}>

                        <AnimatePresence>
                            {currentStep === 0 && (
                                <motion.div transition={{ duration: 0.7 }} className='absolute flex items-center justify-center w-full top-0 left-0' style={{ 'overflow': 'clip' }} initial={{ x: 0 }} exit={{ x: '-100%', opacity: 0 }}>
                                    <ChangeEmailStep1 setCurrentStep={setCurrentStep} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <AnimatePresence>
                            {currentStep === 1 && (
                                <motion.div transition={{ duration: 0.7 }} className='absolute top-0 left-0' style={{ 'overflow': 'clip' }} initial={{ x: '100%', opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: '-100%', opacity: 0 }}>
                                    <ChangeEmailStep2 setCurrentStep={setCurrentStep} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <AnimatePresence>
                            {currentStep === 2 && (
                                <motion.div transition={{ duration: 0.7 }} className='absolute top-0 left-0' style={{ 'overflow': 'clip' }} initial={{ x: '100%', opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: '-100%', opacity: 0 }}>
                                    <ChangeEmailStep3 setCurrentStep={setCurrentStep} />
                                </motion.div>
                            )}
                        </AnimatePresence>



                    </div>
                </div>

            </div>
        </div>
    )
}

export default ChangeEmail


