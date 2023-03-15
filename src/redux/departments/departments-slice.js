import { createSlice } from '@reduxjs/toolkit';
import {
  getDepartmentsByCity,
  getDepartmentsListByCity,
} from './departments-operation';

const departmentsSlice = createSlice({
  name: 'departments',
  initialState: {
    item: [],
    itemsPaginations: [],
    numOfPage: 1,
    error: null,
    isLoading: null,
  },
  reducers: {
    plusNumOfPage(state, action) {
      state.numOfPage = state.numOfPage + action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getDepartmentsByCity.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(getDepartmentsByCity.fulfilled, (state, action) => {
        state.item = action.payload.data;
        state.itemsPaginations = action.payload.data;
        state.isLoading = false;
      })
      .addCase(getDepartmentsByCity.rejected, (state, action) => {
        state.error = action.payload;
      })
      // ===================
      .addCase(getDepartmentsListByCity.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(getDepartmentsListByCity.fulfilled, (state, action) => {
        state.itemsPaginations = [
          ...state.itemsPaginations,
          ...action.payload.data,
        ];
        state.isLoading = false;
      })
      .addCase(getDepartmentsListByCity.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

const { actions } = departmentsSlice;

export const { plusNumOfPage } = actions;
export const departmentsReducer = departmentsSlice.reducer;
