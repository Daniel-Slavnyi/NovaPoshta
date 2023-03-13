import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProductInfo } from 'services/apiProducts';

export const getProductByTtn = createAsyncThunk(
  'product/get',
  async (ttn, thunkAPI) => {
    try {
      const res = await getProductInfo(ttn);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// '20450676599503';
