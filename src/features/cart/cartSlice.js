import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  itemsinCart: 0,
  totalAmount: 0,
  isLoading: true,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
});

// console.log(cartSlice);

export default cartSlice.reducer;
