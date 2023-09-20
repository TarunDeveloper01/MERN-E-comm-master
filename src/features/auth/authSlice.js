import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { fetchCount } from "./counterAPI";

const initialState = {
  isLogin: false,
  value: 0,
  status: "idle",
};

// export const incrementAsync = createAsyncThunk(
//   "counter/fetchCount",
//   async (amount) => {
//     const response = await fetchCount(amount);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );
export const IsLoginFunction = createAsyncThunk("loingjhg", async () => {
  // The value we return becomes the `fulfilled` action payload
  return true;
});

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      // .addCase(incrementAsync.pending, (state) => {
      //   state.status = "loading";
      // })
      // .addCase(incrementAsync.fulfilled, (state, action) => {
      //   state.status = "idle";
      //   state.value += action.payload;
      // })
      .addCase(IsLoginFunction.fulfilled, (state, action) => {
        state.isLogin = action.payload;
      });
  },
});

export const { increment } = counterSlice.actions;

export default counterSlice.reducer;
