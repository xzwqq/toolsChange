import { call, put, takeLatest } from 'redux-saga/effects';
import { EditActions } from './editSlice.ts';
import { PayloadAction } from '@reduxjs/toolkit';
import {
	getEditContainer,
	putEditContainer
} from '../../../shared/api/editAPI.ts';
import { HelperActions } from '../../../utils/helper/helperSlice.ts';
import { PidorokFinish, PidorokSend } from '../type/editType.ts';
import { navigateTo } from '../../../utils/helper/navigationService.ts';

function makeCall(datas: PidorokSend){
	const data = new FormData();
		data.append('tool', new Blob([JSON.stringify(datas.tool)], {type: 'application/json'}));
		if(datas.files !== null){
			for (let i = 0; i < datas.files.length; i++) {
				data.append('files', datas.files[i]);
			}
		}
		if(datas.deleteFile !== null){
			data.append('filesToDelete', new Blob([JSON.stringify(datas.deleteFile)], {type: 'application/json'}));
		}
		return data
}

function* sendEditContainer(action: PayloadAction<PidorokSend>): Generator {
	const datas = action.payload
	const id = action.payload.id;
	const data: FormData | PidorokFinish = makeCall(datas)
	try {
		yield call(putEditContainer, data, id);
		yield put(HelperActions.setSucsses('Вы успешно изменили обьявление!'));
		yield call(navigateTo, "/my")
	} catch (error) {
		console.log(error)
	}
}

function* getEdit(action: PayloadAction<string>): Generator {
	try {
		const response = yield call(getEditContainer, action.payload);
		yield put(EditActions.setSuccses(response));
	} catch (error) {
		console.log(error)
	}
}

export default function* watchEdit() {
	yield takeLatest(EditActions.submitMyContainer, sendEditContainer);
	yield takeLatest(EditActions.submitGetContainer, getEdit);
}
