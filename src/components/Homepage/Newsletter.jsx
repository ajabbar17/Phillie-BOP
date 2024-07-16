import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full p-10 bg-[#1E1E1E]'>
        <div className='p-12 border-2 border-[#CE8D0F] w-full'>
            <h1 className='uppercase text-2xl font-medium mb-6 text-white text-center md:text-start '>newsletter</h1>
            <div className='flex md:flex-row flex-col text-center justify-between w-full' >


            <h1 className='uppercase text-3xl md:text-5xl font-bold pb '>Be the first to know.</h1>
            <h1 className='uppercase text-xl font-bold pb self-end '>Latest news about Phillie-BOP</h1>
            </div>

            <div className='text-white gap-5 mt-4 w-full flex flex-col  md:flex-row md:justify-between items-center md:items-end'>
                <div className='w-full'>

                <p className='text-white pt-5 text-xl text-center md:text-2xl'>Email Address Here..</p>
                <input type="text" className='w-full  border-b text-white outline-none bg-transparent  p-2 ps-0 border-[#c8ce0f]' />
                </div>
                
                <button className='bg-[#c8ce0f] w-32 md:w-40'>
                    <img src="https://www.philliebopmusic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbutton.df098d8c.png&w=256&q=75" alt="" />
                </button>
                
            </div>
        </div>
    </div>
  )
}

export default Newsletter