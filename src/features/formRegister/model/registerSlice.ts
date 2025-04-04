import { createAction, createSlice } from '@reduxjs/toolkit';

const registerSlice = createSlice({
	name: 'form',
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

export const RegisterActions = { ...registerSlice.actions,
	submit: createAction(`${registerSlice.name}/submit`),
 };

export default registerSlice.reducer;
