import { createAction, createSlice } from '@reduxjs/toolkit';
import { form } from '../type/loginType';

const initialState ={
	response: null
}
const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		setSuccess: (state, action) => {
			state.response = action.payload;
		},
	}
});

export const LoginActions = {
	...loginSlice.actions,
	submit: createAction<form>(`${loginSlice.name}/submit`)
};

export default loginSlice.reducer;
