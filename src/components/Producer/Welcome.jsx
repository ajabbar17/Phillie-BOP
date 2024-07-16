import React from 'react'

const Welcome = () => {
  return (
    <div className='flex justify-center items-center min-w-full h-screen bg-[#1E1E1E]'>
    <div className='flex flex-col  gap-10 w-full text-center px-4 md:mt-0 mt-10 ' >
    <p className='text-2xl text-[#D3D3D3]  font-normal'>
        WELCOME TO
</p>
     <p className='text-white text-3xl  md:text-7xl font-semibold pb'>
     Phillie-BOP Productions <br />
     Label Vision
     </p>
     <p className='text-2xl text-[#D3D3D3]  font-normal'>

       THE FUTURE HOME OF CLASSIC MUSIC

     </p>

       <button className='bg-white p-5 px-10 cursor-pointer rounded-[35px] uppercase font-semibold self-center  '>Explore Music</button>


    </div >
 </div>
  )
}

export default Welcome