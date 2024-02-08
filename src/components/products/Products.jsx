import {
	Tabs,
	TabsHeader,
	TabsBody,
	Tab,
	TabPanel,
	Typography,
	Button,
	Checkbox,
	Card,
} from "@material-tailwind/react";
import SingleProduct from "./SingleProduct";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../features/cart/cartSlice";
import { data as local } from "../../../data";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import { CiBurger, CiGrid41, CiMenuBurger } from "react-icons/ci";

export default function Products({
	products = [],
	category,
	showFilter,
	detailedFilter,
}) {
	const [activeTab, setActiveTab] = useState("");
	const [openFilter, setOpenFilter] = useState(false);
	const [allProducts, selectAllProducts] = useState([
		...products,
		...local.filter((item) => item.category === category),
	]);
	const filteredProducts = {
		all: allProducts,
		["new arrivals"]: [
			...local.filter(
				(item) => item.newStock === true && item.category === category
			),
		],
		specials: [
			...local.filter(
				(item) => item.onSale === true && item.category === category
			),
		],
		["most viewed"]: [
			...local.filter((item) => item.views > 100 && item.category === category),
		],
	};
	const content = filteredProducts.all.slice(0, 4);
	const keys = ["all", "new arrivals", "specials", "most viewed"];

	return (
		<Tabs value={activeTab} className="">
			{showFilter && (
				<div className="flex justify-between align-center text-center uppercase text-nowrap">
					<h2 className="self-center mt-2 uppercase">{category}</h2>
					<TabsHeader
						className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 my-5"
						indicatorProps={{
							className:
								"bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
						}}
					>
						{keys.map((value) => (
							<Tab
								key={value}
								value={value}
								onClick={() => setActiveTab(value)}
								className={`${
									activeTab === value ? "text-gray-900" : ""
								} text-md z-0 `}
							>
								{value}
							</Tab>
						))}
					</TabsHeader>
				</div>
			)}

			{detailedFilter && (
				<div className="flex justify-between">
					<div>
						<p
							onClick={() => setOpenFilter(!openFilter)}
							className="inline-block uppercase font-medium opacity-60 cursor-pointer"
						>
							<HiOutlineAdjustmentsVertical className="inline-block mr-2" />
							Filter
						</p>
					</div>
					<div className="flex font-medium">
						<CiGrid41 className="mr-2" />
						<CiMenuBurger />
					</div>
					<div>
						<Typography className="font-medium uppercase"></Typography>
					</div>
				</div>
			)}
			<div className={`${openFilter ? "block" : "hidden"} flex justify-between bg-[#f8f8f8] p-10  `}>
				<ul className="  max-h-72 overflow-scroll  px-4">
					<h2>Color</h2>
					<li>
						<Checkbox color="blue" /> Blue
					</li>
					<li>
						<Checkbox color="red" /> Red
					</li>
					<li>
						<Checkbox color="green" />Green
					</li>
					<li>
						<Checkbox color="amber" />Amber
					</li>
					<li>
						<Checkbox color="teal" />Teal
					</li>
					<li>
						<Checkbox color="indigo" /> Indigo
					</li>
					<li>
						<Checkbox color="purple" /> Purple
					</li>
					<li>
						<Checkbox color="pink" /> Pink
					</li>
				</ul>
				<ul>
					SIZE
					<li><Checkbox  /> XS</li>
					<li><Checkbox  />X</li>
					<li><Checkbox  />M</li>
					<li><Checkbox  />L</li>
					<li><Checkbox  />XL</li>
				</ul>
				<ul>
					BRAND
					<li><Checkbox  />Ck</li>
					<li><Checkbox  />H&M</li>
					<li><Checkbox  />Kalles</li>
					<li><Checkbox  />Levi's</li>
					<li><Checkbox  />Monki</li>
					<li><Checkbox  />Nike</li>
				</ul>
				<ul>
					PRICE
					<li><Checkbox  />$1200+</li>
					<li><Checkbox  />$600-$1200</li>
					<li><Checkbox  />$300-$600</li>
					<li><Checkbox  />$150-$300</li>
					<li><Checkbox  />$50-$150</li>
					<li><Checkbox  />$10-$50</li>
				</ul>
			</div>

			<TabsBody className="cardStyle 	">
				{filteredProducts[activeTab]?.map((item, index) => (
					<SingleProduct item={item} key={index} category={item.category} />
				))}
				{activeTab === "" &&
					content.map((item, index) => (
						<SingleProduct item={item} key={index} />
					))}
			</TabsBody>
			<button
				className="block w-full bg-gray-200 py-3 hover:bg-gray-100 active:animate-ping text-[#4b4b4b] uppercase "
				variant="outlined"
				onClick={() => setActiveTab(activeTab === "" ? "all" : "")}
			>
				{activeTab === "all" ? "Show less" : "Show All"}
			</button>
		</Tabs>
	);
}
