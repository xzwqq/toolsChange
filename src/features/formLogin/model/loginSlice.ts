import { createAction, createSlice } from '@reduxjs/toolkit';
import { form } from '../type/loginType';

const initialState = {
		isLoading: false
	}
const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		setIsLoading: (state) => {
			state.isLoading = true
		},
		reset: () => initialState 
	}
});

export const LoginActions = {
	...loginSlice.actions,
	submit: createAction<form>(`${loginSlice.name}/submit`)
};

export default loginSlice.reducer;
