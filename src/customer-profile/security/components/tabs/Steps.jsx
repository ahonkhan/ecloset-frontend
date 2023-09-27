import { useState } from "react"
export const ChangeEmailStep1 = ({ setCurrentStep }) => {
    const [isDisabled, setIsDisabled] = useState(true)
    const handleInput = (e) => {
        let regex = new RegExp(/\S+@\S+\.\S+/);
        if (regex.test(e.target.value)) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);

        }
    }
    return (
        <div className="step-1 w-full gap-2 flex items-center justify-center px-1 sm:px-4 py-4">
            <form onClick={(e) => e.preventDefault()} className="flex gap-2 items-center w-full flex-col sm:flex-row">
                <div className="input-item w-full relative bg-slate-200 flex items-center rounded ">
                    <input onChange={(e) => handleInput(e)} type={'email'} autoComplete='new-password' placeholder='New email' className='inputField outline-none focus:ring-1 pr-8' />
                </div>
                <div className="w-full sm:w-fit">
                    <button disabled={isDisabled} onClick={() => setCurrentStep(1)} className='px-8 disabled:opacity-70 disabled:scale-100 py-3 w-full sm:w-fit duration-200 active:scale-95 rounded bg-darkBlue text-slate-50 font-WorkSans font-medium'>Next</button>
                </div>
            </form>
        </div>
    )
}
export const ChangeEmailStep2 = ({ setCurrentStep }) => {
    const [isDisabled, setIsDisabled] = useState(true)
    const handleInput = (e) => {
        if (e.target.value) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);

        }
    }
    return (
        <div className="step-2 py-4 w-full gap-2 flex items-center justify-center px-1 sm:px-4 ">

            <div className="w-full">
                <div className="py-4">

                    <p className='text-sm font-WorkSans text-gray-800'>You have received a security code in <span>aohinuzzaman420@gmail.com</span>. Submit it within 150 seconds to change email</p>
                </div>
                <form onClick={(e) => e.preventDefault()} className="flex gap-2 items-center w-full flex-col sm:flex-row">

                    <div className="input-item w-full relative bg-slate-200 flex items-center rounded ">
                        <input onChange={(e) => handleInput(e)} type={'text'} autoComplete='new-password' placeholder='Security Code' className='inputField outline-none focus:ring-1 pr-8' />
                    </div>
                    <div className="w-full sm:w-fit">
                        <button disabled={isDisabled} onClick={() => setCurrentStep(2)} className='px-8 disabled:opacity-70 disabled:scale-100 py-3 w-full sm:w-fit duration-200 active:scale-95 rounded bg-darkBlue text-slate-50 font-WorkSans font-medium'>Next</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export const ChangeEmailStep3 = ({ setCurrentStep }) => {
    const [isDisabled, setIsDisabled] = useState(true)

    return (

        <div className="step-3 w-full py-4 gap-2 flex items-center justify-center px-1 sm:px-4 ">

            <div className="w-full">
                <div className="py-4">

                    <p className='text-sm font-WorkSans text-gray-800'>You can change your email with your password, you don't have to do anything else.</p>
                </div>
                <form onClick={(e) => e.preventDefault()} className="flex gap-2 items-center w-full flex-col sm:flex-row">

                    <div className="input-item w-full relative bg-slate-200 flex items-center rounded ">
                        <input type={'text'} autoComplete='new-password' placeholder='Password' className='inputField outline-none focus:ring-1 pr-8' />
                    </div>
                    <div className="w-full sm:w-fit">
                        <button disabled={isDisabled} className='px-8 py-3 w-full sm:w-fit disabled:opacity-70 disabled:scale-100 duration-200 active:scale-95 rounded bg-darkBlue text-slate-50 font-WorkSans font-medium'>Change</button>
                    </div>
                </form>
            </div>
        </div>
    )
}