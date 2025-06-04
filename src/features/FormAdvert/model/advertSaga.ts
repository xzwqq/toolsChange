import { PayloadAction } from "@reduxjs/toolkit";
import { createChatApi, getAverageRating, getEditContainer, postBuyTools, postRent } from "../../../shared/api/editAPI";
import { AdvertActions } from "./advertSlice";
import {call , put, takeLatest } from 'redux-saga/effects'
import { Pidorok } from "../../editContainer/type/editType";
import { HelperActions } from "../../../utils/helper/helperSlice";
import { StateBuy } from "../type/form.advert.type";
import { navigateTo } from "../../../utils/helper/navigationService";


function* getAdvert(action: PayloadAction<string>): Generator{
    try{
        const response: Pidorok = yield call(getEditContainer, action.payload)
        yield put(AdvertActions.setSuccses(response)) 
        yield call(getAverageSaga, response.owner.id)
    }catch(error){
        console.log(error)
    }
}
function* getAverageSaga(action: number | string): Generator{
    try{
        const response: number | string = yield call(getAverageRating, action)
        yield put(AdvertActions.setAverage(response))
    }catch(error){
        console.log(error)
    }
}

function* postBuy(action: PayloadAction<StateBuy> ): Generator{
    try{
        yield call(postBuyTools, action.payload)
        yield put(HelperActions.setSucsses('Вы успешно откликнулись!'))
    }catch(error){
        console.log(error)
    }
}
function* postRentTools(action: PayloadAction<StateBuy> ): Generator{
    try{
        yield call(postRent, action.payload)
        yield put(HelperActions.setSucsses('Вы успешно откликнулись!'))
    }catch(error){
        console.log(error)
    }
}
function* createChatsaga(action: PayloadAction<string> ): Generator{
    try{
        const response = yield call(createChatApi, action.payload)
        yield call(navigateTo, `/chat/${response}`)
    }catch(error){
        console.log(error)
    }
}


export default function* watchAdvert(){
    yield takeLatest(AdvertActions.submitAdvert, getAdvert)
    yield takeLatest(AdvertActions.postBuyTool, postBuy)
    yield takeLatest(AdvertActions.postRentTool, postRentTools)
    yield takeLatest(AdvertActions.createChatAction, createChatsaga)
}