import React from 'react'
import men from '../../assets/salesImg/men.png'
import women from '../../assets/salesImg/women.png'
export default function SpecialOffer() {
  return (
    <div className='tracking-widest min-w-full md:min-h-[600px]  bg-gradient-to-r from-linearf to-linearf flex flex-col overflow-hidden py-20 mb-10 justify-center items-center relative ' >
            <div className='flex justify-center items-center flex-col rounded-sm bg-white min-h-[500px]  w-9/12 lg:w-1/2 '>
               <div className='text-center'>
               <p className='uppercase text:lg md:text-base lg:text-xl font-normal mb-3'>special offer</p>
                <h2 className='text-2xl md:text-base lg:text-3xl text-wrap mb-5'><span className='block'> SUBSCRIBE </span>AND  <span className='text-sale'>GET 10% OFF</span></h2>
               </div>
                <input placeholder='Enter your email' className='block  w-3/5 outline-none text-center mb-5 py-5 bg-cream  z-10' type="text" />
                <button className='w-3/5  bg-black text-white leading-6 x py-5 text-xl tracking-widest mb-5 '>SUBSCRIBE</button>
            </div>
            <div className='hidden  bottom-0 lg:flex absolute justify-around w-screen'>
              <img src={women} alt="" className='object-contain   -translate-x-10 lg:translate-y-10 ' />
              <img src={men} alt="" className='object-contain -translate-x-30' />
            </div>

    </div>
  )
}
