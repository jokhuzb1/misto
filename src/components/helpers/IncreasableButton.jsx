import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	decreaseItemQuantity,
	increaseItemQuantity,
	removeItem,
	selectCartItems,
} from "../../features/cart/cartSlice";

export default function IncreasableButton({ id, addToCart }) {
	const dispatch = useDispatch();
	const cartItem = useSelector(selectCartItems).filter(
		(item) => item.id === id
	);
	return (
		<div>
			{cartItem[0]?.quantity > 0 ? (
				<div className="flex justify-center items-center font-bold">
					<button
						onClick={() => cartItem[0]?.quantity > 1 ? dispatch(decreaseItemQuantity(id)):dispatch(removeItem(id))}
						className="btn-cart"
					>
						-
					</button>
					<h1>{cartItem[0]?.quantity}</h1>
					<button
						onClick={() => dispatch(increaseItemQuantity(id))}
						className="btn-cart"
					>
						+
					</button>
				</div>
			):  (
				<button
					className="px-4 py-3 bg-black text-white uppercase font-bold mx-2  shadow-lg transform active:scale-y-75 transition-transform "
					onClick={addToCart}
				>
					Add to cart
				</button>
			)
        }

			{/* {cartItem} */}
		</div>
	);
}
