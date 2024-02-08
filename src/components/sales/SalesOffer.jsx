import React from "react";
import sl from "../../assets/salesImg/1.jpg";
import sl2 from "../../assets/salesImg/2.jpg";
export default function SalesOffer() {
	return (
		<div className="w-full h-full grid md:grid-cols-2 gap-5 md:place-content-center my-10 lg:my-20 ">
			<div className="relative shadow-lg">
				<img src={sl} alt="" className="w-full object-fill" />
				<div className="absolute items-center text-center  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white py-5 px-10">
					<p className="uppercase text:lg lg:text-xl font-light">New Season</p>
					<h1 className="text-2xl lg:text-3xl text-nowrap">LOOK BOOK COLLECTION</h1>
				</div>
			</div>
			<div className="relative shadow-lg ">
				<img src={sl2} alt="" className="min-w-full object-fill " />
				<div className="absolute items-center text-center  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white py-5 px-10 ">
					<p className="uppercase text:lg md:text-base lg:text-xl font-light">Sale</p>
					<h1 className="text-2xl md:text-base lg:text-3xl text-nowrap">GET UP TO <span className="text-sale"> 50% OFF</span></h1>
				</div>
			</div>
		</div>
	);
}
