import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../features/api/productsSlice";
import Products from "../components/products/Products";
import JumbroHeadline from "../components/JumbroHeadline";

export default function Men() {
	const [listView, setListView] = useState(false);
	const products = useSelector(selectAllProducts);
	return (
		<div className="px-6 md:px-16 xl:px-60">
			<JumbroHeadline name={"men's clothing"} category="Men" />
			<Products
      detailedFilter={true}
				category="men's clothing"
				products={products.filter((item) => item.category == "men's clothing")}
			/>
		</div>
	);
}
