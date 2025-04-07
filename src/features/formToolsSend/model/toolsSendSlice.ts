import { createSlice, createAction } from '@reduxjs/toolkit';
import { Tool } from '../type/toolsend.type';

const initialState = {
  selectC: [],
  selectM: [],
  response: [],
  error: '',
  container: [],
  files: [],
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
    setError: (state, action) => {
      state.error = action.payload;
    },
	setFiles: (state, action) =>{
		state.files = action.payload
	}
  }
});

export const ToolsSendActions = {
  ...toolsSendSlice.actions,
  // Изменяем структуру action - файлы передаем отдельно от сериализуемых данных
  submit: createAction<{ tool: Tool }>(`${toolsSendSlice.name}/submit`),
  submitSelectC: createAction(`${toolsSendSlice.name}/submitSelectC`),
  submitSelectM: createAction(`${toolsSendSlice.name}/submitSelectM`)
};

export default toolsSendSlice.reducer;