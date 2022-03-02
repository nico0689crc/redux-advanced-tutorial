import { configureStore } from "@reduxjs/toolkit";
import { uiSlice } from "./uiSlice";
import { cartSlice } from "./cartSlice";

export const store = configureStore({
  reducer: {
    uiStore: uiSlice.reducer,
    cartStore: cartSlice.reducer,
  },
});
