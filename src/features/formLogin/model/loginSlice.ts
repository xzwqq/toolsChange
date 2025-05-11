import { createAction, createSlice } from '@reduxjs/toolkit';
import { form } from '../type/loginType';

const loginSlice = createSlice({
	name: 'login',
	initialState: {},
	reducers: {}
});

export const LoginActions = {
	...loginSlice.actions,
	submit: createAction<form>(`${loginSlice.name}/submit`)
};

export default loginSlice.reducer;
