import { combineReducers } from '@reduxjs/toolkit';
import { productReducer } from './product/product-slice';
import { departmentsReducer } from './departments/departments-slice';

export const rootReducer = combineReducers({
  product: productReducer,
  departments: departmentsReducer,
});
