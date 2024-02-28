import { configureStore } from "@reduxjs/toolkit";
// cartSlice file
import cartReducer from "./features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
