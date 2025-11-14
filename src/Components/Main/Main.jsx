import React from 'react'
import line from '/src/assets/imgs/line.png'
import explore from '/src/assets/imgs/explore.png'
import { Fa42Group, FaMessage, FaUserGroup } from 'react-icons/fa6'

function Main() {
  return (
    <div className='w-[1443px] h-[557px] bg-fuchsia-200 relative top-[230px]'>
        <div className='w-[1240px] h-[380px] flex flex-col gap-[65px] relative top-24 left-[100px]'>
            <div className='w-[1200px] h-[65px] text-center justify-center items-center uppercase'>
                <h1 className='font-[400] text-[66px] leading-[77px] tracking-[0%]'>Connection Made Simple</h1>
            </div>
            <div className='flex flex-col w-[1240px] h-[360px] gap-[40px]'>
                <div className='w-[923px] h-[93px] relative left-40'>
                    <div className='w-[85px] h-[85px] bg-white rounded-full shadow-md shadow-gray-400'>
                        <h1 className='w-[36px] h-[25px] relative top-4 font-[700] text-[36px] left-5'>01</h1>
                    </div>
                    <img className='w-[770px] h-[32px] relative left-[83px] bottom-12' src={line} alt="" />
                    <div className='w-[85px] h-[85px] relative bottom-[114px] left-96 bg-white rounded-full shadow-md shadow-gray-400'>
                        <h1 className='w-[36px] h-[25px] relative top-4 font-[700] text-[36px] left-5'>02</h1>
                    </div>
                    <div className='w-[85px] h-[85px] relative bottom-[198px] left-[830px] bg-white rounded-full shadow-md shadow-gray-400'>
                        <h1 className='w-[36px] h-[25px] relative top-4 font-[700] text-[36px] left-5'>03</h1>
                    </div>
                </div>
                <div className='flex flex-row w-[1240px] relative bottom-5 gap-4 h-[148px]'>
                    <div className='w-[400px] bg-white drop-shadow-lg shadow-black h-[148px] border-[1px]  rounded-[20px]'>
                            <div className='w-[364px] h-[113px] relative top-4 left-4'>
                                <div className='w-[50px] h-[50px] relative top-1 left-2 rounded-[90px] bg-gradient-to-tr from-pink-400 via-fuchsia-600 to-fuchsia-600'>
                                    <img className='w-[22px] h-[22px] relative top-3 left-[14px]' src={explore} alt="" /></div>
                                    <div>
                                    <h1 className='w-[153px] h-[13px] relative bottom-8 left-[65px] font-[700] text-[18px] leading-[28px] tracking-[0%]'>Explore Hangouts</h1></div>
                                    <div className='w-[324px] h-[3px] bg-gradient-to-tr from-pink-100 via-fuchsia-700 to-fuchsia-100 relative border-[1px] left-3'></div>
                                    <div>
                                    <h1 className='w-[352px] h-[35px] capitalize relative top-1 left-2 font-[400] text-[14px] leading-[24px] traking-[0%]'>Browse through activities posted by models and find one that speaks to you.</h1>
                                </div>
                            </div>
                    </div>
                     <div className='w-[400px] bg-white drop-shadow-lg shadow-black h-[148px] border-[1px]  rounded-[20px]'>
                            <div className='w-[364px] h-[113px] relative top-4 left-4'>
                                <div className='w-[50px] h-[50px] relative top-1 left-2 rounded-[90px] bg-gradient-to-tr from-pink-400 via-fuchsia-600 to-fuchsia-600'>
                                    <FaUserGroup className='text-white relative top-4 left-4'/>
                                </div>
                                    <div>
                                    <h1 className='w-[153px] h-[13px] relative bottom-8 left-[65px] font-[700] text-[18px] leading-[28px] tracking-[0%]'>Request to Join</h1></div>
                                    <div className='w-[324px] h-[3px] bg-gradient-to-tr from-pink-100 via-fuchsia-700 to-fuchsia-100 relative border-[1px] left-3'></div>
                                    <div>
                                    <h1 className='w-[352px] h-[35px] capitalize relative top-1 left-2 font-[400] text-[14px] leading-[24px] traking-[0%]'>Click Request a Hangout and let the model know you’re interested.</h1>
                                </div>
                            </div>
                        </div>
                         <div className='w-[400px] bg-white drop-shadow-lg shadow-black h-[148px] border-[1px]  rounded-[20px]'>
                            <div className='w-[364px] h-[113px] relative top-4 left-4'>
                                <div className='w-[50px] h-[50px] relative top-1 left-2 rounded-[90px] bg-gradient-to-tr from-pink-400 via-fuchsia-600 to-fuchsia-600'>
                                    <FaMessage className='text-white relative top-4 left-4'/>
                                    </div>
                                    <div>
                                    <h1 className='w-[153px] h-[13px] relative bottom-8 left-[65px] font-[700] text-[18px] leading-[28px] tracking-[0%]'>Chat and Plan</h1></div>
                                    <div className='w-[324px] h-[3px] bg-gradient-to-tr from-pink-100 via-fuchsia-700 to-fuchsia-100 relative border-[1px] left-3'></div>
                                    <div>
                                    <h1 className='w-[352px] h-[35px] capitalize relative top-1 left-2 font-[400] text-[14px] leading-[24px] traking-[0%]'>Once accepted unlock the private chat window to finalize details ready for unforgettable time!</h1>
                                </div>
                            </div>
                        </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Main