import { createSlice, createAction } from '@reduxjs/toolkit';
import { notifDealtype } from '../type/notif.type';

const initialState = {
	response: []
};
const notifSlice = createSlice({
	name: 'notif',
	initialState,
	reducers: {
		setSucsses: (state, action) => {
			state.response = action.payload;
		}
	}
});

const submitNotif = createAction(`${notifSlice.name}/submitNotif`);
const acceptNotif = createAction(
	`${notifSlice.name}/acceptNotif`,
	(data: notifDealtype) => ({ payload: data })
);

export const NotifAction = {
	...notifSlice.actions,
	submitNotif,
	acceptNotif
};

export default notifSlice.reducer;
