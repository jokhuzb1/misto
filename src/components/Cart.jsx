import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decreaseItemQuantity, increaseItemQuantity, removeItem } from '../features/cart/cartSlice';
import { Link } from 'react-router-dom';
import { HiOutlineShoppingBag } from "react-icons/hi2";



export default function Cart() {
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch()
    const cartItems = useSelector(state=> state.cart.items)
    const total = cartItems.reduce((acc, item)=>{
        if(item.quantity >1){
          const total = item.quantity * item.price;
          return acc + total
        }
        if(item.quantity ===1) return acc + item.price
        return acc =0
    },0)
   
  return (
    <div className='relative ml-2'>
        <div onClick={()=>setShowModal(!showModal)} className='relative cursor-pointer'>
        {cartItems?.length >0 ?
        <span className=' absolute  ml-3 -mt-2 bg-white  rounded-full px-1 text-xs border '>{cartItems.length}</span> :''}
          
            <li><HiOutlineShoppingBag className='text-2xl'/></li>
        </div>
       {showModal ? (
        <div className='fixed left-0 right-0 top-0 bottom-0 bg-black bg-opacity-50 z-10 flex justify-end ' onClick={()=>setShowModal(!showModal)}>
         <div onClick={(e)=>e.stopPropagation()}className='w-80 p-2 pt-5 bg-white h-screen right-0 drop-shadow origin-right animate-slider'>
         {cartItems?.length >0 ? cartItems.map((item)=>(
          item.quantity > 0 && (
          <div  key={item.id}>
            <div className='grid grid-cols-2 mb-3'>
              <div className='flex justify-center items-center'>
                <img src={item?.image} className='max-h-32' alt="" />
              </div>
              <div>
                <span>{item.title.slice(0,20)}</span>
                <span>$ {item.price}</span>
                <span className='block'> 
                <button onClick={()=>dispatch(decreaseItemQuantity(item.id))}className='btn-cart' disabled={item.quantity<2 ? true :false}>-</button>
                {item.quantity}
                <button onClick={()=>dispatch(increaseItemQuantity(item.id))}className='btn-cart'>+</button>
                </span>
            <button className='block capitalize bg-red-600 text-white px-2 rounded-sm' onClick={()=>dispatch(removeItem(item.id))}>remove</button>
              </div>
            </div>
          </div>
          )
         )):<div>
            <h2>Cart is empty</h2>
          </div>}
          <div className='absolute flex bottom-0 p-3'>
         <button onClick={()=>setShowModal(!showModal)} className='bottom-5 px-4 py-3  bg-black text-white uppercase font-bold mx-2  max-h-12 '>close</button>
         <Link to='cart'onClick={()=>setShowModal(!showModal)} className='bottom-5 px-4 py-3  bg-black text-white uppercase font-bold mx-2  max-h-12 '>go to cart</Link>
          </div>
          {cartItems.length >0 &&  <h2>Total:{total}</h2>}
         </div>
        </div>
       ):""}
    </div>
  )
}
