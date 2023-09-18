import React from "react";
import { MdOutlineFacebook } from "react-icons/md";

import {
    BiLogoInstagramAlt,
    BiLogoLinkedin,
    BiLogoTwitter,
} from "react-icons/bi";
import LogoWhite from "../assets/LogoWhite";

const Footer = () => {
    return (
        <footer className=" bg-Green text-White font-WorkSans mt-[200px] ">
            <div className="site-container pt-6">
                <div className="footer-wrapper py-10 flex gap-y-6 flex-wrap sm:justify-between">
                    <div className="footerItems flex justify-center lg:justify-start w-full items-center md:items-start lg:w-fit">
                        <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start text-center lg:text-start">
                            <LogoWhite />
                            <p className="my-2">
                                A data-driven Blogger platform. Always there for you.
                            </p>
                            <div className="icon flex text-center text-3xl gap-2   ">
                                <a href="" className="hover:opacity-80 duration-300">
                                    <MdOutlineFacebook />
                                </a>
                                <a href="" className="hover:opacity-80 duration-300">
                                    <BiLogoInstagramAlt />
                                </a>
                                <a href="" className="hover:opacity-80 duration-300">
                                    <BiLogoTwitter />
                                </a>
                                <a href="" className="hover:opacity-80 duration-300">
                                    <BiLogoLinkedin />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="footerItems items-center w-[50%] sm:w-fit">
                        <ul className="flex flex-col md:items-center gap-4">
                            <li className="font-medium text-2xl  ">Resources</li>
                            <li className="hover:opacity-80 duration-300">
                                <a href="">Blog</a>
                            </li>
                            <li className="hover:opacity-80 duration-300">
                                <a href="">Support</a>
                            </li>
                            <li className="hover:opacity-80 duration-300">
                                <a href="">FAC's</a>
                            </li>
                            <li className="hover:opacity-80 duration-300">
                                <a href="">Shop</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footerItems flex justify-end  w-[50%]  sm:w-fit">
                        <ul className="flex flex-col  md:items-center gap-4 ">
                            <li className="font-medium text-2xl  ">Company</li>
                            <li className="hover:opacity-80 duration-300">
                                <a href="">About Us</a>
                            </li>
                            <li className="hover:opacity-80 duration-300">
                                <a href="">Contact Us</a>
                            </li>
                            <li className="hover:opacity-80 duration-300">
                                <a href="">Services</a>
                            </li>
                            <li className="hover:opacity-80 duration-300">
                                <a href="">Terms and Privacy</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footerItems flex justify-center items-center xl:items-start w-full  sm:w-fit lg:w-full xl:w-fit">
                        <ul className="flex flex-col items-start gap-4 w-full">
                            <li className="font-medium text-2xl  ">Newsletter</li>
                            <li className="flex gap-4 w-full ">
                                <input
                                    type="text"
                                    placeholder="Enter your email"
                                    className="outline-none w-full py-1.5 bg-transparent border-b border-white"
                                />
                                <button className="shrink-0 bg-LightBlue rounded  px-3">
                                    Subscribe
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex site-container justify-center md:justify-between gap-x-8 text-center md:text-start flex-wrap items-center py-3 border-t border-White ">
                <p>+244-654594531</p>
                <p>eclosetcompany@gmail.com</p>
                <p>Designbysnilima421@gmail.com</p>
            </div>
        </footer>
    );
};

export default Footer;