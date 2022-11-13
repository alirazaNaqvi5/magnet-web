import React from 'react'
import Carosel from './Carosul'
import Carosel2 from './Carosul2'

const Testimonials = () => {
  return (
    <div className='w-full'>
        <div className='w-full  bg-[#E5E5E5]'>
            <img src="image/upwave.svg" alt="" />
        </div>
        <div className='justify-center bg-[#14213d]'>
            <h1 className='text-5xl text-center font-bold text-white'>Testimonials</h1>
        </div>
        <div className='md:w-full m-auto bg-[#14213d]'>
            <Carosel/>
        </div>
        <div className='md:w-full'>
            <Carosel2/>
        </div>
    </div>
  )
}

export default Testimonials
