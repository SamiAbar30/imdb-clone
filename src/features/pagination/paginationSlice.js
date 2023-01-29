import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
	page: 1
};

export const paginationSlice = createSlice({
	name: 'pagination',
	initialState,
	reducers: {
		pageNumbre: (state, action) => {
			state.page = action.payload;
		}
	},
});


export const { pageNumbre } = paginationSlice.actions;

export default paginationSlice.reducer;
