import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../features/api/productsSlice";
import Products from "../components/products/Products";
import JumbroHeadline from "../components/JumbroHeadline";
import { useLocation } from "react-router-dom";

export default function Women() {
	const location = useLocation();
	const products = useSelector(selectAllProducts);
	useEffect(() => {
		console.log(location);
		console.log(window.location.pathname);
	}, []);
	return (
		<div className=" px-6 md:px-16 xl:px-60">
			<JumbroHeadline name={"Women's clothing"} category="Women" />
			<Products
				category="women's clothing"
        detailedFilter={true}
				products={products.filter(
					(item) => item.category == "women's clothing"
				)}
			/>
		</div>
	);
}
