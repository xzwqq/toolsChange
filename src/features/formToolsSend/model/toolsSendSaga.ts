/* eslint-disable @typescript-eslint/no-explicit-any */
import { call, put, takeLatest, select } from 'redux-saga/effects';
import { ToolsSendActions } from './toolsSendSlice';
import { HelperActions } from '../../../utils/helper/helperSlice';
import {
	getToolsCategories,
	getToolsManufacturers,
	sendTools
} from '../../../shared/api/toolsSendAPI';
import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store/store';
import { Tool } from '../type/toolsend.type';
import { history } from '../../../app/providers/history';

function* toolsSendSaga(action: PayloadAction<{ tool: Tool }>): Generator {
	try {
		const files: File[] = yield select((state: RootState) => state.toolsSend.files);
		const data = new FormData();
    	data.append('tool',new Blob([JSON.stringify(action.payload.tool)], {type: 'application/json'}));
		for (let i = 0; i < files.length; i++) {
			data.append('files', files[i]);
		}

		const response: any = yield call(sendTools, data);
		yield put(ToolsSendActions.setSuccess(response));
    	yield call([history, history.push], '/my')
		yield put(HelperActions.setSucsses('Вы успешно выложили обьявление!'))
	} catch (error) {
		console.log(error)
	}
}

function* toolsSelectC(): Generator {
	try {
		const selectC: any = yield call(getToolsCategories);
		yield put(ToolsSendActions.setSelectC(selectC));
	} catch (error) {
		console.log(error)
	}
}

function* toolsSelectM(): Generator {
	try {
		const selectM: any = yield call(getToolsManufacturers);
		yield put(ToolsSendActions.setSelectM(selectM));
	} catch (error) {
		console.log(error)
	}
}

export default function* watchingToolsForm() {
	yield takeLatest(ToolsSendActions.submitSelectC, toolsSelectC);
	yield takeLatest(ToolsSendActions.submitSelectM, toolsSelectM);
	yield takeLatest(ToolsSendActions.submit, toolsSendSaga);
}
