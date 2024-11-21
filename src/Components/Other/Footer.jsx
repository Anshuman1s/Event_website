import React from 'react';
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className=' h-[10vw] w-full flex p-[0.1px]'>
      <div className="w-[100vw] bg-blue-600 text-white h-[10vw]">
        <div className="icons flex gap-20 justify-center mt-10">
          <h1 className='text-2xl hover:scale-125 cursor-pointer duration-500'>
            <FaGithub className='inline-block' />
          </h1>
          <h1 className='text-2xl hover:scale-125 cursor-pointer duration-500'>
            <SiGmail className='inline-block' />
          </h1>
          <h1 className='text-2xl hover:scale-125 cursor-pointer duration-500'>
            <FaInstagram className='inline-block' />
          </h1>
          <h1 className='text-2xl hover:scale-125 cursor-pointer duration-500'>
            <FaLinkedinIn className='inline-block' />
          </h1>
        </div>
        <div className="w-[10vw] h-[3vw] text-center flex items-center justify-center ml-[46vw] mt-10 ">
          <Link
            to={"/contact"}
            className='contact-link text-xl font-[Saira] font-medium relative  '
          >
            Contact Us
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
