import React from 'react'
import { Link } from 'react-router-dom'
export default function HeadImgCard({img, title, category}) {
  return (
    <div className='relative min-w-full tracking-widest text-nowrap '>
        <img className='object-fill w-full h-full ' src={img} alt="image title" />
        <div className='card-title cursor-pointer '>
        {title? <span className='block font-thin text-md '>{title}</span>:''}
       <Link to={category? category:'#' }> <p className={`${title ? "font-bold text-2xl px-2 sm:text-3xl":"text-lg"} tracking-widest`}>{category ? category :"Misto brand"}</p></Link>
        </div>
        
    </div>
  )
}
