import { PayloadAction } from "@reduxjs/toolkit";
import { getEditContainer } from "../../../shared/api/editAPI";
import { AdvertActions } from "./advertSlice";
import {call , put, takeLatest } from 'redux-saga/effects'
import { Pidorok } from "../../editContainer/type/editType";


function* getAdvert(action: PayloadAction<string>){
    try{
        const response: Pidorok = yield call(getEditContainer, action.payload)
        yield put(AdvertActions.setSuccses(response)) 
    }catch(error){
        console.log(error)
    }
}


export default function* watchAdvert(){
    yield takeLatest(AdvertActions.submitAdvert, getAdvert)
}