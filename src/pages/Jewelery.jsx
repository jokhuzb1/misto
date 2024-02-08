import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../features/api/productsSlice";
import Products from "../components/products/Products";
import JumbroHeadline from "../components/JumbroHeadline";

export default function Jewelery() {
	const products = useSelector(selectAllProducts);
	return (
		<div className="px-6 md:px-16 xl:px-60">
			<JumbroHeadline name={"jewelery"} category={"Jewelery"} />
			<Products
      detailedFilter={true}
				category="jewelery"
				products={products.filter((item) => item.category == "jewelery")}
			/>
		</div>
	);
}
