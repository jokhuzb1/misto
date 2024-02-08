import { Typography } from '@material-tailwind/react'
import React from 'react'
import { IoShareSocialOutline } from "react-icons/io5";

export default function JumbroHeadline({name, category, title}) {
  return (
    <div className='text-center bg-gradient-to-r from-white via-gray-200 to-white p-3 mb-5'>
        <div className='flex justify-between font-thin'><p> Home &gt; {category} {title ? <span className='font-bold'>{title}</span>:''} </p>
        <IoShareSocialOutline/>
        </div>
        <Typography variant='h3' className='m-auto uppercase font-normal py-2'>{name}</Typography>
    </div>
  )
}
