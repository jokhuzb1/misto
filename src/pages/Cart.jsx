import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	decreaseItemQuantity,
	increaseItemQuantity,
	removeItem,
} from "../features/cart/cartSlice";
export default function Cart() {
	const dispatch = useDispatch();
	const cartItems = useSelector((state) => state.cart.items);
	const total = cartItems.reduce((acc, item) => {
		if (item.quantity > 1) {
			const total = item.quantity * item.price;
			return acc + total;
		}
		if (item.quantity === 1) return acc + item.price;
		return (acc = 0);
	}, 0);
	return (
		<div className="mt-40 px-20">
			{cartItems?.length > 0 ? (
				cartItems.map((item) => (
					<div key={item.id}>
						<div className="grid grid-cols-2 mb-3">
							<div className="flex justify-center items-center">
								<img src={item?.image} className="max-h-32" alt="" />
							</div>
							<div>
								<span>{item.title.slice(0, 20)}</span>
								<span>$ {item.price}</span>
								<span className="block">
									<button
										onClick={() => dispatch(decreaseItemQuantity(item.id))}
										className="btn-cart"
										disabled={item.quantity < 2 ? true : false}
									>
										-
									</button>
									{item.quantity}
									<button
										onClick={() => dispatch(increaseItemQuantity(item.id))}
										className="btn-cart"
									>
										+
									</button>
								</span>
								<button
									className="block capitalize bg-red-600 text-white px-2 rounded-sm"
									onClick={() => dispatch(removeItem(item.id))}
								>
									remove
								</button>
							</div>
						</div>
					</div>
				))
			) : (
				<div>
					<h2>Cart is empty</h2>
				</div>
			)}
			{cartItems.length > 0 && <h2 className="text-end">Total:$ {total}</h2>}
		</div>
	);
}
