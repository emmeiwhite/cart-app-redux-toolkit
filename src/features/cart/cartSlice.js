import { createSlice } from "@reduxjs/toolkit";
import cartItems from "./../../cartItems";

const initialState = {
  cartItems: cartItems,
  isLoading: false,
  itemsInCart: 10,
  totalAmout: 340,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      // Here in Redux/Toolkit we can directly mutate the state
    },

    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { clearCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
