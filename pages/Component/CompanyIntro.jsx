import Image from 'next/image'
import React from 'react'
import Slide from 'react-reveal/Slide';
const CompanyIntro = () => {
  return (
    <div className='w-full  '>
        <div >
        <div className='w-full pt-10 bg-[#14213d]'>
            <div className='w-full items-center text-center pt-10'>
                <Slide left>
                    <h1 className='text-4xl font-bold text-white'>We Specialise in Everything We Do</h1>
                </Slide>
            </div>
        </div>
        <div className= 'w-full bg-[#14213d]' >
            <div className='md:grid md:grid-cols-2 md:w-[1240px] mx-auto'>
                <div className='md:mt-10 sm:p-10'>
                    <p className='text-white text-justify tracking-widest py-5 '>
                        Based in Manchester, we recruit entry, middle and senior level
                        professionals into Food and FMCG businesses nationwide. Also,
                        we’re really good at it!
                    </p>
                    <p className='text-white text-justify tracking-widest py-5'>
                        From Operations to Supply Chain, from Technical to NPD, from
                        Engineering to Health and Safety, we understand the recruitment
                        challenges you face, and we’ve got your business covered.
                    </p>
                    <p className='text-white text-justify tracking-widest py-5'>
                        We also believe in being different; We’re professional, honest and 
                        fun! We are people, recruiting people, for people.
                    </p>
                </div>
                <div className='w-full    justify-center  items-center md:mx-auto '>
                    <img   src='image/location.png' className='m-auto' />
                    <div className='md:p-2 sm:p-10'>
                        <p className='text-white text-justify tracking-widest '>
                            At Magnet Recruit, we do not pretend to specialise in everything,
                            everywhere. Instead, we do claim to know the food industry and we
                            have worked with hundreds of people, who will tell you the same.
                        </p>
                        <p className='text-white text-justify tracking-widest py-5'>
                            We believe that your business is only as strong as its people and we
                            are committed to help you build a high calibre team with the best
                            Candidates, who will not only fit your job specifications, but also fit
                            your Culture and embody your core values.
                        </p>
                    </div>
                </div>
            </div>
            </div>
            <img className='absolute top-100' src="/image/bottomwave.svg" alt="" />
            <div className='h-72 bg-[#E5E5E5]'/>
        </div>
        <div className='w-full bg-[#E5E5E5]'>
            <div className='md:w-[1240px] md:grid md:grid-cols-2 mx-auto' >
                <div className='md:grid md:grid-cols-2'>
                    <div>
                        <div className='items-center py-10 mx-auto'>
                            <img src="/image/bag.png" alt="/" className='w-[100px] h-[100px] m-auto' />
                            <h1 className='text-4xl text-center text-[#fca311] font-bold pt-5'>7days</h1>
                            <p className='text-center'>Average time for a job offer</p>
                        </div>
                        <div className='items-center '>
                            <img src="/image/search.png" alt="/" className='w-[100px] h-[100px] m-auto' />
                            <h1 className='text-4xl text-center text-[#fca311] font-bold pt-5'>38</h1>
                            <p className='text-center'>Average permanent offers</p>
                        </div>
                    </div>
                    <div>
                        <div className='items-center py-10 mx-auto'>
                            <img src="/image/arrow.png" alt="/" className='w-[100px] h-[100px] m-auto' />
                            <h1 className='text-4xl text-center text-[#fca311] font-bold pt-5'>7days</h1>
                            <p className='text-center'>Payments Processing time</p>
                        </div>
                        <div className='items-center '>
                            <img src="/image/nots.png" alt="/" className='w-[100px] h-[100px] m-auto' />
                            <h1 className='text-4xl text-center text-[#fca311] font-bold pt-5'>98%</h1>
                            <p className='text-center'>Success rate</p>
                        </div>
                    </div>
                </div>
                <div className='md:mt-44 '>
                    <h1 className='text-4xl p-6 text-[#fca311] font-bold '>
                        We work to help you burst at the
                        seams, to unleash the potential of
                        your work force
                    </h1>
                    <p className='text-justify p-6'>
                        Our key objective is to build long-term, trusting and genuine
                        relationships with our Clients and Candidates and understand their
                        goals, values, objectives and aims. It’s only once we get to know your
                        specific requirements that we can add value to your business via our
                        team of expert Consultants, who are committed to deliver the best service.
                    </p>
                </div> 
            </div>
        </div>

    </div>
  )
} 

export default CompanyIntro