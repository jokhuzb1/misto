import React, { useState } from "react";
import bag from "../../assets/img/1.jpeg";
import men from "../../assets/img/2.jpg";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Example({ main, title, category }) {
	let [current, setCurrent] = useState(0);
	const slides = [main, bag, men];

	let previousSlide = () => {
		if (current === 0) setCurrent(slides.length - 1);
		else setCurrent(current - 1);
	};

	let nextSlide = () => {
		if (current === slides.length - 1) setCurrent(0);
		else setCurrent(current + 1);
	};
      return (
        <div className='relative tracking-widest text-nowrap shadow-lg '>
            <div className="overflow-hidden relative tracking-widest text-nowrap shadow-lg ">
			<div
				className={`flex transition ease-out duration-40 max-h-[500px] w-full`}
				style={{
					transform: `translateX(-${current * 100}%)`,
				}}
			>
				{slides.map((s, index) => {
					return (
						<img
							key={index}
							src={s}
							className="object-fill mix-blend-multiply w-full h-full "
						/>
					);
				})}
			</div>
			<div className="absolute top-0 h-full w-full justify-between items-center flex  px-2">
				<button
					onClick={previousSlide}
					className="  text-black-500 px-3 py-1 font-thin rounded-full bg-white "
				>
					<FontAwesomeIcon icon={faAngleLeft} />
				</button>
				<span
					onClick={nextSlide}
					className="text-black-500 px-3 py-1 font-thin rounded-full bg-white"
				>
					<FontAwesomeIcon className="" icon={faAngleRight} />
				</span>
			</div>
		</div>
            <div className='card-title cursor-pointer '>
            {title? <span className='block font-thin text-md '>{title}</span>:''}
           <a to={category? category:'#' }> <p className={`${title ? "font-bold text-2xl px-2 sm:text-3xl":"text-lg"} tracking-widest`}>{category ? category :"Misto brand"}</p></a>
            </div>
            
        </div>
      )
    }
    
	

//  h-96 w-80
