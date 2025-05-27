import { call, put, takeLatest } from 'redux-saga/effects';
import { submitRegister } from '../../../shared/api/authAPI.ts';
import { RegisterActions } from './registerSlice.ts';
import { PayloadAction } from '@reduxjs/toolkit';
import { HelperActions } from '../../../utils/helper/helperSlice.ts';
import { register } from '../type/registerType.ts';

function* handleSubmitForm(action: PayloadAction<register>): Generator {
	try {
		yield call(submitRegister, action.payload);
		yield put(RegisterActions.reset())
		yield put(HelperActions.setSucsses('Вы успешно вошли!'))
	} catch (error) {
		if (typeof error === "object" && error !== null && "status" in error) {
			const err = error as { status: number };
			if (err.status === 409) {
				yield put(HelperActions.setErrorNetwork('пользователь с такой почтой уже существует'));
			}
		}
		yield put(RegisterActions.reset())
	}
}	

export default function* watchRegister() {
	yield takeLatest(RegisterActions.submit, handleSubmitForm);
}
