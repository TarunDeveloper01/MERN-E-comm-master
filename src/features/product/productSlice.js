 import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchAllProducts,
  fetchAllProductsByFilters,
  fetchAllProductsSort,
} from "./productAPI";
// import { logDOM } from "@testing-library/react";

const initialState = {
  products: [],
  status: "idle",
};

export const fetchAllProductsAsync = createAsyncThunk(
  "product/fetchAllProducts",
  async (page) => {
    // console.log(page)
    const response = await fetchAllProducts(page);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const fetchAllProductsFiltersAsync = createAsyncThunk(
  "product/fetchAllProductsByFilters",
  async (filter, page) => {
    const response = await fetchAllProductsByFilters(filter, page);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const fetchAllProductsSortAsync = createAsyncThunk(
  "product/fetchAllProductsSort",
  async ({ sort, order, SortArray, page }) => {
    // console.log(sort,order,SortArray)
    const response = await fetchAllProductsSort(sort, order, SortArray, page);
    // The value we return becomes the `fulfilled` action payload
    console.log("data", response.data);
    return response.data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      })
      .addCase(fetchAllProductsFiltersAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProductsFiltersAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      })
      .addCase(fetchAllProductsSortAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProductsSortAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      });
  },
});

export const { increment } = productSlice.actions;

// export const selectAllProducts = (state) => state.product.products;

export default productSlice.reducer;
