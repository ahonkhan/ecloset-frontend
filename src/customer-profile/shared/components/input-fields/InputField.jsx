import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
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