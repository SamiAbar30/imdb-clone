import { configureStore } from '@reduxjs/toolkit';
import filterSlice from '../features/filter/filterSlice';
import paginationSlice from '../features/pagination/paginationSlice';
//setup redux stor
export const store = configureStore({
	//setup redux stor
	reducer: { filter: filterSlice, pagination: paginationSlice },
});
