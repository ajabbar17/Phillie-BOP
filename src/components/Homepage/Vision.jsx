import React from 'react'

const Vision = () => {
  return (
    <div className='flex p-5 md:flex-row flex-col-reverse '>
        <div className='w-full md:w-1/2 flex flex-col gap-4 md:gap-7 px-12 md:px-24 py-10 text-white rounded-xl font-normal md:font-semibold text-base text-center md:text-lg '>
            <h1 className='pb text-2xl text-center md:text-5xl font-bold'>Phillie-BOP <br />
            Productions Vision</h1>

            <p>Welcome to Phillie-BOP Productions! We are committed to providing a creative home for indie artists, 
                focusing on songwriting, recording, producing, and distributing quality music. Phillie-BOP Productions was founded in 2010,
                 the original idea of the label was to build a new sleek, and sophisticated type of music, providing that urban adult contemporary,
                  smooth R& B/Soul vibe based on elements of classic music of the past, 
                able to fit the elegant adult socials and quiet evenings to unwind.</p>


                <p className='visible'>We firmly believe that tracks released on the Phillie-BOP Productions label will be greatly appreciated by lovers of classic music,
                     providing lush melodies, elegant lyrics, and velvet vocals. Listeners will be treated to top-notch quality tracks, that could be playable 
                     in multiple genres. So, they will always be ready to drop in almost any kind of set. 
                    Phillie-BOP Productions is committed to developing new music and artists with a reputation for consistent excellence.</p>

                    <p className='visible'>
                    Phillie-BOP Productions operates from Annandale, Virginia, located in the Washington, D.C. area.
                    </p>

        </div>
        <div className='w-full md:w-1/2 flex justify-center items-center px-7 md:py-10'>
            <img src="https://www.philliebopmusic.com/_next/image?url=%2Fimgs%2Fhome%2Flogoimg.png&w=640&q=75" className='w-1/2' alt="" />
        </div>
    </div>
  )
}

export default Vision