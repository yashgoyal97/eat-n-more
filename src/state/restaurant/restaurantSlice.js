import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurantData: null,
};

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    reset: (state) => {
      state.restaurantData = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRestaurantData.fulfilled, (state, action) => {
      state.restaurantData = action.payload;
    });
  },
});

export const fetchRestaurantData = createAsyncThunk(
  "restaurant/fetchRestaurantData",
  async (url) => {
    try {
      const res = await fetch(url);
      if (!res.ok)
        throw new Error(
          "Oops! Something went wrong, please try after sometime."
        );
      const json = await res.json();
      return json.data;
    } catch (error) {
      return error;
    }
  }
);

export const { reset } = restaurantSlice.actions;

export default restaurantSlice.reducer;
