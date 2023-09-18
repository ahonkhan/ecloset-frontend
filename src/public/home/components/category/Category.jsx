import React from 'react'
import img1 from '../../assets/category-1.png'
import { Link } from 'react-router-dom'
import { SectionTitle } from '../../../shared/components/typography/Typography'
const Category = () => {
    return (
        <section className='site-container mt-4 '>
            <SectionTitle>Categories</SectionTitle>
            <div className="wrapper rounded-md p-4  overflow-hidden bg-white grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 gap-2">
                {
                    [...new Array(8)].map(item =>
                        <Link to={''} className="category-item group bg-white  flex shadow-1 py-2 px-1 rounded items-center justify-center flex-col">
                            <img className='w-full group-hover:scale-105 duration-300' src={img1} alt="" />
                            <p className='text-center group-hover:text-GreenLight duration-200 text-gray-800 font-medium font-WorkSans text-sm'>Electronics</p>
                        </Link>
                    )
                }

            </div>
        </section>
    )
}

export default Category