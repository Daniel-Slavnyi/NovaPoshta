import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProductInfo } from 'services/apiProducts';
import { toast } from 'react-toastify';

export const getProductByTtn = createAsyncThunk(
  'product/get',
  async (ttn, thunkAPI) => {
    try {
      const res = await getProductInfo(ttn);
      if (!res.success) {
        toast.error('Not correct the number');
        throw new Error();
      }

      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// '20450676599503';
