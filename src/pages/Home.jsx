import React, { useEffect, useState } from "react";
import HeadImgCard from "../components/HeadImgCard";
import bag from "../assets/img/bag.jpg";
import men from "../assets/img/men.jpg";
import women from "../assets/img/women.jpg";
import Servicer from "../components/Servicer";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/helpers/Loading";
import img from "../assets/img/img.png";
import img1 from "../assets/img/img_1.png";
import img2 from "../assets/img/img_2.png";
import CardText from "../components/CardText";
import SalesOffer from "../components/sales/SalesOffer";
import SpecialOffer from "../components/sales/SpecialOffer";
import { PiTruckThin, PiRecycleThin } from "react-icons/pi";
import { CiCircleInfo } from "react-icons/ci";
import Products from "../components/products/Products";

import {
	selectAllProducts,
	getProductsStatus,
	fetchProducts,
} from "../features/api/productsSlice";
import ExampleTwo from "../components/helpers/ExampleTwo";

export default function Home() {
	const products = useSelector(selectAllProducts);
	const productStatus = useSelector(getProductsStatus);
	const dispatch = useDispatch();
	const [listView, setListView] = useState(false);

	useEffect(() => {
		if (productStatus === "idle") {
			dispatch(fetchProducts());
		}
	}, [dispatch, productStatus]);
	return (
		<div className="">
			<section className="w-auto">
				<div className="relative grid sm:gril-cols-1 md:grid-cols-2 gap-5 px-8 md:px-20 lg:px-20 xl:px-20 2xl:px-60 ">
					<ExampleTwo title="banner" />
					<div className="grid grid-cols-1 gap-5 auto-fit">
						<div className="grid grid-cols-2 gap-5">
							<HeadImgCard img={men} category="men" />
							<HeadImgCard img={women} category="women" />
						</div>
						<HeadImgCard className="w-full" img={bag} category="jewelery" />
					</div>
				</div>
				<div className="grid md:grid-cols-3 sm:grid-cols-1 place-content-center px-6 md:px-16 xl:px-60 my-5">
					<Servicer
						icon={<PiTruckThin />}
						title="free shipping"
						description="On all UA order or order above $100"
					/>
					<Servicer
						icon={<PiRecycleThin />}
						title="30 DAYS RETURN"
						description="Simply return it within 30 days for an exchange"
					/>
					<Servicer
						icon={<CiCircleInfo />}
						title="SUPPORT 24/7"
						description="Contact us 24 hours a day, 7 days a week"
					/>
				</div>
			</section>
			<section className="px-6 md:px-16 xl:px-60 ">
				{productStatus === "loading" || productStatus === "failed" ? (
					<Loading />
				) : (
					<div className="grid gap-10 lg:gap-20">
						<Products
							category={"men's clothing"}
							showFilter={true}
							products={products.filter(
								(item) => item.category == "men's clothing"
							)}
						/>
						<Products
						showFilter={true}
							category={"women's clothing"}
							products={products.filter(
								(item) => item.category == "women's clothing"
							)}
						/>
						<Products
						showFilter={true}
							category={"electronics"}
							products={products.filter(
								(item) => item.category == "electronics"
							)}
						/>
						<Products
						showFilter={true}
							category={"jewelery"}
							products={products.filter((item) => item.category == "jewelery")}
						/>
					</div>
				)}
				<SalesOffer />
			</section>

			<SpecialOffer />
			<div className="grid place-items-center md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20 px-6 md:px-16 xl:px-60 ">
				<CardText img={img} />
				<CardText img={img1} />
				<CardText img={img2} />
			</div>
		</div>
	);
}
