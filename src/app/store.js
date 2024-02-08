import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cart/cartSlice';
import productsReducer from '../features/api/productsSlice';
export const store = configureStore({
  reducer: {
    cart:cartReducer,
    products:productsReducer
  },
})