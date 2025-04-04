import { call, put, takeLatest } from 'redux-saga/effects';
import { submitRegister } from '../../../shared/api/authAPI.ts';
import { RegisterActions } from './registerSlice.ts';
import { history } from '../../../app/providers/history.js';
import { PayloadAction } from '@reduxjs/toolkit';

function* handleSubmitForm(action: PayloadAction): Generator {
	try {
		const response = yield call(submitRegister, action.payload);
		yield put(RegisterActions.setSuccess(response));
		yield call([history, history.push], '/')
	} catch (error: unknown) {
		yield put(RegisterActions.setError(error));
	
		if (typeof error === "object" && error !== null && "status" in error) {
			const err = error as { status: number };
	
			if (err.status === 409) {
				alert('пользователь с такой почтой уже существует!');
			}
		}
	}
}	

export default function* watchRegister() {
	yield takeLatest(RegisterActions.submit, handleSubmitForm);
}
