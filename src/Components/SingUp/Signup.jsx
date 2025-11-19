import React from 'react'
import logo from '/src/assets/imgs/logo.png'
import tick from '/src/assets/imgs/tick.png'
import model from '/src/assets/imgs/model.png'
import { IoCloseOutline } from 'react-icons/io5'


function Signup({signUp,setSignUp}) {
  return (
    <>
        {
            signUp && <div className='signup fixed top-0 left-0 bg-black/50'>
                <div className='w-[1440px] h-[4000px]'>
                <div className='relative left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 shadow-md bg-gradient-to-r from-purple-500 to-purple-700 dark:bg-gray-900 rounded-md duration-200 w-[1200px] h-[600px]'>
                <div className='flex flex-col w-[1150px] relative top-8 left-7 h-[550px] rounded-[30px] bg-white items-center justify-between '>
                    <img className='relative right-[480px] top-5 w-[130px] h-7' src={logo} alt="" />
                    <div className='w-[1080px] h-[450px] gap-8 relative bottom-8 flex flow-row'>
                        <div className='flex flex-col w-[520px] h-[430px] gap-8'>
                            <h1 className='w-[500px] h-12 tracking-[0%] font-[600] text-[40px]'>Apply to Become a Model</h1>
                            <div className='flex flex-col w-[500px] h-[350px] gap-1'>
                                <div className='flex flex-col w-[500px] h-[90px] gap-2'>
                                    <h1 className='w-[500px] h-6 font-[600] text-[21px] relative left-2'>Name</h1>
                                    <input className='w-[500px] text-[rgba(255,255,255,1)] border-[1px] border-gray-200 rounded-[70px] pl-5 pr-5 h-[40px]' type="text" placeholder='Enter Your Name' />
                                </div>
                                <div className='flex flex-col w-[500px] h-[90px] relative bottom-2 gap-2'>
                                    <h1 className='w-[500px] h-6 font-[600] text-[21px] relative left-2'>Email</h1>
                                    <input className='w-[500px] text-[rgba(255,255,255,1)] border-[1px] border-gray-200 rounded-[70px] pl-5 pr-5 h-[40px]' type="text" placeholder='Enter Your Email' />
                                </div>
                                <div className='flex flex-col w-[500px] h-[90px] relative bottom-2 gap-2'>
                                    <h1 className='w-[500px] h-6 font-[600] text-[21px] relative left-2'>Password</h1>
                                    <input className='w-[500px] text-[rgba(255,255,255,1)] border-[1px] border-gray-200 rounded-[70px] pl-5 pr-5 h-[40px]' type="text" placeholder='Enter Your Password' />
                                </div>
                                <div className='flex flex-row relative bottom-4 w-[500px] h-6 justify-between'>
                                    <div className='flex flex-row w-[320px] h-6 gap-2'>
                                        <img src={tick} alt="" />
                                    <h1 className='font-[400] text-[15px]'>I agree to all terms and privacy policies.</h1>
                                    </div>
                                    <h1 className='font-[700] text-[16px]'>Forget Password?</h1>
                            </div>
                            <div className='flex flex-row w-[500px] h-12 gap-2'>
                                <div className='flex flex-row text-white'>
                                    <button className='w-[250px] h-12 text-[22px] rounded-full font-[600] bg-gradient-to-tr from-purple-500 to-violet-700'>Sign in</button>
                                </div>
                                 <div className='flex flex-row text-white'>
                                    <button className='w-[250px] h-12 text-[22px] rounded-full font-[600] bg-gradient-to-tr from-purple-500 to-violet-700'>Sign up</button>
                                </div>
                            </div>
                            </div>
                        </div>
                       <img className='border-[1px] border-gray-300 p-2 rounded-[50px] drop-shadow-md shadow-gray-300' src={model} alt="" />
                </div>
                </div>
                </div>
                </div>
            </div>
        }

    </>
  )
}

export default Signup