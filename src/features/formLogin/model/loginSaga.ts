import { call, put, takeLatest } from 'redux-saga/effects';
import { submitLogin } from '../../../shared/api/authAPI.ts';
import { LoginActions } from './loginSlice.ts';
import { HelperActions } from '../../../utils/helper/helperSlice.ts';
import { PayloadAction } from '@reduxjs/toolkit';
import { form } from '../type/loginType.ts';

function* handleSubmitForm(action: PayloadAction<form>): Generator {

	try {
		const response = yield call(submitLogin, action.payload);
		yield put(LoginActions.setSuccess(response));
		window.location.href = '/'
		yield put(HelperActions.setSucsses('Вы успешно вошли!'))
	} catch (error) {
		yield put(LoginActions.setError(error));

		if (typeof error === 'object' && error !== null && 'status' in error) {
			const err = error as { status: number };
			

			if (err.status === 404) {
				yield put(HelperActions.setErrorNetwork('маги с таким сиянием ещё нету'));
			} else if (err.status === 401) {
				yield put(HelperActions.setErrorNetwork('мага пароль забыл что-ли да'));
			}
		}
	}
}

export default function* watchLogin() {
	yield takeLatest(LoginActions.submit, handleSubmitForm);
}
