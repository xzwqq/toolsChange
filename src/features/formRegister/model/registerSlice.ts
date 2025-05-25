import { createAction, createSlice } from '@reduxjs/toolkit';
import { register } from '../type/registerType';

const initialState = {
		isLoading: false
	}
const registerSlice = createSlice({
	name: 'form',
	initialState,
	reducers: {
		setIsLoading: (state) => {
			state.isLoading = true
		},
		reset: () => initialState 
	}
});

export const RegisterActions = { 
	...registerSlice.actions,
	submit: createAction<register>(`${registerSlice.name}/submit`),
 };

export default registerSlice.reducer;
