import { call, put, takeLatest } from 'redux-saga/effects';
import { ToolsSendActions } from './toolsSendSlice.js';
import { HelperActions } from '../../../utils/helper/helperSlice.ts';
import { getToolsCategories, getToolsManufacturers, sendTools } from '../../../shared/api/toolsSendAPI.ts';

function* toolsSendSaga(action): Generator {
	try {
		const data = new FormData();
		data.append('tool',new Blob([JSON.stringify(action.payload.tool)], {type: 'application/json'}));		
		for (let i = 0; i < action.payload.files.length; i++) {
			data.append('files', action.payload.files[i]);
		}
		const response = yield call(sendTools, data);
		yield put(ToolsSendActions.setSuccess(response));
	} catch (error) {
		yield put(ToolsSendActions.setError(error));
	}
}

function* toolsSelectC(): Generator {
	try {
		const selectC = yield call(getToolsCategories);
		yield put(ToolsSendActions.setSelectC(selectC));
		yield put(HelperActions.setIsloadingSucsses())
	} catch (error) {
		yield put(ToolsSendActions.setError(error));
	}
}

function* toolsSelectM(): Generator {
	try {
		const selectM = yield call(getToolsManufacturers);
		yield put(ToolsSendActions.setSelectM(selectM));
		yield put(HelperActions.setIsloadingSucsses())
	} catch (error) {
		yield put(ToolsSendActions.setError(error));
	}
}


export default function* watchingToolsForm() {
	yield takeLatest(ToolsSendActions.submitSelectC, toolsSelectC);
	yield takeLatest(ToolsSendActions.submitSelectM, toolsSelectM);
	yield takeLatest(ToolsSendActions.submit, toolsSendSaga);
	
}
