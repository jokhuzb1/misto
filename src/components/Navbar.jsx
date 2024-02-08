import React,{useState} from 'react'
import Cart from './Cart';
import { NavLink} from 'react-router-dom';
import NavItem from './helpers/NavItem';
import { createPortal } from 'react-dom';
import {CgProfile} from 'react-icons/cg'
import { FaFacebook,FaPinterest,FaInstagram, FaTwitter } from "react-icons/fa";
import {  CiPhone } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import GoToTop from './Layouts/GoToTop';

export default function Navbar() {
  const [toggleBurger, setToggleBurger] = useState(false)
  return (
    <div className='fixed top-0 left-0 right-0 z-20 max-w-screen'>
      <GoToTop/>
     <div className='bg-black text-white font-extralight  flex justify-between px-6 md:px-16 2xl:px-60 py-1'>
            <div className='flex flex-row text-sm tracking-widest'>
                <p><CiPhone className='inline-block mb-1'/> +123456789</p>
                <p className='hidden lg:inline-block'><IoLocationOutline className='inline-block mb-1' />Ukraine, Kyiv, Khreshchatyk 1</p>
                <p className=' hidden lg:inline-block'><IoMdTime className='inline-block mb-1'/>All week 24/7</p>
            </div>
            <div className='grid gap-2 grid-cols-4 items-center'>
            <FaInstagram/>
            <FaFacebook/>
            <FaTwitter/>
            <FaPinterest/>
            </div>
        </div>
    <nav className='grid grid-cols-3 sm:grid-cols-3  py-3 bg-white font-Leauge  text-md border-b-2 px-6 md:px-16 xl:px-60 '>
      <div  >
        <span className='col-1 flex justify-start text-4xl font-PlayfairDisplay font-black blur-[0.6px] '
        ><NavLink to='/'>MiSto</NavLink></span>
      </div>
        
      <ul className='list nav-items hidden md:flex justify-around items-center md:gap-2 xl:gap-5 col-2 text-lg font-light tracking-widest text-nowrap z-10'>
        <li ><NavItem to='about' name='About Us' /></li>
        <li ><NavItem to='women' name='Women' /></li>
        <li ><NavItem to='men' name='Men' /></li>
        <li ><NavItem to='electronic' name='Electronic' /></li>
        <li ><NavItem to='jewelery' name='Jewelery' /></li>
        <li ><NavItem to='contact' name='Contact' /></li>
      </ul>

      <ul className='flex col-1 justify-center md:justify-end place-items-center'>
        <li className='icon'><CiSearch/></li>
        <li className='icon'><CiHeart/></li>
        <li className='icon'><CgProfile/></li>
       <Cart/>
      </ul>

      <span onClick={()=>setToggleBurger(!toggleBurger)} className='relative md:hidden font-black text-3xl' >
      <span className='absolute right-0 top-2 cursor-pointer'>&#9776;</span>
      </span>
    </nav>

    {toggleBurger && createPortal(
        <ul className={` mobile md:hidden fixed top-10 left-0 right-0 bottom-0 z-20  bg-white flex flex-col text-center bg-opacity-90 text-3xl origin-top animate-slider-top `}>
        <li onClick={()=>setToggleBurger(!toggleBurger)} className='self-start  text-sale rounded-fullx cursor-pointer '>&times;</li>
        <li className='dark-bg' onClick={()=>setToggleBurger(!toggleBurger)} ><NavItem to='/' name='Home' /></li>
        <li className='dark-bg' onClick={()=>setToggleBurger(!toggleBurger)} ><NavItem to='about' name='About'  /></li>
        <li className='dark-bg' onClick={()=>setToggleBurger(!toggleBurger)} ><NavItem to='women' name='Women' /></li>
        <li className='dark-bg' onClick={()=>setToggleBurger(!toggleBurger)} ><NavItem to='men' name='Men' /></li>
        <li className='dark-bg' onClick={()=>setToggleBurger(!toggleBurger)} ><NavItem to='electronic' name='Electronic' /></li>
        <li className='dark-bg' onClick={()=>setToggleBurger(!toggleBurger)} ><NavItem to='jewelery' name='Jewelery' /></li>
        <li className='dark-bg' onClick={()=>setToggleBurger(!toggleBurger)} ><NavItem to='contact' name='Contact' /></li>
        <li className='dark-bg' onClick={()=>setToggleBurger(!toggleBurger)} ><NavItem to='cart' name='Cart' /></li>
      </ul>
     ,
        document.body
      )}
    </div>
  )
}
