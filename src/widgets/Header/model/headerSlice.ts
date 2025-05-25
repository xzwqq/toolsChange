import { createAction, createSlice } from '@reduxjs/toolkit';
const initialState = {
	isloading: false,
	isVisible: false,
	visiblelogin: false,
	visibleRegister: false
};

const headerSlice = createSlice({
	name: 'header',
	initialState,
	reducers: {
		setSecces: (state) => {
			state.isloading = false;
			state.isVisible = false;
		},
		setIsLoading: (state) => {
			state.isloading = true
		},
		setIsVisible: (state, action) => {
			state.isVisible = action.payload
		},
		setVisibleLogin: (state, action) => {
			state.visiblelogin = action.payload
			state.visibleRegister = false 
		},
		setVisibleRegister: (state, action) => {
			state.visibleRegister = action.payload
			state.visiblelogin = false 
		},

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
