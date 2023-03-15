import { createSlice } from '@reduxjs/toolkit';
import { getProductByTtn } from './product-operation';

import { toast } from 'react-toastify';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'ttn',
  whitelist: ['numOfTtns'],
  storage,
};

const productSlice = createSlice({
  name: 'product',
  initialState: {
    item: [],
    numOfTtns: [],
    numOfTtn: '',
    error: null,
    isLoading: null,
  },
  reducers: {
    addToStory(state, action) {
      if (state.numOfTtns.some(item => item === action.payload)) {
        toast.warning('This TTN is already in your list');
        return;
      }

      state.numOfTtns = [action.payload, ...state.numOfTtns];
    },
    addNum(state, action) {
      state.numOfTtn = action.payload;
    },
    deleteUser(state, action) {
      state.numOfTtns = state.numOfTtns.filter(obj => obj !== action.payload);
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
        state.error = 'Not correct the number';
        state.isLoading = false;
      });
  },
});
const { actions } = productSlice;

export const { addToStory, deleteUser, addNum } = actions;

export const productReducer = persistReducer(
  persistConfig,
  productSlice.reducer
);
