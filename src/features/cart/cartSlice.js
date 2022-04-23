import { createSlice } from "@reduxjs/toolkit";
import cartItems from "./../../cartItems";

const initialState = {
  cartItems: cartItems,
  isLoading: false,
  itemsInCart: 0,
  totalAmount: 0,
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
    increase: (state, action) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
    },
    decrease: (state, action) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      });
    },

    calculateTotals: (state) => {
      const { totalAmount, itemsInCart } = state.cartItems.reduce(
        (totals, cartItem) => {
          const { price, amount } = cartItem;
          totals.totalAmount += price * amount;
          totals.itemsInCart += amount;
          return totals;
        },
        {
          totalAmount: 0,
          itemsInCart: 0,
        }
      );

      state.totalAmount = totalAmount;
      state.itemsInCart = itemsInCart;
    },
  },
});

export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
