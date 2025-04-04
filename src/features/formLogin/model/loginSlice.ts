import { createAction, createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
	name: 'login',
	initialState: {
		error: null,
		response: null
	},
	reducers: {
		setSuccess: (state, action) => {
			state.response = action.payload;
		},
		setError: (state, action) => {
			state.error = action.payload;
		}
	}
});

export const LoginActions = {
	...loginSlice.actions,
	submit: createAction(`${loginSlice.name}/submit`)
};

export default loginSlice.reducer;
