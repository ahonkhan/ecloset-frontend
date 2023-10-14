import { AnimatePresence, motion } from 'framer-motion';
import React, { useContext, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { GetGlobalContext } from '../../../../context/GlobalContext';
import { Link } from 'react-router-dom';
import { CheckboxGreen, SignUpField } from '../input-field/InputField';
const LoginSidebar = () => {
    const globalcontext = useContext(GetGlobalContext)
    const [rememberMe, setRememberMe] = useState(true);
    return (
        <>
            <AnimatePresence>
                {
                    globalcontext.loginSidebarStatus &&
                    (<motion.aside transition={{ duration: 0.3 }} initial={{ x: '100%' }} exit={{ x: '100%' }} animate={{ x: 0 }} className='fixed top-0 right-0 w-full xs:w-[350px] md:w-[400px] bg-white h-screen z-[160]'>
                        <div className="flex flex-col h-screen ">
                            <div className="cart-header shrink-0 mt-4 px-4 flex justify-end">
                                <button onClick={() => { globalcontext.setLoginSidebarStatus(false); document.body.classList.remove('overflow-hidden') }} className='text-xl'>
                                    <AiOutlineClose />
                                </button>
                            </div>
                            <div className="px-4 py-4">
                                <div className="text-center font-Inter">
                                    <h2 className='font-WorkSans text-Green text-xl'>Welcome Back !</h2>
                                    <p className='text-GrayMid'>Collaborate with the best brands.</p>
                                </div>
                            </div>
                            <form className='px-4 font-Inter mt-2' action="" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 gap-4">
                                    <div className="input-item">
                                        <SignUpField type={'email'} placeholder={'Enter Your Email'} />
                                    </div>
                                    <div className="input-item">
                                        <SignUpField type={'password'} placeholder={'Enter Your Password'} />
                                    </div>
                                    <div className="input-item flex justify-between items-center">
                                        <p className="flex items-center gap-2">
                                            <CheckboxGreen getStatus={rememberMe} setStatus={setRememberMe} />
                                            <p className='text-GrayMid'>Remember me</p>
                                        </p>
                                        <Link className='text-GrayMid'>Forgot password?</Link>
                                    </div>
                                    <button className='bg-Green text-white py-3 rounded-sm'>Continue</button>
                                    <p className='text-center text-GrayMid'>Don't have an account? <Link className='text-Green'>Sign up</Link> </p>
                                </div>
                            </form>

                        </div>
                    </motion.aside>)
                }
            </AnimatePresence>
            {
                globalcontext.loginSidebarStatus && (
                    <div onClick={() => { globalcontext.setLoginSidebarStatus(false); document.body.classList.remove('overflow-hidden') }} className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-50 z-[150]"></div>

                )
            }
        </>
    )
}

export default LoginSidebar