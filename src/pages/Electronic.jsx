import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../features/api/productsSlice";
import Products from "../components/products/Products";
import JumbroHeadline from "../components/JumbroHeadline";

export default function Electronic() {
	const products = useSelector(selectAllProducts);
	return (
		<div className="px-5px-6 md:px-16 xl:px-60">
			<JumbroHeadline name={"electronics"} category={"Electronic"} />
			<Products
      detailedFilter={true}
				products={products.filter((item) => item.category == "electronics")}
				category={"electronics"}
			/>
		</div>
	);
}
