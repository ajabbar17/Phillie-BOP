"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

const Pb = () => {
    const router = useRouter();

  return (
<div className='flex flex-col md:flex-row md:justify-between md:mt-0 mt-28 px-8 md:px-36 w-full h-full '>
        <div className=' flex flex-col items-center md:items-start gap-5 md:px-10 py-10 text-white rounded-xl font-semibold text-lg  text-center'>
           
            <h1 className='pb text-3xl md:text-6xl font-semibold'>
                Welcome to <br className='visible' /> 
                Phillie-BOP <br className='visible' />
            Productions 
                </h1>
               
            <button className='bg-white px-7 py-3 md:px-10  cursor-pointer rounded-[35px] uppercase font-semibold  text-black  ' onClick={()=> router.push("/shop")}  >Shop Our Music</button>

     

        </div>
        <div className='w-full md:w-1/2 flex-col text-center  justify-center leading-loose px-7 font-normal py-10 text-white text-base'>
        <p className='mb-4'>
        We are committed to providing a creative home for indie artists, focusing on songwriting, recording, producing, and distributing quality
         music. Phillie-BOP Productions, LLC was founded in 2010, the original idea of the label was to build a new sleek and sophisticated type 
         of music, providing that urban adult contemporary,
         smooth R&B/Soul vibe based on elements of classic music of the past, able to fit the elegant adult socials and quiet evenings to unwind.
        </p>
        <p className='mb-4 visible'>
        We firmly believe that tracks released on the Phillie-BOP Productions label will be greatly appreciated by lovers of classic music,
         providing lush melodies, elegant lyrics, and velvet vocals. Listeners will be treated to top-notch quality tracks that could be playable
          in multiple genres. So, they will always be ready to drop in almost any kind of set.
         Phillie-BOP Productions is committed to developing new music and artists with a reputation for consistent excellence.
        </p>
        <p className='visible'>
        Phillie-BOP Productions operates from Annandale, Virginia, located in the Washington, D.C. area
        </p>
        </div>
    </div>  )
}

export default Pb