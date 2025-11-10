import React from 'react'
import logo from '/src/assets/imgs/logo2.png'
import img1 from '/src/assets/imgs/img1.png'
import img2 from '/src/assets/imgs/img2.png'
import img3 from '/src/assets/imgs/img3.png'
import img4 from '/src/assets/imgs/img4.png'
import img5 from '/src/assets/imgs/img5.png'
import girlImg from '/src/assets/imgs/girl.png'
import Profile from '/src/assets/imgs/profile.png'
import star from '/src/assets/imgs/star.png'

const Hero = () => {
  return (
    <div className='w-[1440px] flex flex-row h-[714px] bg-[linear-gradient(to_right,_#c084fc,_#9333ea,_#6b21a8,_#3b0764)]'>
      <div className='w-[677px] h-[168px] relative top-[225px] left-[65px] text-white'>
        <img className='flex relative top-6 left-2 flex-row w-[85px] h-[43px]' src={logo} alt="" s/>
        
        <h1 className='w-[470px] h-[70px] relative bottom-[44px] left-[100px] font-[400] text-[62px] leading-[84px] tracking-[0%] items-center'>HANGOUT WITH</h1>
        <h1  className='w-[670px] h-[70px] relative bottom-9 font-[400] text-[62px] leading-[84px] tracking-[0%] items-center'>MODELS IN YOUR AREA</h1>
        <div className='flex flex-col w-[594px] h-[149px] gap-[30px]'>
          <h1 className='w-[594px] h-[69px] font-[400] text-[18px] leading-[28px] tracking-[0%] items-center'>Your dream hangout is just a request away. Whether it’s grabbing a coffee or catching a movie, now you can hang out with the models you love, on your terms.</h1>
          <div className='flex flex-row w-[176px] h-[50px]'>
            <img className='w-[50px] h-[50px]' src={img1} alt="" />
            <img className='w-[50px] h-[50px]' src={img2} alt="" />
            <img className='w-[50px] h-[50px]' src={img3} alt="" />
            <img className='w-[50px] h-[50px]' src={img4} alt="" />
            <img className='w-[30px] h-[30px] relative right-10 top-[10px]' src={img5} alt="" />
          </div>
        </div>
      </div>
      <div className='w-[550px] h-[698px] top-5 left-36 relative'>
        <div className='w-[450px] h-[560px] rounded-tl-[100px] rounded-br-[100px] bg-black top-[60px] left-24 relative'>
        </div>
        <img className='w-[550px] h-[677px] bottom-[544px] overflow-visible relative' src={girlImg} alt="" />
        <div className='w-[148px] h-[60px] relative bottom-[740px] bg-[rgba(255,255,255,0.8)] rounded-lg flex flex-row'>
          <div className='w-10 h-10  relative top-3 left-2'>
            <img src={Profile} alt="" />
          </div>
          <div className='flex flex-col w-[78px] h-[37px] gap-2 font-normal relative top-[13px] left-4'>
            <h3 className='w-[78px] h-4 text-[19px] tracking-[0%] leading-[100%] items-center'>15K+</h3>
            <p className='w-[78px] h-2 text-[12px] tracking-[0%] leading-[100%] items-center'>Happy Client</p>
          </div>
        </div>
        <div className='w-[146px] h-[60px] relative bottom-[970px] left-[385px] bg-[rgba(255,255,255,0.8)] rounded-lg flex flex-row'>
          <div className='w-10 h-10  relative top-3 left-2'>
            <img src={star} alt="" />
          </div>
          <div className='flex flex-col w-[78px] h-[37px] gap-2 font-normal relative top-[13px] left-4'>
            <h3 className='w-[78px] h-4 text-[19px] tracking-[0%] leading-[100%] items-center'>4.5</h3>
            <p className='w-[78px] h-2 text-[12px] tracking-[0%] leading-[100%] items-center'>Proven Expert</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero