import React, { useState } from "react";
import bag from "../assets/img/bag.jpg";
import men from "../assets/img/men.jpg";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img1 from '../assets/img/men/6.jpg';
import img2 from '../assets/img/women/7.jpg'
export default function Carousel({ main }) {

	let [current, setCurrent] = useState(0);
	const slides = [main,img1, img2];

	let previousSlide = () => {
		if (current === 0) setCurrent(slides.length - 1);
		else setCurrent(current - 1);
	};

	let nextSlide = () => {
		if (current === slides.length - 1) setCurrent(0);
		else setCurrent(current + 1);
	};

	return (
		<div className="flex justify-center items-center">
			<div className="overflow-hidden h-96 w-80 relative ">
				<div
					className={`flex transition ease-out duration-40 `}
					style={{
						transform: `translateX(-${current * 100}%)`,
					}}
				>
					{slides.map((s,index) => {
						return <img key={index} src={s} className="min-w-full object-contain mix-blend-multiply" />;
					})}
				</div>
      <div className="absolute top-0 h-full w-full justify-between items-center flex z-10 px-2">
				<button
					onClick={previousSlide}
					className="  text-black-500 px-3 py-1 font-thin rounded-full bg-white "
				>
					<FontAwesomeIcon icon={faAngleLeft}/>
				</button>
				<span
					onClick={nextSlide}
					className="text-black-500 px-3 py-1 font-thin rounded-full bg-white"
				>
					<FontAwesomeIcon className=""  icon={faAngleRight}/>
				</span>
      </div>
			</div>
		</div>
	);
}
{
	/* <div className='flex py-5 px-5 relative '>
{/* <div className='hidden md:block md:w-1/4  md:h-1/4 overflow-y-scroll max-h-full' >
<img className='carousel-img' onClick={()=>setMain('main')} src={main} alt="" />
<img className='carousel-img' onClick={()=>setMain('bag')} src={bag} alt="" />
<img className='carousel-img' onClick={()=>setMain('men')} src={men} alt="" />
</div> */
}
{
	/* <div className='w-full h-full md:w-3/4 md:min-h-96 md:max-h-96 relative'>
  <div className="overflow-hidden relative">
<div
className={`flex transition ease-out duration-40 `}
style={{
  transform: `translateX(-${current * 100}%)`,
}}
>
{slides.map((s) => {
  return <img src={s} className='w-full' />;
})}
</div>
  </div>
{/* <img src={images[big]} className='object-contain w-full h-full' alt="" /> */
}
{
	/* <div className='flex justify-between items-center'>
  <button onClick={previousSlide} className='absolute top-40 text-red-500 text-2xl'>-</button>
  <button onClick={nextSlide} className='absolute top-40 right-0 text-red-500 text-2xl'>+</button>
  </div>
</div> */
}

// </div>   */} */}
