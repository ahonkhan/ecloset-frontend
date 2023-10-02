import React from 'react'
import { DefaultModal } from './DefaultModal'
const ProductViewModal = ({ modalStatus, setModalStatus }) => {
    return (
        <DefaultModal setModalStatus={setModalStatus} modalStatus={modalStatus}>
            Hello this is modal
        </DefaultModal>

    )
}

export default ProductViewModal