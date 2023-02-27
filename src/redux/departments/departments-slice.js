import { createSlice } from '@reduxjs/toolkit';

const departmentsSlice = createSlice({
  name: 'product',
  initialState: {
    item: [],
    error: null,
    isLoading: null,
    extraReducers: builder => builder.addCase(),
  },
});

export const departmentsReducer = departmentsSlice.reducer;
