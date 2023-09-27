import React, { useContext } from 'react'
import { InputDefault, SelectDefault } from '../../../shared/components/input-fields/InputField'
import { IoMdAdd } from 'react-icons/io'
import { MdOutlineCancel } from 'react-icons/md'
import { GetGlobalContext } from '../../../../context/GlobalContext'
import { DefaultModal } from '../../../../public/shared/components/modals/DefaultModal'
const AddressModal = ({ setModalStatus, modalStatus }) => {
    const globalContext = useContext(GetGlobalContext)

    return (

     
        <DefaultModal setModalStatus={setModalStatus} modalStatus={modalStatus}>
            <div className="modal-header text-center">
                <h2 className='text-2xl'>Add new address</h2>
            </div>
            <form className='flex flex-col gap-2 mt-8' action="" onSubmit={(e) => e.preventDefault()}>

                <div className="item">
                    <SelectDefault placeholder={'District'} data={['Rangpur', 'Dhaka', 'Gaibandah', 'Rajshahi', 'Dinajpur', 'Kumilla']} />
                </div>
                <div className="item">
                    <SelectDefault placeholder={'Country'} data={['Bangladesh', 'India', 'Japan', 'China', 'Singapur']} />
                </div>
                <div className="item">
                    <SelectDefault placeholder={'District'} data={['Rangpur', 'Dhaka', 'Gaibandah', 'Rajshahi', 'Dinajpur', 'Kumilla']} />
                </div>
                <div className="item">
                    <SelectDefault placeholder={'Sub District'} data={['Mithapukur', 'Peerganj', 'Ghoraghat', 'Sadullahpur', 'Rangpur Sadar']} />
                </div>
                <div className="item">
                    <InputDefault placeholder={'Street Address'} type={'text'} />
                </div>
                <div className="item">
                    <InputDefault placeholder={'Appartment Number'} type={'text'} />
                </div>
                <div className="item">
                    <InputDefault placeholder={'Postal/Zip'} type={'text'} />
                </div>
                <div className="item">
                    <InputDefault placeholder={'Phone'} type={'text'} />
                </div>
                <div className="item">
                    <InputDefault placeholder={'Email'} type={'email'} />
                </div>

                <div className="item">
                    <SelectDefault placeholder={'Address Type`'} data={['Home', 'Office', 'Default']} />
                </div>

            </form>
            <div className="modal-footer flex justify-end items-center mt-4 gap-4">
                <button onClick={() => { setModalStatus(false); globalContext.setModalOpenStatus(false); document.querySelector('body').classList.remove('overflow-hidden') }} className='flex items-center gap-2 px-4 py-2 text-white rounded bg-rose-500'>
                    <span>Cancel</span>
                    <span>
                        <MdOutlineCancel />
                    </span>
                </button>
                <button className='flex items-center gap-2 px-4 py-2 text-white rounded bg-slate-800'>
                    <span>Add</span>
                    <span>
                        <IoMdAdd />
                    </span>
                </button>
            </div>
        </DefaultModal>
    )
}

export default AddressModal