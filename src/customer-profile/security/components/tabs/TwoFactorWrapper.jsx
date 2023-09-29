import React, { useState } from 'react'
import { SwitchDefault } from '../../../shared/components/input-fields/InputField'
import { AnimatePresence, motion } from 'framer-motion';
import { TwoFactorStep1, TwoFactorStep2, TwoFactorStep3 } from './Steps';

const TwoFactorWrapper = () => {
    const [swichStatus, setSwicthStatus] = useState(false);
    const [enabled, setEnabled] = useState(true);
    const [currentStep, setCurrentStep] = useState(0)

    return (
        <div className="wrapper rounded-b border-t-2 px-4 bg-slate-100 py-4">
            <div className="password-wrapper">
                <div onClick={() => setSwicthStatus(!swichStatus)} className="tab-info cursor-pointer gap-2 flex items-center justify-between duration-300  select-none bg-slate-200 px-4 py-4 rounded-md font-WorkSans">
                    <div className="w-full">
                        <h2 className='text-base md:text-lg text-slate-800 font-medium'>Two-factor authentication</h2>
                        <p className='text-slate-700 text-sm'>
                            This will protect you from hackers. <span className='hidden md:inline'>But you will need a security code sent to your email while logging in.</span>
                        </p>
                    </div>
                    <div className="switch  flex items-center shrink-0">
                        <SwitchDefault swichStatus={swichStatus} enabled={enabled} setSwicthStatus={setSwicthStatus} />
                    </div>
                </div>
                <div className="wrapper-content items-center  flex justify-center mt-4">
                    <AnimatePresence>
                        {
                            (enabled !== swichStatus) && (
                                <motion.div style={{ 'overflow': 'clip' }} className='w-full flex items-center justify-center' initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} >
                                    <div className={`box  duration-300 w-full ${currentStep === 0 ? 'min-h-[180px] sm:min-h-[140px]' : 'min-h-[250px] sm:min-h-[200px]'}   relative sm:w-[450px] overflow-x-hidden overflow-y-hidden`}>

                                        <AnimatePresence>
                                            {currentStep === 0 && (
                                                <motion.div transition={{ duration: 0.7 }} className='absolute flex items-center justify-center w-full top-0 left-0' style={{ 'overflow': 'clip' }} initial={{ x: 0 }} exit={{ x: '-100%', opacity: 0 }}>
                                                    <TwoFactorStep1 setCurrentStep={setCurrentStep} />
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                        <AnimatePresence>
                                            {currentStep === 1 && (
                                                <motion.div transition={{ duration: 0.7 }} className='absolute top-0 left-0' style={{ 'overflow': 'clip' }} initial={{ x: '100%', opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: '-100%', opacity: 0 }}>
                                                    <TwoFactorStep2 setCurrentStep={setCurrentStep} />
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                        <AnimatePresence>
                                            {currentStep === 2 && (
                                                <motion.div transition={{ duration: 0.7 }} className='absolute top-0 left-0' style={{ 'overflow': 'clip' }} initial={{ x: '100%', opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: '-100%', opacity: 0 }}>
                                                    <TwoFactorStep3 enabled={enabled} setEnabled={setEnabled} setCurrentStep={setCurrentStep} />
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                    </div>
                                </motion.div>

                            )
                        }
                    </AnimatePresence>
                </div>

            </div>
        </div>
    )
}

export default TwoFactorWrapper