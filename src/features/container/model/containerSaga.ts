import { call, put, takeLatest } from 'redux-saga/effects';
import { ContainerActions } from './containerSlice.ts';
import {
	AllContainer,
	myContainer,
	deleteContainer
} from '../../../shared/api/containerAPI.ts';
import { HelperActions } from '../../../utils/helper/helperSlice.ts';
import { PayloadAction } from '@reduxjs/toolkit';

function* getMyContainer(): Generator {
	try {
		const response = yield call(myContainer);
		yield put(ContainerActions.setSuccses(response));
	} catch (error) {
		console.log(error);
	}
}
function* getAllContainer(): Generator {
	try {
		const response = yield call(AllContainer);
		yield put(ContainerActions.setSuccses(response));
	} catch (error) {
		console.log(error);
	}
}

function* deleteMyContainer(action: PayloadAction<{ id: number }>): Generator {
	console.log(action.payload);
	try {
		yield call(deleteContainer, action.payload.id);
		yield put(HelperActions.setSucsses('Вы успешно удалили обьявление!'));
	} catch (err) {
		console.log(err);
		yield put(
			HelperActions.setErrorNetwork('Не получилось удалить обьявленине')
		);
	}
}

export default function* watchContainer() {
	yield takeLatest(ContainerActions.submitMyContainer, getMyContainer);
	yield takeLatest(ContainerActions.submitAllContainer, getAllContainer);
	yield takeLatest(ContainerActions.submitDeleteMyContainer, deleteMyContainer);
}
