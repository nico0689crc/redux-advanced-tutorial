import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.cart.totalQuantity;
      state.items = action.payload.cart.items;
    },
    addItemToCart(state, action) {
      const { item } = action.payload;

      const existingItem = state.items.find(
        arrayItem => arrayItem.id === item.id
      );

      if (!existingItem) {
        state.items.push({
          id: item.id,
          price: item.price,
          quantity: 1,
          totalPrice: item.price,
          title: item.title,
        });

        state.totalQuantity++;
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + item.price;
      }

      state.changed = true;
    },
    removeItem(state, action) {
      const itemId = action.payload.id;
      const item = state.items.find(item => item.id === itemId);

      if (item.quantity === 1) {
        state.items = state.items.filter(itemArray => itemArray.id !== itemId);
        state.totalQuantity--;
      } else {
        item.quantity--;
        item.totalPrice = item.totalPrice - item.price;
      }

      state.changed = true;
    },
  },
});

export const cartActions = cartSlice.actions;
