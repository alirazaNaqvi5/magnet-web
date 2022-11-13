import React from 'react'
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import Link from 'next/link'
import MagnitMap from './MagnitMap';
 const Footer = () => {
  return (
    <div className='w-full bg-[#14213d]'>
        <div className='pt-10 px-24'>
            <img src="/image/logo.png" alt="/" className='w-[500px] h-[90px]' />
        </div>
        <div className='md:w-[1240px] md:grid md:grid-cols-3'>
            <div className='mt-5'>
            <h1 className=' text-white pl-24 text-2xl font-bold'>Get in Touch</h1>  
                <div className='flex mx-auto text-white gap-8 pl-20 py-3'>
                    <HiLocationMarker size={50} />
                   <p className='text-white'>3.1 Universal Square, Devonshire St North, Manchester M12 6JH</p>
                </div>
                <div className='flex mx-auto text-white gap-8 pl-20 py-3'>
                    <HiPhone size={40} />
                    <p className='text-white'>0161 974 6110</p>
                </div>
                <div className='flex mx-auto text-white gap-8 pl-20 py-3'>
                    <HiMail size={40} />
                    <p className='text-white'>info@magnetrecruit.com</p>
                </div>
                <div className='flex mx-auto sm:justify-center text-white gap-8 pl-20 py-3'>
                    <p className='text-white'>Interact with Us on Social Media</p>
                </div>
                <div className='flex sm:justify-center items-center gap-10 text-white  pl-20 py-3'>
                    <BsFacebook size={30} className='hover:fill-[#fca311]'/>
                    <BsTwitter size={30} className='hover:fill-[#fca311]'/>
                    <BsLinkedin size={30} className='hover:fill-[#fca311]'/>
                </div>
            </div>
            <div className='mt-5'>
            <h1 className=' text-white pl-16 md:text-justify text-2xl mx-auto font-bold sm:text-center'>Quick Links</h1>
                <div className='md:text-justify sm:text-center '>
                    <ul className='text-white pl-16 cursor-pointer  py-5'>
                        <li className='py-2 text-[#fca311] hover:text-white'>Magnet Recruit</li>
                        <li className='py-2 hover:text-[#fca311]'>Who We Are</li>
                        <li className='py-2 hover:text-[#fca311]'>Clients</li>
                        <li className='py-2 hover:text-[#fca311]'>Candidates</li>
                        <li className='py-2 hover:text-[#fca311]'>Search Job</li>
                        <li className='py-2 hover:text-[#fca311]'>Contact Us</li>
                    </ul>
                </div>
            </div>
            {/* <div className=' mx-auto '>
                <MagnitMap/>
            </div> */}
        </div>
        <div className='md:flex sm:grid justify-center md:gap-20 py-10 text-sm   text-white '>
            <a href='/'>Privacy Policy</a>
            <a href='/'>Cookie Policy</a>
            <a href='/'>Retention Policy</a>
        </div>
        <div className='flex justify-center py-2 text-sm text-white '>
            <p>Copyright © 2022 Magnet Recruit Limited. All Rights Reserved.</p>
        </div>
    </div>
  )
}
export default Footer;