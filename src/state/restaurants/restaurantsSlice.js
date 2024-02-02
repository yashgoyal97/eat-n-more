import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APP_DATA, UPDATE_RES_DATA } from "../../utils/constants";

const initialState = {
  data: null,
  onlineRestaurants: null,
  restaurantNumber: null,
};

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAppData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.onlineRestaurants =
          action.payload.cards[4].card.card.gridElements.infoWithStyle.restaurants;
        state.restaurantNumber =
          action.payload.pageOffset.widgetOffset.collectionV5RestaurantListWidget_SimRestoRelevance_food_seo;
      })
      .addCase(fetchRestaurantsData.fulfilled, (state, action) => {
        state.restaurants = action.payload;
      });
  },
});

export const { updateRestaurantNumber } = restaurantsSlice.actions;

export const fetchAppData = createAsyncThunk("main/fetchAppData", async () => {
  try {
    const res = await fetch(APP_DATA);
    if (!res.ok)
      throw new Error("Oops! Something went wrong, please try after sometime.");
    const json = await res.json();
    return json.data;
  } catch (error) {
    return error;
  }
});

// Fetch restaurant list on infinite scroll, filter and search
export const fetchRestaurantsData = createAsyncThunk(
  "restaurants/fetchRestaurantsData",
  async (option) => {
    console.log(option);
  }
);

export default restaurantsSlice.reducer;
