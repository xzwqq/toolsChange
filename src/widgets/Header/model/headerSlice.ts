import { createAction, createSlice } from '@reduxjs/toolkit';
const initialState = {
	succses: null
};

const headerSlice = createSlice({
	name: 'header',
	initialState,
	reducers: {
		setSecces: (state, action) => {
			state.succses = action.payload;
		}
	}
});

const submitFilter = createAction(`${headerSlice.name}/submitFilter`, data => ({
	payload: data
}));

export const HeaderActions = {
	...headerSlice.actions,
	submitFilter
};

export default headerSlice.reducer;
