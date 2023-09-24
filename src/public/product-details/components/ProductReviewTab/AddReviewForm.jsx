import React, { useState } from 'react'
import { RatingStar } from '../../../search/components/typography/Typography'

const AddReviewForm = () => {
    const [recomend, setRecomend] = useState(0);
    const recomends = ['No', 'Yes']
    return (
        <div className='bg-white py-4 md:py-8 px-4 md:px-8 mt-4 rounded-md font-WorkSans'>
            <form action="" className='flex flex-col gap-4' onSubmit={(e) => e.preventDefault()}>
                <div className="form-item ">
                    <p className='text-gray-500 mb-2 font-Ubuntu'>Rating</p>
                    <RatingStar count={1} />
                </div>

                <div className="form-item">
                    <p className='text-gray-500 font-Ubuntu'>Write a message</p>
                    <textarea placeholder='Message' className='min-h-[100px] text-DarkGray w-full resize-y border mt-2 rounded-md border-gray-200 outline-none p-2'></textarea>
                </div>
                <div className="form-item">
                    <p className='font-WorkSans text-Green font-medium'>Do you recommended this product?</p>
                    <div className="radio-wrapper w-[200px] flex mt-1 justify-between items-center">
                        {
                            recomends.map((item, index) =>
                                <button className="radio-item flex items-center">
                                    <button onClick={() => setRecomend(index)} type='button' className={`${recomend === index ? 'border-LightBlue' : 'border-gray-300'} w-4 h-4 rounded-full bg-transparent border-2  flex items-center justify-center `}>
                                        <span className={`${recomend === index ? 'opacity-100' : 'opacity-0'} duration-300 ball w-2 h-2 bg-LightBlue rounded-full block`}></span>
                                    </button>
                                    <span className='text-Green pl-2 font-Ubuntu'>{item}</span>
                                </button>
                            )
                        }

                    </div>
                </div>

                <div className="form-item">
                    <button className='px-4 py-2.5 rounded duration-150 hover:opacity-80 shadow-2 text-white bg-LightBlue w-fit'>Submit Review</button>
                </div>
            </form>

        </div>
    )
}

export default AddReviewForm