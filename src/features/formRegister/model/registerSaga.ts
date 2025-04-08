import { call, put, takeLatest } from 'redux-saga/effects';
import { submitRegister } from '../../../shared/api/authAPI.ts';
import { RegisterActions } from './registerSlice.ts';
import { PayloadAction } from '@reduxjs/toolkit';
import { HelperActions } from '../../../utils/helper/helperSlice.ts';

function* handleSubmitForm(action: PayloadAction): Generator {
	try {
		const response = yield call(submitRegister, action.payload);
		yield put(RegisterActions.setSuccess(response));
		window.location.href = '/'
		yield put(HelperActions.setSucsses('Вы успешно вошли!'))
	} catch (error: unknown) {
		yield put(RegisterActions.setError(error));
	
		if (typeof error === "object" && error !== null && "status" in error) {
			const err = error as { status: number };
			if (err.status === 409) {
				yield put(HelperActions.setErrorNetwork('пользователь с такой почтой уже существует!'));
			}else{
				yield put(HelperActions.setErrorNetwork('Network Error'));
			}
		}
	}
}	

export default function* watchRegister() {
	yield takeLatest(RegisterActions.submit, handleSubmitForm);
}
