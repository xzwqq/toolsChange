import { call, put, takeLatest } from 'redux-saga/effects';
import { submitLogin } from '../../../shared/api/authAPI.ts';
import { LoginActions } from './loginSlice.ts';
import { HelperActions } from '../../../utils/helper/helperSlice.ts';
import { PayloadAction } from '@reduxjs/toolkit';
import { form } from '../type/loginType.ts';
import { HeaderActions } from '../../../widgets/Header/model/headerSlice.ts';


function* handleSubmitForm(action: PayloadAction<form>): Generator {
	try {
		yield call(submitLogin, action.payload);
		yield put(LoginActions.reset())
		yield put(HeaderActions.setVisibleLogin(false))
		yield put(HelperActions.setSucsses('Вы успешно вошли!'))
	} catch (error) {
		if (typeof error === 'object' && error !== null && 'status' in error) {
			const err = error as { status: number };
			if (err.status === 404) {
				yield put(HelperActions.setErrorNetwork('Не сущуествует такой пользователь'));
			} else if (err.status === 401) {
				yield put(HelperActions.setErrorNetwork('Неверный пароль'));
			}
		}
		yield put(LoginActions.reset())
	}
}

export default function* watchLogin() {
	yield takeLatest(LoginActions.submit, handleSubmitForm);
}
