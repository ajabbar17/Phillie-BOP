import About from '@/components/Producer/About'
import Pb from '@/components/Producer/Pb'
import Welcome from '@/components/Producer/Welcome'
import React from 'react'

const page = () => {
  return (
    <div className='bg-[#1E1E1E]'>
        <Welcome/>
        <Pb/>
        <About/>
    </div>
  )
}

export default page