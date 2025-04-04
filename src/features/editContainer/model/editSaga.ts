import { call, put, takeLatest } from "redux-saga/effects";
import { EditActions } from "./editSlice.ts";
import { PayloadAction } from "@reduxjs/toolkit";
import { getEditContainer, putEditContainer } from "../../../shared/api/editAPI.ts";
import { Pidorok } from "../type/editType.ts";


function* sendEditContainer(action: PayloadAction<Pidorok>): Generator {
    console.log(action.payload)
    try{
        const data = new FormData();
        const id = action.payload.id
		data.append('tool',new Blob([JSON.stringify(action.payload.tool)], {type: 'application/json'}));
        for (let i = 0; i < action.payload.files.length; i++) {
			data.append('files', action.payload.files[i]);
		}
        const response = yield call(putEditContainer, data, id)
        yield put(response)
    }catch(error){
        yield put(EditActions.setError(error))
    }
}

function* getEdit(action: PayloadAction<Pidorok>): Generator {
    try{
        const response = yield call( getEditContainer, action.payload)
        yield put(EditActions.setSuccses(response))
    }catch(error){
        yield put(EditActions.setError(error))
    }
}




export default function* watchEdit(){
    yield takeLatest(EditActions.submitMyContainer, sendEditContainer)
    yield takeLatest(EditActions.submitGetContainer, getEdit)
}