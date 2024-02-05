import { createSlice, original } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  totalItems: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const cart = original(state).data;
      const { id } = item;
      if (cart && Object.keys(cart).length > 0) {
        if (cart.hasOwnProperty(id)) {
          state.data[id].count += 1;
        } else {
          const obj = {
            [id]: {
              ...item,
              count: 1,
            },
          };
          state.data = { ...cart, ...obj };
        }
      } else {
        const obj = {
          [id]: {
            ...item,
            count: 1,
          },
        };
        state.data = obj;
      }
      state.totalItems++;
    },
    removeItem: (state, action) => {
      const item = action.payload;
      const cart = original(state).data;
      const { id } = item;
      if (cart && cart[id] && cart[id].count > 1) {
        state.data[id].count -= 1;
      } else {
        delete state.data[id];
      }
      state.totalItems--;
    },
    clearCart: (state) => {
      state.totalItems = 0;
      state.cart = null;
    },
  },
});

export const { addToCart, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
