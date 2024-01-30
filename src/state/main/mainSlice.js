import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { App_Data } from "../../utils/constants";

const initialState = {
  data: {},
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchAppData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const fetchAppData = createAsyncThunk("main/fetchAppData", async () => {
  try {
    const res = await fetch(App_Data);
    if (!res.ok)
      throw new Error("Oops! Something went wrong, please try after sometime.");
    const json = await res.json();
    return json.data.cards;
  } catch (error) {
    return error;
  }
});

export default mainSlice.reducer;
