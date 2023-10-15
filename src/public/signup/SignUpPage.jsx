import React, { useState } from 'react'
import { PageAnimation } from '../shared/components/page/PageAnimation'
import DefaultWrapper from '../shared/components/wrappers/DefaultWrapper'
import bg from './assets/shape-bg.png';
import { CheckboxGreen, SignUpField, SignUpSelect } from '../shared/components/input-field/InputField';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { range } from '../../utils/Library';
import avatar from './assets/avatar-img.webp';
const SignUpPage = () => {
    const [acceptTerms, setAcceptTerms] = useState(true);
    const [currentStep, setCurrentStep] = useState(1);
    const date = new Date();
    const [avatarUrl, setAvatarUrl] = useState(avatar);
    return (
        <PageAnimation>
            <DefaultWrapper>
                <div className="bg-BlueShade md:px-4 sm:py-4">
                    <div style={{ 'backgroundImage': "url('" + bg + "')" }} className="md:py-8 bg-cover flex items-center justify-center">
                        <div className={`w-full duration-300 sm:w-[450px] relative overflow-hidden ${currentStep === 1 ? 'min-h-[465px] md:min-h-[515px]' : ''} ${currentStep === 2 ? 'min-h-[485px] md:min-h-[535px]' : ''} ${currentStep === 3 ? 'min-h-[290px] md:min-h-[300px]' : ''}`}>
                            {/* step1 */}
                            <AnimatePresence>
                                {
                                    currentStep === 1 && (
                                        <motion.div transition={{ duration: 0.5 }} initial={{ x: 0 }} animate={{ x: 0 }} exit={{ x: '-100%' }} >
                                            <div className="Step1 absolute top-0 left-0 w-full   bg-white shadow-1 py-4 rounded-md md:px-4">
                                                <div className="px-4 py-4">
                                                    <div className="text-center font-WorkSans">
                                                        <h2 className='font-WorkSans text-Green text-2xl font-medium'>Create an account</h2>
                                                        <p className='text-GrayMid'>Collaborate with the best brands.</p>
                                                    </div>
                                                </div>
                                                <form className='px-4 font-Inter mt-2' action="" onSubmit={(e) => e.preventDefault()}>
                                                    <div className="grid grid-cols-1 gap-2 md:gap-4">
                                                        <div className="grid grid-cols-2 gap-2">
                                                            <div className="input-item">
                                                                <SignUpField type={'text'} placeholder={'First Name'} />
                                                            </div>
                                                            <div className="input-item">
                                                                <SignUpField type={'text'} placeholder={'Last Name'} />
                                                            </div>
                                                        </div>
                                                        <div className="input-item">
                                                            <SignUpField type={'email'} placeholder={'Enter Your Email'} />
                                                        </div>
                                                        <div className="input-item">
                                                            <SignUpField type={'password'} placeholder={'Enter New Password'} />
                                                        </div>
                                                        <div className="input-item">
                                                            <SignUpField type={'password'} placeholder={'Repeat Password'} />
                                                        </div>
                                                        <div className="input-item ">
                                                            <p className="text-sm flex items-center gap-2">
                                                                <CheckboxGreen getStatus={acceptTerms} setStatus={setAcceptTerms} />
                                                                <p className='text-GrayMid'>I accept all the terms of Service and Privacy policy</p>
                                                            </p>
                                                        </div>
                                                        <button type='button' onClick={() => setCurrentStep(2)} className='bg-Green text-white py-3 rounded-sm'>Continue</button>
                                                        <p className='text-center text-GrayMid'>Already have an account? <Link className='text-Green' to={'/login'}>Login</Link> </p>
                                                    </div>
                                                </form>
                                            </div>

                                        </motion.div>
                                    )
                                }
                            </AnimatePresence>
                            {/* step 2 */}
                            <AnimatePresence>
                                {
                                    currentStep === 2 && (
                                        <motion.div transition={{ duration: 0.5 }} initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} >
                                            <div className="Step1 absolute top-0 left-0 w-full   bg-white shadow-1 py-4 rounded-md md:px-4">
                                                <div className="px-4 py-4">
                                                    <div className="text-center font-WorkSans">
                                                        <h2 className='font-WorkSans text-Green text-2xl font-medium'>Add Information</h2>
                                                        <p className='text-GrayMid'>Collaborate with the best brands.</p>
                                                    </div>
                                                </div>
                                                <form className='px-4 font-Inter mt-2' action="" onSubmit={(e) => e.preventDefault()}>
                                                    <div className="grid grid-cols-1 gap-2 md:gap-4">
                                                        <div className="grid grid-cols-2 gap-2">
                                                            <div className="input-item">
                                                                <SignUpSelect data={['Bangladesh', 'India', 'China', 'Pakistan']} placeholder={'Country'} />
                                                            </div>
                                                            <div className="input-item">
                                                                <SignUpSelect data={['Rangpur', 'Dhaka', 'Dinajpur', 'Kurigram']} placeholder={'City'} />
                                                            </div>
                                                        </div>
                                                        <div className="grid grid-cols-3 gap-2">
                                                            <div className="input-item">
                                                                <SignUpSelect data={range(1975, date.getFullYear())} placeholder={'Year'} />
                                                            </div>
                                                            <div className="input-item">
                                                                <SignUpSelect data={range(1, 12)} placeholder={'Month'} />
                                                            </div>
                                                            <div className="input-item">
                                                                <SignUpSelect data={range(1, 31)} placeholder={'Day'} />
                                                            </div>
                                                        </div>
                                                        <div className="input-item">
                                                            <SignUpSelect data={['Student', 'Teacher', 'Banker', 'Other']} placeholder={'Who you are'} />
                                                        </div>
                                                        <div className="input-item">
                                                            <SignUpSelect data={['Male', 'Female', 'Other']} placeholder={'Select Gander'} />
                                                        </div>
                                                        <label htmlFor="profilePic">
                                                            <div className="input-item flex gap-2 items-center">
                                                                <img className='w-9 h-9 rounded-full' src={avatarUrl} alt="" />
                                                                <p className='text-GrayMid bg-gray-200 px-2 py-2 rounded cursor-pointer'>Choose Profile</p>
                                                                <input onChange={(e) => setAvatarUrl(URL.createObjectURL(e.target.files[0]))} type="file" hidden id='profilePic' />
                                                            </div>
                                                        </label>
                                                        <button type='button' onClick={() => setCurrentStep(3)} className='bg-Green text-white py-3 rounded-sm'>Continue</button>
                                                        <p className='text-center text-GrayMid'>Already have an account? <Link className='text-Green' to={'/login'}>Login</Link> </p>
                                                    </div>
                                                </form>
                                            </div>

                                        </motion.div>
                                    )
                                }
                            </AnimatePresence>
                            {/* {steep3} */}
                            <AnimatePresence>
                                {
                                    currentStep === 3 && (
                                        <motion.div transition={{ duration: 0.5 }} initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} >
                                            <div className="Step1 absolute top-0 left-0 w-full   bg-white shadow-1 py-4 rounded-md md:px-4">
                                                <div className="px-4 py-4">
                                                    <div className="text-center font-WorkSans">
                                                        <h2 className='font-WorkSans text-Green text-2xl font-medium'>Add Security Key</h2>
                                                        <p className='text-GrayMid'>You have recieved a security code in aohinuzzaman@gma.com</p>
                                                    </div>
                                                </div>
                                                <form className='px-4 font-Inter mt-2' action="" onSubmit={(e) => e.preventDefault()}>
                                                    <div className="grid grid-cols-1 gap-2 md:gap-4">

                                                        <div className="input-item">
                                                            <SignUpField type={'email'} placeholder={'Security Code'} />
                                                        </div>

                                                        <button type='button' onClick={() => setCurrentStep(3)} className='bg-Green text-white py-3 rounded-sm'>Sign Up</button>
                                                        <p className='text-center text-GrayMid'>Already have an account? <Link className='text-Green' to={'/login'}>Login</Link> </p>
                                                    </div>
                                                </form>
                                            </div>

                                        </motion.div>
                                    )
                                }
                            </AnimatePresence>
                        </div>
                    </div>

                </div>

            </DefaultWrapper>
        </PageAnimation>
    )
}

export default SignUpPage