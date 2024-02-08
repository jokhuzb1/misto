import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items:[],
  totalItems:0,
  totalPrice:0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
   addItem:(state,action)=>{
    if(!state.items.find(item=> item.id == action.payload.id)){
      state.items.push({...action.payload, quantity :1})
    } else{
      const updatedArray = state.items.reduce((acc, item)=>{
          if(item.id === action.payload.id){
            return [...acc, {...item, quantity:item.quantity + 1}]
          }
          return [...acc, item]
        },[])
      state.items = updatedArray;
    }
   },
   increaseItemQuantity:(state, action)=>{
    const id = action.payload;
    const updatedArray = state.items.reduce((acc, item)=>{
      if(item.id === id){
        return [...acc, {...item, quantity:item.quantity + 1}]
      }
      return [...acc, item]
    },[])
    state.items = updatedArray;
   },
   decreaseItemQuantity:(state, action)=>{
    const id = action.payload;
    const updatedArray = state.items.reduce((acc, item)=>{
      if(item.id === id && item.quantity > 0){
        return [...acc, {...item, quantity:item.quantity - 1}]
      }
      return [...acc, item]
    },[]);
    state.items = updatedArray;
  },
  
   removeItem:(state,action)=>{
    const filteredArray = state.items.filter((item)=> item.id !==action.payload)
    state.items = filteredArray;
   },
  
  },
})

export const selectCartItems = (state) => state.cart.items;
export const { addItem, removeItem, increaseItemQuantity, decreaseItemQuantity } = cartSlice.actions

export default cartSlice.reducer