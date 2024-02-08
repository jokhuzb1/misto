import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Servicer({icon, title, description}) {
  return (
    <div className='flex flex-col justify-center content-center md:justify-start  md:flex-row font-thin items-center '>
        <span className='text-4xl font-extralight md:mx-5 my-2 md:my-10 '>{icon}</span>
        <span className='flex flex-col items-center md:items-start'>
            <h4 className='uppercase font-normal'>{title}</h4>
            <p className='text-xs leading-6  font-Leauge font-normal'>{description}</p>
        </span>
    </div>
  )
}
