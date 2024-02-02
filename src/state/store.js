import { configureStore } from "@reduxjs/toolkit";
import restaurantsReducer from "./restaurants/restaurantsSlice";

export const store = configureStore({
  reducer: {
    restaurants: restaurantsReducer
  },
});
