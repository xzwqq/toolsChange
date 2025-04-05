import { createSlice, createAction } from '@reduxjs/toolkit';
import { Data } from '../type/toolsend.type';

const toolsSendSlice = createSlice({
	name: 'toolsSend',
	initialState: {
		selectC: [],
		selectM: [],
		response: [],
		error: '',
		container: [],
	},
	reducers: {
		setSuccess: (state, action) => {
			state.response = action.payload;
		},
		setSelectC: (state, action) => {
			state.selectC = action.payload;
		},
		setSelectM: (state, action) => {
			state.selectM = action.payload;
		},
		setError: (state, action) => {
			state.error = action.payload;
		},
	}
});
export const ToolsSendActions = {
	...toolsSendSlice.actions,
	submit: createAction<{data: Data}>(`${toolsSendSlice.name}/submit`),
	submitSelectC: createAction(`${toolsSendSlice.name}/submitSelectC`),
	submitSelectM: createAction(`${toolsSendSlice.name}/submitSelectM`),
};
export default toolsSendSlice.reducer;
