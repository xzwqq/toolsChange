import { createSlice, createAction } from '@reduxjs/toolkit';
import { Tool } from '../type/toolsend.type';

const initialState = {
	selectC: [],
	selectM: [],
	response: [],
	container: [],
	files: []
};

const toolsSendSlice = createSlice({
	name: 'toolsSend',
	initialState,
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
		setFiles: (state, action) => {
			state.files = action.payload;
		}
	}
});

export const ToolsSendActions = {
	...toolsSendSlice.actions,
	submit: createAction<{ tool: Tool }>(`${toolsSendSlice.name}/submit`),
	submitSelectC: createAction(`${toolsSendSlice.name}/submitSelectC`),
	submitSelectM: createAction(`${toolsSendSlice.name}/submitSelectM`)
};

export default toolsSendSlice.reducer;
