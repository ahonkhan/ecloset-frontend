import React from 'react'
import { BiEdit } from 'react-icons/bi'
import { IoMdOpen } from 'react-icons/io'
import { MdDeleteOutline } from 'react-icons/md'
import './review-item.scss'
import { Link } from 'react-router-dom'
const ReviewOptions = () => {
    return (
        <ul className='w-[200px]'>
            <li>
                <Link to={'/products/new-product?tab=review'} className='ReviewMoreItem'>
                    <span>View Product</span>
                    <span className='text-xl'>
                        <IoMdOpen />
                    </span>
                </Link>
            </li>
            <li>
                <button className='ReviewMoreItem'>
                    <span>Edit</span>
                    <span className='text-xl'>
                        <BiEdit />
                    </span>
                </button>
            </li>
            <li>
                <button className='ReviewMoreItemRed '>
                    <span>Delete</span>
                    <span className='text-xl'>
                        <MdDeleteOutline />
                    </span>
                </button>
            </li>

        </ul>)
}

export default ReviewOptions