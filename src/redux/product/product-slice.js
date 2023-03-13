import { createSlice } from '@reduxjs/toolkit';
import { getProductByTtn } from './product-operation';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    item: [],
    numOfTtn: [],
    error: null,
    isLoading: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getProductByTtn.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(getProductByTtn.fulfilled, (state, action) => {
        state.item = action.payload.data[0];
        state.numOfTtn = [action.payload.data[0].Number, ...state.numOfTtn];
        state.isLoading = false;
      })
      .addCase(getProductByTtn.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const productReducer = productSlice.reducer;
