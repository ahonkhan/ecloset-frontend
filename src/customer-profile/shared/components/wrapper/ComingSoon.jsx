import React from 'react'
import rocket from '../../assets/coming-soon.gif'
import { PageAnimation } from '../../../../public/shared/components/page/PageAnimation'
const ComingSoon = () => {
    return (
        <PageAnimation>
            <div className='h-[515px] w-full flex items-center justify-center'>
                <div className="text-center">
                    <img className='h-[250px]' src={rocket} alt="" />
                    <h1 className='text-3xl text-gray-700 font-Ubuntu '>Coming Soon</h1>
                </div>
            </div>
        </PageAnimation>
    )
}

export default ComingSoon