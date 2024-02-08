import React from 'react'
import img from '../assets/img/img.png'
import img1 from '../assets/img/img_1.png'
import img2 from '../assets/img/img_2.png'
import CardText from '../components/CardText'
import JumbroHeadline from '../components/JumbroHeadline'
export default function About() {
  return (
    <div className=' px-6 md:px-16 xl:px-60'>
      <JumbroHeadline name='about' category={"About"}/>
      <h1 className=' uppercase text-lg mb-5 font-bold'>Latest form  about</h1>
      <div className='grid md:grid-cols-3 gap-10 mb-20'>
       <CardText img={img} />
       <CardText img={img1} />
       <CardText img={img2} />
      </div>
      <h1 className=' uppercase text-lg font-bold mb-5'>About us</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero placeat adipisci ratione unde culpa at alias autem repellat doloribus, et ducimus sequi, quasi quibusdam dolore deserunt assumenda! Iste, mollitia voluptate. Consequuntur perferendis saepe tenetur molestias? Quam eveniet maiores nemo, odit facilis sequi accusamus incidunt rem sunt eligendi modi laboriosam facere possimus quis adipisci reiciendis ipsum optio minus neque soluta nulla expedita nisi? Sed, consequuntur dolore itaque perspiciatis cumque ex, deserunt illo ducimus sequi voluptate molestiae? Reprehenderit animi numquam et doloremque sed repellat id libero dignissimos ducimus. Sed reiciendis molestiae eligendi eaque. Facere velit corporis sequi quae incidunt autem nemo voluptates!</p>
    </div>
  )
}
