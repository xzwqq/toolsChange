import { PayloadAction } from "@reduxjs/toolkit";
import { getEditContainer, postBuyTools, postRent } from "../../../shared/api/editAPI";
import { AdvertActions } from "./advertSlice";
import {call , put, takeLatest } from 'redux-saga/effects'
import { Pidorok } from "../../editContainer/type/editType";
import { HelperActions } from "../../../utils/helper/helperSlice";
import { StateBuy } from "../type/form.advert.type";


function* getAdvert(action: PayloadAction<string>): Generator{
    try{
        const response: Pidorok = yield call(getEditContainer, action.payload)
        yield put(AdvertActions.setSuccses(response)) 
    }catch(error){
        console.log(error)
    }
}
function* postBuy(action: PayloadAction<StateBuy> ): Generator{
    try{
        yield call(postBuyTools, action.payload)
        HelperActions.setSucsses('Вы успешно откликнулись!')
    }catch(error){
        console.log(error)
    }
}
function* postRentTools(action: PayloadAction<StateBuy> ): Generator{
    try{
        yield call(postRent, action.payload)
        HelperActions.setSucsses('Вы успешно откликнулись!')
    }catch(error){
        console.log(error)
    }
}


export default function* watchAdvert(){
    yield takeLatest(AdvertActions.submitAdvert, getAdvert)
    yield takeLatest(AdvertActions.postBuyTool, postBuy)
    yield takeLatest(AdvertActions.postRentTool, postRentTools)
}