import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    item: [],
    error: null,
    isLoading: null,
    extraReducers: builder => builder.addCase(),
  },
});

export const productReducer = productSlice.reducer;
