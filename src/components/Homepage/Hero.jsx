import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='relative h-max md:h-full py-16  md:py-0'>
       <img src="https://www.philliebopmusic.com/imgs/home/new-one-image.png" className='w-full scale-100' alt="" />
       <div className='flex flex-col hero absolute gap-10 w-full text-center px-4 md:mt-0 mt-16 ' >
        <p className='text-white text-4xl text-center  md:text-7xl font-bold  pb'>
        Phillie-BOP Productions
        </p>
        <p className='text-xl text-center  md:text-2xl text-[#D3D3D3]  font-normal'>

          THE FUTURE HOME OF CLASSIC MUSIC

        </p>

          <button className='bg-white p-5 md:px-10 cursor-pointer rounded-[35px] uppercase font-semibold self-center  '>Explore Music</button>


       </div >
          <img src="https://www.philliebopmusic.com/_next/image?url=%2Fimgs%2Fhome%2Fsahi-waves.png&w=1920&q=75" className='w-full img absolute ' alt="" />
    </div>
  )
}

export default Hero