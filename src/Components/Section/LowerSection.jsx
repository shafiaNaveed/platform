import React from 'react'
import vector from '/src/assets/imgs/vector.png'
import vector2 from '/src/assets/imgs/vector 2.png'
import img from '/src/assets/imgs/image1.png'
import img2 from '/src/assets/imgs/image2.png'
import img3 from '/src/assets/imgs/image3.png'
import calender from '/src/assets/imgs/date.png'
import time from '/src/assets/imgs/time.png'
import location from '/src/assets/imgs/loc.png'

const profilers = [
  {
    name: "Alice Johnson",
    activity: "Uploaded a new photo",
    data: "Landscape photography collection",
    time: "2025-11-09T10:15:00Z",
    location: "San Francisco, USA",
    img: "https://example.com/images/alice.jpg"
  },
  {
  nam: "Michael Chen",
  activit: "Completed a workout",
  dat: "5km morning run",
  tim: "2025-11-09T06:30:00Z",
  locatio: "Vancouver, Canada",
  im: "https://example.com/images/michael.jpg"
  },
  {
    name: "Sofia Martinez",
    activity: "Shared a new recipe",
    data: "Vegan pasta with pesto sauce",
    time: "2025-11-08T18:45:00Z",
    location: "Madrid, Spain",
    img: "https://example.com/images/sofia.jpg"
  },
  {
    name: "David Kim",
    activity: "Posted a project update",
    data: "AI chatbot development progress",
    time: "2025-11-09T14:20:00Z",
    location: "Seoul, South Korea",
    img: "https://example.com/images/david.jpg"
  },
  {
    name: "Emma Williams",
    activity: "Attended a live concert",
    data: "Coldplay World Tour",
    time: "2025-11-07T21:00:00Z",
    location: "London, UK",
    img: "https://example.com/images/emma.jpg"
  },
  {
    name: "Liam Patel",
    activity: "Started a new course",
    data: "Advanced Machine Learning",
    time: "2025-11-08T09:00:00Z",
    location: "Mumbai, India",
    img: "https://example.com/images/liam.jpg"
  }
]


function LowerSection() {
  return (
    <>
    <div className='w-20 h-20 relative top-[460px] left-2'>
      <button className='w-16 h-16 border relative top-2 left-2 rounded-full border-purple-600'><img className='relative left-[22px]' src={vector} alt="" /></button>
    </div>
    <div className='w-[1240px] h-[530px] relative top-[150px] left-[100px] gap-5 grid grid-cols-3'>
      <div className='w-[400px] h-[530px] shadow-md shadow-gray-400 rounded-3xl'>
        <div className='w-[370px] h-[282px] relative top-4 rounded-[25px] left-4'>
          <img src={img} alt="" />
        </div>
        <div className='w-[360px] h-[280px] relative left-4'>
          <h1 className='font-[700] text-[26px] leading-[77px] tracking-[0%]'>Jordan Wants to have a stroll</h1>
          <div className='flex flex-col w-[370px] h-[148px] gap-[25px]'>
            <div className='flex flex-col w-[370px] h-[68px] gap-[10px]'>
              <div className='flex flex-row w-[370px] h-[29px] gap-[20px]'>
                <div className='flex flex-row w-[168px] h-[29px] border border-gray-400 rounded-[120px] gap-[10px] pt-[7px] pr-[10px] pb-[7px] pl-[10px]'>
                  <img className='w-[14px] h-[14px]' src={calender} alt="" />
                  <h2 className='w-[124px] h-[13px] font-[500] text-[18px] leading-[30px] tracking-[0%] items-center relative bottom-2'>Friday, Dec 5th</h2>
                </div>
                <div className='flex flex-row w-[113px] h-[29px] border border-gray-400 rounded-[120px] gap-[10px] pt-[7px] pr-[10px] pb-[7px] pl-[10px]'>
                  <img className='w-[14px] h-[14px]' src={time} alt="" />
                  <h2 className='w-[67px] h-[13px] font-[500] text-[18px] leading-[30px] tracking-[0%] items-center relative bottom-2'>9:00 PM</h2>
                </div>
              </div>
              <div className='flex flex-row w-[297px] h-[29px] border border-gray-400 rounded-[120px] gap-[10px] pt-[7px] pr-[10px] pb-[7px] pl-[10px]'>
                <img className='w-[14px] h-[14px]' src={location} alt="" />
                <h2 className='w-[242px] h-[13px] font-[500] text-[18px] leading-[30px] tracking-[0%] items-center relative bottom-2'>High Park in Toronto, Canada </h2>
              </div>
            </div>
            <button className='w-[195px] text-white h-[55px] rounded-[30px] p-[10px] gap-[10px] bg-gradient-to-tr from-purple-400 via-purple-600 to-purple-800'>
              Request a Hangout
            </button>
        </div>
        </div>
      </div>
      <div className='w-[400px] h-[530px] bg-purple-200 shadow-md shadow-gray-400 rounded-3xl'>
        <div className='w-[370px] h-[282px] relative top-4 rounded-[25px] left-4'>
          <img src={img2} alt="" />
        </div>
        <div className='w-[360px] h-[280px] relative left-4'>
          <h1 className='font-[700] text-[26px] leading-[77px] tracking-[0%]'>Chris wants to grab a coffee </h1>
          <div className='flex flex-col w-[370px] h-[148px] gap-[25px]'>
            <div className='flex flex-col w-[370px] h-[68px] gap-[10px]'>
              <div className='flex flex-row w-[370px] h-[29px] gap-[20px]'>
                <div className='flex flex-row w-[168px] h-[29px] border border-gray-400 rounded-[120px] gap-[10px] pt-[7px] pr-[10px] pb-[7px] pl-[10px]'>
                  <img className='w-[14px] h-[14px]' src={calender} alt="" />
                  <h2 className='w-[124px] h-[13px] font-[500] text-[18px] leading-[30px] tracking-[0%] items-center relative bottom-2'>Friday, Dec 8th</h2>
                </div>
                <div className='flex flex-row w-[114px] h-[29px] border border-gray-400 rounded-[120px] gap-[10px] pt-[7px] pr-[10px] pb-[7px] pl-[10px]'>
                  <img className='w-[14px] h-[14px]' src={time} alt="" />
                  <h2 className='w-[67px] h-[13px] font-[500] text-[18px] leading-[30px] tracking-[0%] items-center relative bottom-2'>5:00 PM</h2>
                </div>
              </div>
              <div className='flex flex-row w-[297px] h-[29px] border border-gray-400 rounded-[120px] gap-[10px] pt-[7px] pr-[10px] pb-[7px] pl-[10px]'>
                <img className='w-[14px] h-[14px]' src={location} alt="" />
                <h2 className='w-[242px] h-[13px] font-[500] text-[18px] leading-[30px] tracking-[0%] items-center relative bottom-2'>yummy restaurant, New York</h2>
              </div>
            </div>
            <button className='w-[195px] text-white h-[55px] rounded-[30px] p-[10px] gap-[10px] bg-gradient-to-tr from-purple-400 via-purple-600 to-purple-800'>
              Request a Hangout
            </button>
        </div>
        </div>
      </div>
      <div className='w-[400px] h-[530px] shadow-md shadow-gray-400 rounded-3xl'>
        <div className='w-[370px] h-[282px] relative top-4 rounded-[25px] left-4'>
          <img src={img3} alt="" />
        </div>
        <div className='w-[360px] h-[280px] relative left-4'>
          <h1 className='font-[700] text-[26px] leading-[77px] tracking-[0%]'>Ally Wants to go for a walk </h1>
          <div className='flex flex-col w-[370px] h-[148px] gap-[25px]'>
            <div className='flex flex-col w-[370px] h-[68px] gap-[10px]'>
              <div className='flex flex-row w-[370px] h-[29px] gap-[20px]'>
                <div className='flex flex-row w-[168px] h-[29px] border border-gray-400 rounded-[120px] gap-[10px] pt-[7px] pr-[10px] pb-[7px] pl-[10px]'>
                  <img className='w-[14px] h-[14px]' src={calender} alt="" />
                  <h2 className='w-[124px] h-[13px] font-[500] text-[18px] leading-[30px] tracking-[0%] items-center relative bottom-2'>Friday, Dec 8th</h2>
                </div>
                <div className='flex flex-row w-[114px] h-[29px] border border-gray-400 rounded-[120px] gap-[10px] pt-[7px] pr-[10px] pb-[7px] pl-[10px]'>
                  <img className='w-[14px] h-[14px]' src={time} alt="" />
                  <h2 className='w-[67px] h-[13px] font-[500] text-[18px] leading-[30px] tracking-[0%] items-center relative bottom-2'>7:00 PM</h2>
                </div>
              </div>
              <div className='flex flex-row w-[297px] h-[29px] border border-gray-400 rounded-[120px] gap-[10px] pt-[7px] pr-[10px] pb-[7px] pl-[10px]'>
                <img className='w-[14px] h-[14px]' src={location} alt="" />
                <h2 className='w-[244px] h-[13px] font-[500] text-[18px] leading-[30px] tracking-[0%] items-center relative bottom-2'>Stanley Park's Seawall Canada</h2>
              </div>
            </div>
            <button className='w-[195px] text-white h-[55px] rounded-[30px] p-[10px] gap-[10px] bg-gradient-to-tr from-purple-400 via-purple-600 to-purple-800'>
              Request a Hangout
            </button>
        </div>
        </div>
      </div>
    </div>
    <div className='w-20 h-20 relative bottom-[150px] left-[1343px] '>
      <button className='w-16 h-16 relative top-2 left-[10px] rounded-full bg-gradient-to-tr from-purple-700 to-purple-500'>
        <img className='relative left-[24px]' src={vector2} alt="" />
        </button>
    </div>
    </>
  )
}

export default LowerSection