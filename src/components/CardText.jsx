import React from 'react'

export default function CardText({img}) {
  return (
        <div className='flex flex-col justify-center items-center max-w-72'>
          <img src={img} alt="" />
          <div className='w-8/12 sm:w-10/12 flex flex-col items-center -m-10 bg-white max-h-28 overflow-clip py-3 px-4'>
            <h2>THE EASIEST WAY TO BREAK</h2>
            <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur illum quidem labore in officia, neque et commodi ratione delectus temporibus!</p>
          </div>
        </div>
  )
}
