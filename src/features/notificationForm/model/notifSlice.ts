import { createSlice, createAction } from '@reduxjs/toolkit';
import { notifDealtype, ratingType } from '../type/notif.type';

const initialState = {
	response: [],
	status: true
};
const notifSlice = createSlice({
	name: 'notif',
	initialState,
	reducers: {
		setSucsses: (state, action) => {
			if (!action.payload.length) {
				state.response = [];
			}
			state.response = action.payload;
			state.status = false;
		}
	}
});

const submitNotif = createAction(
	`${notifSlice.name}/submitNotif`,
	(data: string) => ({ payload: data })
);
const acceptNotif = createAction(
	`${notifSlice.name}/acceptNotif`,
	(data: notifDealtype) => ({ payload: data })
);
const sendRatingSags = createAction(
	`${notifSlice.name}/sendRatingSags`,
	(data: ratingType) => ({ payload: data })
);

export const NotifAction = {
	...notifSlice.actions,
	submitNotif,
	acceptNotif,
	sendRatingSags
};

export default notifSlice.reducer;
