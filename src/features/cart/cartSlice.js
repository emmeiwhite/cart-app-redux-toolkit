import { createSlice } from "@reduxjs/toolkit";
import cartItems from "./../../cartItems";

const initialState = {
  cartItems: cartItems,
  itemsinCart: 5,
  totalAmount: 456,
  isLoading: true,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
});

// console.log(cartSlice);

export default cartSlice.reducer;
