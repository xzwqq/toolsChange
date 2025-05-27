import { call, put, takeLatest } from 'redux-saga/effects';
import { NotifAction } from './notifSlice.ts';
import { PayloadAction } from '@reduxjs/toolkit';
import { HelperActions } from '../../../utils/helper/helperSlice.ts';
import {
	choosenotif,
	getnotif,
	sendRatingApi
} from '../../../shared/api/notifAPI.ts';
import {
	notifDealtype,
	notifresponse,
	ratingType
} from '../type/notif.type.ts';

function* getnotifications(): Generator {
	try {
		const response: Array<notifresponse> = yield call(getnotif, 'in');
		yield put(NotifAction.setSucsses(response));
	} catch (error) {
		console.log(error);
	}
}
function* getnotification(action: PayloadAction<string>): Generator {
	try {
		const response: Array<notifresponse> = yield call(getnotif, action.payload);
		
		yield put(NotifAction.setSucsses(response));
	} catch (error) {
		console.log(error);
	}
}
function* sendRatings(action: PayloadAction<ratingType>): Generator {
	try {
		yield call(sendRatingApi, action.payload);
		yield put(HelperActions.setSucsses('Вы успешно оставили отзыв!'));
		yield call(getnotifications);
	} catch (error) {
		console.log(error);
	}
}

function* acceptNotification(action: PayloadAction<notifDealtype>): Generator {
	try {
		yield call(choosenotif, action.payload);
		yield put(HelperActions.setSucsses('Успешно!'));
		yield call(getnotifications);
	} catch (error) {
		console.log(error);
	}
}

export default function* wathNotif() {
	yield takeLatest(NotifAction.submitNotif, getnotification);
	yield takeLatest(NotifAction.acceptNotif, acceptNotification);
	yield takeLatest(NotifAction.sendRatingSags, sendRatings);
}
