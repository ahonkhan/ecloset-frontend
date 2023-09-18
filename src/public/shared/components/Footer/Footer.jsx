import React from "react";
import style from "./footer.module.scss";
import IconInstagram from "../../assets/Icons/IconInstagram";
import IconFacebook from "../../assets/Icons/IconFacebook";
import LogoWhite from "../../assets/LogoWhite";
import IconTwitter from "../../assets/Icons/IconTwitter";
import IconLinkedIn from "../../assets/Icons/IconLinkedIn";
import { MdOutlineFacebook } from "react-icons/md";

import {
  BiLogoInstagramAlt,
  BiLogoLinkedin,
  BiLogoTwitter,
} from "react-icons/bi";

const Footer = () => {
  return (
    <footer className=" bg-Green text-White font-WorkSans ">
      <div className=" px-20 pt-6">
        <div className="footer-wrapper flex-wrap py-10 flex gap-[60px] md:justify-between ">
          <div className="footerItems items-center  max-w-[290px]">
            <div className="">
              <LogoWhite />
              <p className="mt-2 mb-8">
                A data-driven Blogger platform. Always there for you.
              </p>
              <div className="icon flex tems-center text-3xl gap-4   ">
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
          <div className="footerItems items-center ">
            <ul className="flex flex-col md:items-center gap-4 ">
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
          <div className="footerItems items-center  ">
            <ul className="flex flex-col md:items-center gap-4 ">
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
          <div className="footerItems items-center  max-w-[290px]">
            <ul className="flex flex-col items-start gap-4 ">
              <li className="font-medium text-2xl  ">Newsletter</li>
              <li className="flex gap-4">
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
      <div className="flex justify-between items-center py-3 border-t border-White px-20 ">
        <p>+244-654594531</p>
        <p>eclosetcompany@gmail.com</p>
        <p>Designbysnilima421@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
