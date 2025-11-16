import React from 'react'
import vector from '/src/assets/imgs/1.png'
import vector2 from '/src/assets/imgs/2.png'
import { FaCross, FaFacebook, FaInstagram, FaMessage } from 'react-icons/fa6'
import { FaPhone } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-[1440px] h-[431px] bg-[url("/src/assets/imgs/bg.png")] text-white relative top-[550px] gap-10 flex flex-row bg-purple-600'>
        <div className='flex flex-col w-[400px] h-[300px] top-20 left-[100px] relative'>  
            <div className='w-[364px] h-[66px] flex flex-row'>
                <img src={vector} alt="" />
                <img className='relative right-[66px]' src={vector2} alt="" />
            </div>
            <div className='w-[372px] h-[140px] relative top-[40px]'>
                <h1 className='font-[400] text-[18px] text-white leading-[28px] tracking-[0%]'>[Platform Name] is your gateway to exclusive, real-world connections with the models you admire. We’re dedicated to creating meaningful experiences in a secure, user-friendly environment.</h1>
            </div>
        </div>
        <div className='w-[140px] h-[221px] relative top-24 flex flex-col left-[150px]'>
            <h1 className='w-[136px h-8 text-[26px] font-[700] leading-[100%] tracking-[0%]'>Quick Links</h1>
            <div className='flex flex-col relative top-3'>
                <ul>
                    <li className='relative top-3'>Home</li>
                    <li className='top-5 relative'>About Us</li>
                    <li className='top-7 relative'>How It Works</li>
                    <li className='top-9 relative'>Browser Hangouts</li>
                    <li className='top-12 relative'>Contact Us</li>
                </ul>
            </div>
        </div>
        <div className='flex flex-col h-[130px] left-[230px] relative top-24'>
            <h1 className='w-[99px] h-8 relative font-[700] text-[28px] leading-[100%] tracking-[0%]'>Contact</h1>
            <div className='flex flex-col w-[191px] h-[58px] relative top-6'>
                <div className='w-[191px] h-[29px] flex flex-row'>
                    <FaMessage className='w-[25px] h-[19px]'/>
                   <h1 className='w-[157px] h-[52px] relative bottom-1 left-3'>Info@email669.com</h1>
                </div>
                <div className='w-[191px] h-[29px] flex flex-row'>
                    <FaPhone className='w-[25px] h-[19px]'/>
                   <h1 className='w-[157px] h-[52px] relative bottom-1 left-3'>+ 111-252-949-887</h1>
                </div>
            </div>
        </div>
        <div className='w-[152px] h-[91px] flex flex-col gap-3 relative top-24 left-[280px]'>
            <h1 className='w-[74px] h-8 relative font-[700] text-[28px] leading-[100%] tracking-[0%]'>Social</h1>
            <div className='rounded-full flex flex-row gap-2 relative top-2'>
                <FaFacebook className='text-white w-[44px] h-[44px]'/>
                <FaInstagram className='text-white w-[44px] h-[44px]'/>
                <FaCross className='text-white w-[44px] h-[44px]'/>
            </div>
        </div>
        <h1 className='w-[329px] h-[13px] relative top-[400px] right-[400px]'>©2024 Proficient PR. All Rights Reserved.</h1>
    </div>
  )
}

export default Footer