import { createAction, createSlice } from '@reduxjs/toolkit';
import { register } from '../type/registerType';

const registerSlice = createSlice({
	name: 'form',
	initialState: {},
	reducers: {}
});

export const RegisterActions = { 
	...registerSlice.actions,
	submit: createAction<register>(`${registerSlice.name}/submit`),
 };

export default registerSlice.reducer;
