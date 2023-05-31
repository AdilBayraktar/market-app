import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllCategories = createAsyncThunk(
  "getAllCategories",
  async () => {
    return await axios.get("https://dummyjson.com/products/categories");
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    isLoading: true,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCategories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getAllCategories.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllCategories.rejected, (state, action) => {
      console.log("Error: ", action.payload);
    });
  },
});

export default categoriesSlice.reducer;
