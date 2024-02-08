// import React, { useEffect, useState } from "react";
// import SingleProduct from "./SingleProduct";
// import { useDispatch } from "react-redux";
// import { addItem } from "../../features/cart/cartSlice";
// import {data} from '../../../data';

// export default function ProductsList({ products, category, listView }) {
// 	const [showAll, setShowAll] = useState(false)
//  	const dispatch = useDispatch();
// 	const localProducts = data.filter(item=> item.category === category);
// 	const [filteredProducts, setFilteredProducts] = useState([]);
// 	const allProducts = [...products, ...data.filter(item=>item.category === category)];
// 	const onSale = allProducts.filter(item=> item.onSale);
// 	const newStock = allProducts.filter(item=> item.newStock === true);
// 	const mostViewed = allProducts.filter(item=> item.views > 100);

// 	useEffect(()=>{
// 		setFilteredProducts(products)
// 	},[])
// 	const filterProducts = ()=>{
// 		if(!showAll) {
// 			setFilteredProducts(allProducts )
// 			setShowAll(!showAll)
// 		}
// 		if(showAll){
// 			setFilteredProducts(products)
// 			setShowAll(!showAll)
// 		}
// 	};
	

// 	return (
// 		<div className="">
// 			<div className="flex justify-between text-center flex-col md:flex-row uppercase  tracking-widest">
// 				<h2 className="text-2xl my-5 mx-10 text-nowrap ">{category}</h2>
// 					<ul className=" text-xs md:text-base flex justify-around items-center font-thin list">
// 						<li  onClick={()=>filterProducts()}className="mr-2 md:mr-5 cursor-pointer">All</li>
// 						<li onClick={()=>setFilteredProducts(newStock)} className="mr-2 md:mr-5 cursor-pointer">new arrivals</li>
// 						<li onClick={()=>setFilteredProducts(onSale)} className="mr-2 md:mr-5 cursor-pointer">Specials</li>
// 						<li onClick={()=>setFilteredProducts(mostViewed)}className="mr-2 md:mr-5 cursor-pointer">most viewed</li>
// 					</ul>
// 			</div>
// 			<div className={listView ? "listView " : "cardStyle"}>
// 				{filteredProducts.map((item, index) => (
// 					<div key={index} className="list">
// 						<SingleProduct item={item} />
// 						<div className={listView ? "" : "hidden"}>
// 							<button
// 								onClick={() => dispatch(addItem(item))}
// 								className="card-btn"
// 							>
// 								ADD TO CART
// 							</button>
// 							<button className="card-btn">View</button>
// 						</div>
// 					</div>
// 				))}
// 			</div>
// 			<button onClick={()=>filterProducts()} className="w-full bg-gray-100 py-3 tracking-widest uppercase text-lightblack hover:bg-[#4b4b4b] transition-all ease-in delay-50 hover:text-white">{showAll? "Show Less":"Show more"}</button>
// 		</div>
// 	);
// }
