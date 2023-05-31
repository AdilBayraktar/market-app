import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice";
import categoriesReducer from "./slices/categoriesSlice";
import productsByCategoryReducer from "./slices/productsByCategorySlice";
import productReducer from "./slices/singleProductSlice";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    getAllProducts: productsReducer,
    getAllCategories: categoriesReducer,
    getProductsByCategory: productsByCategoryReducer,
    getProduct: productReducer,
    carts: cartSlice,
  },
});
export default store;
