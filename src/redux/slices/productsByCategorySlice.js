import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductsByCategory = createAsyncThunk(
  "productsByCategory",
  async (category) => {
    return axios.get(`https://dummyjson.com/products/category/${category}`);
  }
);

const productsByCategorySlice = createSlice({
  name: "productsByCategory",
  initialState: {
    isLoading: true,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getProductsByCategory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getProductsByCategory.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getProductsByCategory, (state, action) => {
      console.log("Error: ", action.payload);
    });
  },
});

export default productsByCategorySlice.reducer;
