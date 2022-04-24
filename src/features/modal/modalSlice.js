import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};
// This is another feature for our app, hence a new slice
const modalSlide = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
    },

    closeModal: (state, action) => {
      state.isOpen = false;
    },
  },
});

console.log(modalSlide);
export const { openModal, closeModal } = modalSlide.actions;
export default modalSlide.reducer;
