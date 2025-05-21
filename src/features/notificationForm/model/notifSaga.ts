import { call, put, takeLatest } from 'redux-saga/effects';
import { NotifAction } from './notifSlice.ts';
import { PayloadAction } from '@reduxjs/toolkit';
import { HelperActions } from '../../../utils/helper/helperSlice.ts';
import { choosenotif, getnotif } from '../../../shared/api/notifAPI.ts';
import { notifDealtype, notifresponse } from '../type/notif.type.ts';

function* getnotification(): Generator {
	try {
		const response: notifresponse = yield call(getnotif);
		yield put(NotifAction.setSucsses(response));
	} catch (error) {
		console.log(error);
	}
}

function* acceptNotification(action: PayloadAction<notifDealtype>): Generator {
	try {
		yield call(choosenotif, action.payload);
		yield put(HelperActions.setSucsses('Успешно!'));
		yield call(getnotification)
	} catch (error) {
		console.log(error);
	}
}

export default function* wathNotif() {
	yield takeLatest(NotifAction.submitNotif, getnotification);
	yield takeLatest(NotifAction.acceptNotif, acceptNotification);
}
