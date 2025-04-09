import { call, put, takeLatest } from 'redux-saga/effects';
import { EditActions } from './editSlice.ts';
import { PayloadAction } from '@reduxjs/toolkit';
import {
	getEditContainer,
	putEditContainer
} from '../../../shared/api/editAPI.ts';
import { HelperActions } from '../../../utils/helper/helperSlice.ts';
import { PidorokSend } from '../type/editType.ts';
import { history } from '../../../app/providers/history.ts';

function* sendEditContainer(action: PayloadAction<PidorokSend>): Generator {
	console.log(action.payload);
	try {
		const data = new FormData();
		const id = action.payload.id;
		data.append('tool', new Blob([JSON.stringify(action.payload.tool)], {type: 'application/json'}));
		if(action.payload.files !== null){
			for (let i = 0; i < action.payload.files.length; i++) {
				data.append('files', action.payload.files[i]);
			}
		}
		if(action.payload.deleteFile !== null){
			data.append('filesToDelete', new Blob([JSON.stringify(action.payload.deleteFile)], {type: 'application/json'}));
		}
		const response = yield call(putEditContainer, data, id);
		yield put(EditActions.setSuccses(response));
		yield call([history, history.push], '/my')
		yield put(HelperActions.setSucsses('Вы успешно изменили обьявление!'));
	} catch (error) {
		yield put(EditActions.setError(error));
	}
}

function* getEdit(action: PayloadAction<string>): Generator {
	try {
		const response = yield call(getEditContainer, action.payload);
		yield put(EditActions.setSuccses(response));
	} catch (error) {
		yield put(EditActions.setError(error));
	}
}

export default function* watchEdit() {
	yield takeLatest(EditActions.submitMyContainer, sendEditContainer);
	yield takeLatest(EditActions.submitGetContainer, getEdit);
}
