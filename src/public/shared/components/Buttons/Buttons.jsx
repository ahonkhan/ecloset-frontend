import React from 'react'
import style from './Button.module.scss';
export const ButtonLgLightBlue = ({ children }) => {
    return (
        <button className={`${style.buttonLgLightBlue} bg-LightBlue rounded-[3px] border-2 font-medium text-base text-white px-8 py-[8px] sm:px-10 md:py-[10px] md:px-[70px] hover:bg-darkBlue border-none outline-none duration-300 xl:px-[100px]  2xl:py-[12px] 2xl:px-[150px]  border-LightBlue`}>{children}</button>
    )
}

export const ButtonMdDarkBlue = ({ children }) => {
    return (
        <button className={`${style.buttonLgLightBlue} bg-darkBlue rounded-[3px] border-2 font-medium text-base md:text-lg xl:text-xl 2xl:text-2xl text-white px-8 py-[8px] sm:px-10 md:py-[12px] md:px-[60px] hover:bg-LightBlue border-none outline-none duration-300 xl:px-[80px]  2xl:py-[20px] 2xl:px-[92px]  border-darkBlue`}>{children}</button>
    )
}

export const ButtonGreen = ({ children }) => {
    return (
        <button className={`${style.buttonGreen} px-2 py-2 md:px-4 xl:px-7 xl:py-3 2xl:px-7 2xl:py-3 bg-Green rounded-[5px] border-2 font-medium text-base text-white  hover:opacity-80 border-none outline-none duration-300   border-darkBlue`}>{children}</button>
    )
}
export const ButtonYellowOutline = ({ children }) => {
    return (
        <button className={`${style.buttonYellowOutline} group flex items-center justify-center gap-2 text-LightGray px-2 py-2 md:px-4 xl:px-7 xl:py-3 2xl:px-7 2xl:py-3  rounded-[5px] border-2 font-medium text-base hover:opacity-80 outline-none duration-300   border-YellowDark`}>{children}</button>
    )
}
export const ButtonYellowOutlineIcon = ({ children }) => {
    return (
        <ButtonYellowOutline>
            <span className='mb-1'>{children}</span>
            <span><svg className='w-[25px] h-[14px] stroke-YellowDark group-hover:stroke-LightGray group-hover:pl-2 duration-100' viewBox="0 0 25 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7H23M23 7L17 1M23 7L17 13" stroke-width="2" stroke-linecap="round" />
            </svg></span>
        </ButtonYellowOutline>
    )
}

