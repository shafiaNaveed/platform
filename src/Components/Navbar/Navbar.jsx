import React from 'react'
import logo from '/src/assets/imgs/logo.png'

const Navbar = () => {
  return (
    <div className='h-[101px] w-[1440px] bg-gray-100'>
        <div className='flex flex-row w-[1236px] h-[55px] relative top-[23px] left-[104px] gap-[119px]'>
            <div>
              <img src={logo} alt="" className='h-11 w-[213px]'/>
            </div>
            <div className='flex flow-row w-[519px] h-[13px] gap-[50px] mt-2 ml-16'>
              <ul className='flex flex-row gap-10 text-[18px] cursor-pointer font-[400]'>
                <li>Home</li>
                <li>Browser Hangouts</li>
                <li>How it Works</li>
                <li>Contact</li>
              </ul>
            </div>
            <button className='flex flex-row w-[259px] h-[55px] text-white items-center justify-center rounded-[90px] bg-black p-3 gap-3 bg-gradient-to-r from-purple-500 via-purple-700 to-purple-900'>
              Apply to Become a Model
            </button>
        </div>
    </div>
  )
}

export default Navbar