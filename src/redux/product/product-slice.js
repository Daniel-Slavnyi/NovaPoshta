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
  reducers: {
    addToStory(state, action) {
      if (state.numOfTtn.some(item => item === action.payload)) {
        return alert(`${action.payload} is already in your history`);
      }

      state.numOfTtn = [action.payload, ...state.numOfTtn];
    },
    deleteUser(state, action) {
      state.numOfTtn = state.numOfTtn.filter(obj => obj !== action.payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getProductByTtn.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(getProductByTtn.fulfilled, (state, action) => {
        state.item = action.payload.data[0];
        state.isLoading = false;
      })
      .addCase(getProductByTtn.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});
const { actions } = productSlice;

export const { addToStory, deleteUser } = actions;
export const productReducer = productSlice.reducer;
