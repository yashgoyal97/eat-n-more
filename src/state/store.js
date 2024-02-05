import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./main/mainSlice";
import restaurantReducer from "./restaurant/restaurantSlice";
import cartReducer from "./cart/cartSlice";

export const store = configureStore({
  reducer: {
    main: mainReducer,
    restaurant: restaurantReducer,
    cart: cartReducer,
  },
});
