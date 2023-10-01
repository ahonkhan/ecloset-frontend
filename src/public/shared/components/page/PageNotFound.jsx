import React from 'react'
import './pageMissing.scss'
import { PageAnimation } from './PageAnimation'
import DefaultWrapper from '../wrappers/DefaultWrapper'
import img from '../../assets/404.svg'
import { Link } from 'react-router-dom'
const PageNotFound = () => {
    return (
        <PageAnimation>
            <DefaultWrapper>
                <div className=" md:min-h-[600px] px-4 font-Ubuntu  flex items-center justify-center ">
                    <div class="box">
                        <div class="box__img flex justify-center">
                            <img className='h-[200px] md:h-[350px]' src={img} alt="" />
                        </div>

                        <div class="box__description text-center flex flex-col items-center gap-2">
                            <div class="box__description-container flex flex-col">
                                <h2 class="box__description-title text-2xl md:text-3xl text-blue-500 ">Whoops!</h2>
                                <p class="box__description-text py-2 text-base md:text-lg text-gray-700">It seems like we couldn't find the page you were looking for</p>
                            </div>

                            <Link to={'/fasfas'} className='px-6 py-2 w-fit rounded-full bg-blue-500 ring-offset-1 text-white focus:ring-1'>Back</Link>
                        </div>

                    </div>
                </div>
            </DefaultWrapper>
        </PageAnimation>)
}

export default PageNotFound