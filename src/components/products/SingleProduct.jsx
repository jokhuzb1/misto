import React, { useEffect, useState } from 'react'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import Ratings from '../helpers/Ratings';
export default function SingleProduct({item}) {


  const {id, title, price, category, description, image,rating} = item;
  const editText = title?.slice(0, 20)
  return (
    <div className='mb-20 max-w-64 min-w-54 max-h-96 min-h-96 bg-cream shadow-md'>
    <Link to={`/singleProduct/${id}`}>
      <div className='relative'>
        <img src={image} alt="" className='object-fill  h-72 w-64 mix-blend-multiply mb-5 ' />
        <div className='p-2'>
        <h2 className='capitalize  text-gray-600 text-lg font-thin ' >{editText}</h2>
        <div className='flex justify-between'>
            <span className='font-bold'>$ {price}</span>
            <Ratings rating={rating}/>
      </div>
      {item?.onSale && <span className='absolute top-0 left-0 text-white bg-sale px-1'>-50%</span>}
        </div>
      </div>
    </Link>
    </div>

  )
}
