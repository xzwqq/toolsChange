import { createAction, createSlice } from '@reduxjs/toolkit';
import { chatikmessage, namepropiks, queueChat } from '../type/chat.type';
interface init {
	queue: Array<queueChat>;
	chat: Array<chatikmessage>;
	name: namepropiks;
	isbuttonloading: boolean;
	isLoading: boolean;
}
const initialState: init = {
	queue: [],
	chat: [],
	name: {
		firstname: '',
		id: '',
		lastname: '',
		login: ''
	},
	isbuttonloading: false,
	isLoading: true
};

const chatSlice = createSlice({
	name: 'chat',
	initialState,
	reducers: {
		setSuccsesQueue: (state, action) => {
			state.queue = action.payload;
			state.isLoading = false
		},
		setSuccsesChat: (state, action) => {
			state.chat = action.payload;
		},
		setNameChat: (state, action) => {
			state.name = action.payload;
		},
		setIsbuttonLoading: (state, action) => {
			state.isbuttonloading = action.payload;
		}
	}
});

const getQueueSlice = createAction(`${chatSlice.name}/getQueueSlice`);
const postChatSlice = createAction(`${chatSlice.name}/postChatSlice`, data => ({
	payload: data
}));
const getChatSlice = createAction(
	`${chatSlice.name}/getChatSlice`,
	(data: string) => ({ payload: data })
);

export const ChatAction = {
	...chatSlice.actions,
	getQueueSlice,
	getChatSlice,
	postChatSlice
};

export default chatSlice.reducer;
