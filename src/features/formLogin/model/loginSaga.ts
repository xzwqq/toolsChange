import { call, put, takeLatest } from 'redux-saga/effects';
import { submitLogin } from '../../../shared/api/authAPI.ts';
import { LoginActions } from './loginSlice.ts';
import { HelperActions } from '../../../utils/helper/helperSlice.ts';
import { PayloadAction } from '@reduxjs/toolkit';
import { form } from '../type/loginType.ts';
import { history } from '../../../app/providers/history.ts';

function* handleSubmitForm(action: PayloadAction<form>): Generator {

	try {
		yield call(submitLogin, action.payload);
		yield call([history, history.push], '/')
		yield put(HelperActions.setSucsses('Вы успешно вошли!'))
	} catch (error) {
		if (typeof error === 'object' && error !== null && 'status' in error) {
			const err = error as { status: number };
			if (err.status === 404) {
				yield put(HelperActions.setErrorNetwork('маги с таким сиянием ещё нету'));
			} else if (err.status === 401) {
				yield put(HelperActions.setErrorNetwork('мага забыл пароль что-ли да'));
			}
		}
	}
}

export default function* watchLogin() {
	yield takeLatest(LoginActions.submit, handleSubmitForm);
}
