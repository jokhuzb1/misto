import React from 'react'
import { FaFacebook,FaPinterest,FaInstagram,FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
   <div className='my-10'>
     <div className='sm:flex bg-black text-white justify-between flex-row flex-nowrap items-center py-4 px-8 md:px-16 xl:px-60'>
      <h1 className='text-s hidden sm:inline-block text-nowrap'>BE IN TOUCH WITH US:</h1>
      <div className='flex justify-center w-full md:w-2/3 flex-6'>
        <input type="text" placeholder='Enter your email' className='bg-lightblack w-2/3 px-5 outline-none' />
        <button className=' border-2 px-3 mx-2 text-nowrap'>JOIN US</button>
        </div>
      <div className='icons hidden  sm:flex flex-row flex-nowrap flex-1  justify-around'>
        <FaFacebook/>
        <FaTwitter/>
        <FaInstagram/>
        <FaPinterest/>
      </div>
    </div>
    <div className=' grid grid-cols-2 sm:flex sm:flex-row justify-around footer'>
      <ul>
      <h1>Category</h1>
        <li>Men</li>
        <li>Women</li>
        <li>Accessories</li>
        <li>Beauty</li>
      </ul>
      <ul>
        <h1>information</h1>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Blog</li>
        <li>FAQs</li>
      </ul>
      <ul>
        <h1>useful links</h1>
        <li>Term & Condition</li>
        <li>Return & Exchanges</li>
        <li>Shipping & Deliveries</li>
        <li>Privacy Policy</li>
      </ul>
      <ul>
        <h1>contact us</h1>
        <li>Ukraine, Kyiv Khershchatyk 1</li>
        <li>+123456789</li>
        <li>All week 24/7</li>
        <li>example@mail.com</li>
      </ul>
    </div>
   </div>
  )
}
