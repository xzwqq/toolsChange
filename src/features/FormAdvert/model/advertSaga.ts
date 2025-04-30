import { PayloadAction } from "@reduxjs/toolkit";
import { getEditContainer } from "../../../shared/api/editAPI";
import { AdvertActions } from "./advertSlice";
import {put, takeLatest } from 'redux-saga/effects'
import {call} from 'typed-redux-saga'


function* getAdvert(action: PayloadAction<string>){
    try{
        const response = yield* call(getEditContainer, action.payload)
        yield put(AdvertActions.setSuccses(response)) 
    }catch(error){
        console.log(error)
    }
}


export default function* watchAdvert(){
    yield takeLatest(AdvertActions.submitAdvert, getAdvert)
}