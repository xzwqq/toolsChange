import { PayloadAction } from "@reduxjs/toolkit";
import {call, put, takeLatest} from 'redux-saga/effects'
import { ContainerActions } from "../../../features/container/model/containerSlice";
import { HeaderActions } from "./headerSlice";
import { getContFilter } from "../../../shared/api/headerApi";
import { Pidorok } from "../../../features/editContainer/type/editType";


function* getContainerByFilter(action: PayloadAction<string>) {
    try{
        const response:Pidorok = yield call(getContFilter, action.payload)
        yield put(ContainerActions.setSuccses(response))
    }catch(error){
        console.log(error)
    }
}

export default function* watchHeader(){
    yield takeLatest(HeaderActions.submitFilter, getContainerByFilter)
}