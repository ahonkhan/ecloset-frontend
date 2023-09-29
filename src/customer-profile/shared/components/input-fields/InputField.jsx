import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import { MdChevronRight } from 'react-icons/md'
export const InputCheckout = ({ type, placeholder }) => {
    return (
        <div className="input-item">

            <input type={type} className='bg-white py-3 rounded outline-none w-full px-4 font-WorkSans text-gray-600' placeholder={placeholder} />
        </div>
    )
}
export const InputProfile = ({ type, placeholder, value }) => {
    return (
        <div className="input-item">

            <input value={value} type={type} className='bg-gray-100 py-3 rounded outline-none w-full px-4 font-WorkSans text-gray-600' placeholder={placeholder} />
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
export const SelectDefault = ({ placeholder, data, preText }) => {
    const [status, setStatus] = useState(false);
    const [selectedData, setSeletedData] = useState(placeholder)
    return (
        <div className="input-item relative">
            <button onClick={() => setStatus(!status)} type='button' className={`bg-gray-100 flex justify-between items-center text-start py-3 ${status ? 'rounded-t' : 'rounded'} outline-none w-full px-4 font-WorkSans text-gray-400`}><span>{preText ? preText + ': ' : ''}{selectedData}</span> <span><MdChevronRight className={`duration-300 ${status ? '-rotate-90' : 'rotate-90'}`} /></span> </button>
            <AnimatePresence>
                {status && (
                    <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-gray-50 z-[10] shadow-1 absolute w-full rounded-b overflow-y-auto max-h-[200px]" style={{ 'scrollbarWidth': 'thin' }}>
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

export const InputDefault = ({ type, placeholder }) => {
    return (
        <div className="input-item">
            <input type={type} className='bg-gray-100 py-3 rounded outline-none w-full px-4 font-WorkSans text-gray-600' placeholder={placeholder} />
        </div>
    )
}

export const SwitchDefault = ({ setSwicthStatus, swichStatus, enabled }) => {
    useEffect(() => {
        setSwicthStatus(enabled);
    }, [])
    return (
        <button onClick={() => setSwicthStatus(!swichStatus)} className={`h-4 w-8 md:h-5 md:w-10 ${enabled ? 'bg-LightBlue bg-opacity-70' : 'bg-slate-300'}  relative rounded-3xl`}>
            <span className={`block scale-125 duration-300 ${enabled ? 'translate-x-full -translate-y-1/2 bg-darkBlue shadow-2' : '-translate-y-1/2 bg-slate-400'}  top-1/2 md:mt-[0.5px]  left-0 absolute w-4 h-4 md:w-5 md:h-5 rounded-full `}></span>
        </button>
    )
}