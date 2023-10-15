import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { BiCheck } from "react-icons/bi"
import { GiCheckMark } from "react-icons/gi"
import { MdChevronRight } from 'react-icons/md'
export const InputCheckout = ({ type, placeholder }) => {
    return (
        <div className="input-item">
            <input type={type} className='bg-white py-3 rounded outline-none w-full px-4 font-WorkSans text-gray-600' placeholder={placeholder} />
        </div>
    )
}
export const InputPaymentInfo = ({ type, placeholder }) => {
    return (
        <div className="input-item">

            <input type={type} className='bg-gray-100 py-3 rounded outline-none w-full px-4 font-WorkSans text-gray-600' placeholder={placeholder} />
        </div>
    )
}
export const TextAreaCheckout = ({ placeholder }) => {
    return (
        <div className="input-item">
            <textarea className='bg-white py-3 min-h-[120px] rounded outline-none w-full px-4 font-WorkSans text-gray-600' placeholder={placeholder}></textarea>
        </div>
    )
}

export const SelectCheckout = ({ placeholder, data }) => {
    const [status, setStatus] = useState(false);
    const [selectedData, setSeletedData] = useState(placeholder)
    return (
        <div className="input-item relative">
            <button onClick={() => setStatus(!status)} type='button' className={`bg-white flex justify-between items-center text-start py-3 ${status ? 'rounded-t' : 'rounded'} outline-none w-full px-4 font-WorkSans text-gray-400`}><span>{selectedData}</span> <span><MdChevronRight className={`duration-300 ${status ? '-rotate-90' : 'rotate-90'}`} /></span> </button>
            <AnimatePresence>
                {status && (
                    <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-gray-50 z-[10] shadow-1 absolute w-full rounded-b overflow-y-auto max-h-[200px]">
                        {
                            data?.map(item =>
                                <li onClick={() => { setSeletedData(item); setStatus(false) }} className="hover:bg-gray-100 duration-200 text-start cursor-pointer border-t py-3 outline-none w-full px-4 font-WorkSans text-gray-400">{item}</li>
                            )

                        }
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    )
}
export const SelectPaymentMethod = ({ placeholder, data }) => {
    const [status, setStatus] = useState(false);
    const [selectedData, setSeletedData] = useState(placeholder)
    return (
        <div className="input-item relative">
            <button onClick={() => setStatus(!status)} type='button' className={`bg-gray-100 flex justify-between items-center text-start py-3 ${status ? 'rounded-t' : 'rounded'} outline-none w-full px-4 font-WorkSans text-gray-400`}><span>{selectedData}</span> <span><MdChevronRight className={`duration-300 ${status ? '-rotate-90' : 'rotate-90'}`} /></span> </button>
            <AnimatePresence>
                {status && (
                    <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-gray-50 z-[10] shadow-1 absolute w-full rounded-b overflow-y-auto max-h-[200px]">
                        {
                            data?.map(item =>
                                <li onClick={() => { setSeletedData(item); setStatus(false) }} className="hover:bg-gray-100 duration-200 text-start cursor-pointer border-t py-3 outline-none w-full px-4 font-WorkSans text-gray-400">{item}</li>
                            )

                        }
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    )
}

export const SignUpField = ({ type, placeholder }) => {
    if (type === 'password') {
        const [passwordVisible, setPasswordVisible] = useState(false);
        return (
            <div className="input-item relative text-gray-600">
                <input type={passwordVisible ? 'text' : 'password'} className='bg-transparent  border py-3 rounded outline-none w-full px-4 pr-10 font-WorkSans ' placeholder={placeholder} />
                <button type="button" onClick={() => setPasswordVisible(!passwordVisible)} className="absolute right-0 top-1/2 -translate-y-1/2 text-xl pl-2 pr-4">
                    {passwordVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </button>
            </div>
        )
    }
    return (
        <div className="input-item">
            <input type={type} className='bg-transparent border py-3 rounded outline-none w-full px-4 font-WorkSans text-gray-600' placeholder={placeholder} />
        </div>
    )
}

export const SignUpSelect = ({ placeholder, data }) => {
    const [status, setStatus] = useState(false);
    const [selectedData, setSeletedData] = useState(placeholder)
    return (
        <div className="input-item relative">
            <button onClick={() => setStatus(!status)} type='button' className={`bg-white border flex justify-between items-center text-start py-3 ${status ? 'rounded-t' : 'rounded'} outline-none w-full px-4 font-WorkSans text-gray-400`}><span>{selectedData}</span> <span><MdChevronRight className={`duration-300 ${status ? '-rotate-90' : 'rotate-90'}`} /></span> </button>
            <AnimatePresence>
                {status && (
                    <motion.ul style={{ 'scrollbarWidth': 'thin' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-gray-50 z-[10] shadow-1 absolute w-full rounded-b overflow-y-auto max-h-[200px]">
                        {
                            data?.map(item =>
                                <li onClick={() => { setSeletedData(item); setStatus(false) }} className="hover:bg-gray-100 duration-200 text-start cursor-pointer border-t py-3 outline-none w-full px-4 font-WorkSans text-gray-400">{item}</li>
                            )

                        }
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    )
}
export const CheckboxGreen = ({ getStatus, setStatus }) => {
    return (
        <button onClick={() => setStatus(!getStatus)} type="button" className={` w-[18px] h-[18px] ${getStatus ? 'bg-Green  border-transparent' : 'border'} border duration-150 text-[10px] flex items-center justify-center text-white rounded-sm font-medium`}>
            <GiCheckMark className={`${getStatus ? '' : 'opacity-0'}`} />
        </button>
    )
}