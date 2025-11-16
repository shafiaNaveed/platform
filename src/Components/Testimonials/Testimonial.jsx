import React from 'react'
import img from '/src/assets/imgs/img.avif'
import stars from '/src/assets/imgs/stargroup.png'
import star from '/src/assets/imgs/start1.png'
import img1 from '/src/assets/imgs/img.png'
import img2 from '/src/assets/imgs/Brandon.png'
import img3 from '/src/assets/imgs/Chris.png'

function Testimonial() {
  return (
    <div className='w-[1440px] flex flex-col h-[472px] relative top-[400px]'>
        <div className='w-[542px] h-[59px] relative left-[468px] '>
           <h1 className='text-[60px] font-[400] leading-[77px] tracking-[0%] uppercase items-center justify-center'>Our Testimonials</h1>
        </div>
            <div className='flex flex-row'>
            <div className='w-[324px] flex flex-col h-[310px] border-[1px] border-gray-300 bg-[rgba(226,226,226,0.3)] rounded-[22px] relative top-[80px] left-32'>
                <div className='flex flex-row'>
                    <div className='bg-red-200 rounded-full h-[70px] relative top-2 w-[70px]'>
                        <img className='relative h-[60px] w-[60px] left-2 top-1' src={img} alt="" />
                    </div>
                    <div className='flex flex-col w-[105px] h-[79px]'>
                        <h1 className='w-[79px] h-[28px] relative top-2 left-2 font-[600] text-[20px] leading-[28px] tracking-[0%]'>Emily R.</h1>
                        <h1 className='w-[68px] h-[28px] relative top-2 left-2 font-[400] text-[16px] leading-[28px] tracking-[0%]'>4.5 rating</h1>
                        <div className='flex flow-row'>
                            <img className='h-4 w-4 relative top-2' src={star} alt="" />
                            <img className='h-4 w-4 relative top-2' src={star} alt="" />
                            <img className='h-4 w-4 relative top-2' src={star} alt="" />
                            <img className='h-4 w-4 relative top-2' src={star} alt="" />
                            <img className='h-4 w-4 relative top-2' src={star} alt="" />
                        </div>
                    </div>
                    <img className='w-[59px] h-[45px] relative left-12 top-4' src={img1} alt="" />
                </div>
                <div className='w-[310px] h-[190px] relative left-1 top-5'>
                    <h1 className='font-[400] text-[17px] leading-[28px] tracking-[0%]'>The platform is a game-changer for fans like me. I’ve always wanted to connect with the models I follow, and [Platform Name] made it happen. The chat feature is fantastic—it allowed us to finalize all the details, and everything w...Read More</h1>

        </div>
            </div>
            <div className='w-[425px] flex flex-col h-[360px] border-[1px] border-gray-300 text-white bg-gradient-to-b via-[rgba(150,77,214,1)] from-[rgba(163,83,214,1)] to-[rgba(86,36,195,1)] rounded-[22px] relative top-[50px] left-44'>
                <div className='flex flex-row'>
                        <img className='relative h-[60px] w-[60px] left-2 top-1' src={img2} alt="" />
                    <div className='flex flex-col w-[105px] h-[79px]'>
                        <h1 className='w-[79px] h-[28px] relative top-2 left-4 font-[600] text-[20px] leading-[28px] tracking-[0%]'>Emily R.</h1>
                        <h1 className='w-[68px] h-[28px] relative top-2 left-4 font-[400] text-[16px] leading-[28px] tracking-[0%]'>4.5 rating</h1>
                        <img className='relative top-3 left-4' src={stars} alt="" />
                    </div>
                    <img className='w-[60px] h-[50px] relative left-36 top-5' src={img1} alt="" />
                </div>
                <div className='w-[412px] h-[204px] relative left-1 top-8'>
                    <h1 className='font-[400] text-[17px] leading-[28px] tracking-[0%]'>I never thought I’d actually get the chance to meet my favorite model in real life. When I saw the hangout opportunity for coffee, I immediately requested it. The process was easy, and when my request was accepted, I was beyond thrilled! Sitting down face-to-face and having a genuine conversation was surreal. It’s a....Read More</h1>

        </div>
            </div>
             <div className='w-[324px] flex flex-col h-[310px] border-[1px] border-gray-300 bg-[rgba(226,226,226,0.3)] rounded-[22px] relative top-[80px] left-52'>
                <div className='flex flex-row'>
                    <div className='bg-white rounded-full relative top-1 left-1 h-[70px] w-[70px]'>
                        <img className='' src={img3} alt="" />
                    </div>
                    <div className='flex flex-col w-[105px] h-[79px]'>
                        <h1 className='w-[79px] h-[28px] relative top-2 left-2 font-[600] text-[20px] leading-[28px] tracking-[0%]'>Emily R.</h1>
                        <h1 className='w-[68px] h-[28px] relative top-2 left-2 font-[400] text-[16px] leading-[28px] tracking-[0%]'>4.5 rating</h1>
                        <div className='flex flow-row'>
                            <img className='h-4 w-4 relative top-2' src={star} alt="" />
                            <img className='h-4 w-4 relative top-2' src={star} alt="" />
                            <img className='h-4 w-4 relative top-2' src={star} alt="" />
                            <img className='h-4 w-4 relative top-2' src={star} alt="" />
                            <img className='h-4 w-4 relative top-2' src={star} alt="" />
                        </div>
                    </div>
                    <img className='w-[59px] h-[45px] relative left-12 top-4' src={img1} alt="" />
                </div>
                <div className='w-[310px] h-[190px] relative left-1 top-5'>
                    <h1 className='font-[400] text-[17px] leading-[28px] tracking-[0%]'>I' was a bit hesitant at first, but once I tried [Platform Name], I was hooked. It’s so user-friendly, and the opportunities are truly unique. I’ve had two amazing experiences so far—a lunch date and a walk in the park—and both were unf...Read More</h1>

        </div>
            </div>
        </div>
        </div>
  )
}

export default Testimonial