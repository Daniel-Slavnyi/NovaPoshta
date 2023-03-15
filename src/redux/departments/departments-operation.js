import { createAsyncThunk } from '@reduxjs/toolkit';
import { getOficeInfo, getOficeListInfo } from 'services/apiProducts';

export const getDepartmentsByCity = createAsyncThunk(
  'departments/get',
  async (objData, thunkAPI) => {
    try {
      const res = await getOficeInfo(objData.city, objData.num);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getDepartmentsListByCity = createAsyncThunk(
  'departmentsList/get',
  async (objData, thunkAPI) => {
    try {
      const res = await getOficeListInfo(objData.city, objData.num);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
