import { createAction, createSlice } from '@reduxjs/toolkit';
import { register } from '../type/registerType';

const initialState ={
	response: null
}
const registerSlice = createSlice({
	name: 'form',
	initialState,
	reducers: {
		setSuccess: (state, action) => {
			state.response = action.payload;
		},
	}
});

export const RegisterActions = { 
	...registerSlice.actions,
	submit: createAction<register>(`${registerSlice.name}/submit`),
 };

export default registerSlice.reducer;
