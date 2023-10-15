import React, { useState } from 'react'
import { PageAnimation } from '../shared/components/page/PageAnimation'
import DefaultWrapper from '../shared/components/wrappers/DefaultWrapper'
import bg from './assets/shape-bg.png';
import { CheckboxGreen, SignUpField } from '../shared/components/input-field/InputField';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    const [RememberMe, setRememberMe] = useState(true);
    return (
        <PageAnimation>
            <DefaultWrapper>
                <div className="bg-BlueShade md:px-4 sm:py-4">
                    <div style={{ 'backgroundImage': "url('" + bg + "')" }} className="md:py-8 bg-cover flex items-center justify-center">
                        <div className={`w-full duration-300 sm:w-[450px] `}>

                            <div className="Step1 top-0 left-0 w-full bg-white shadow-1 py-4 rounded-md md:px-4">
                                <div className="px-4 py-4">
                                    <div className="text-center font-WorkSans">
                                        <h2 className='font-WorkSans text-Green text-2xl font-medium'>Welcome Back!</h2>
                                        <p className='text-GrayMid'>Collaborate with the best brands.</p>
                                    </div>
                                </div>
                                <form className='px-4 font-Inter mt-2' action="" onSubmit={(e) => e.preventDefault()}>
                                    <div className="grid grid-cols-1 gap-2 md:gap-4">

                                        <div className="input-item">
                                            <SignUpField type={'email'} placeholder={'Enter Your Email'} />
                                        </div>
                                        <div className="input-item">
                                            <SignUpField type={'password'} placeholder={'Enter Password'} />
                                        </div>

                                        <div className="input-item ">
                                            <p className="text-sm flex items-center gap-2">
                                                <CheckboxGreen getStatus={RememberMe} setStatus={setRememberMe} />
                                                <p className='text-GrayMid'>Remember Me</p>
                                            </p>
                                        </div>
                                        <button type='button' className='bg-Green text-white py-3 rounded-sm'>Login</button>
                                        <p className='text-center text-GrayMid'>Don't have an account? <Link className='text-Green' to={'/signup'}>Sign up</Link> </p>
                                    </div>
                                </form>
                            </div>


                        </div>
                    </div>

                </div>

            </DefaultWrapper>
        </PageAnimation>
    )
}

export default LoginPage