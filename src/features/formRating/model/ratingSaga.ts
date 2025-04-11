import { PayloadAction } from "@reduxjs/toolkit"
import { call, put, takeLatest } from "redux-saga/effects"
import { getRating } from "../../../shared/api/ratingApi"
import { RatingActions } from "./ratingSlice"
import { HelperActions } from "../../../utils/helper/helperSlice"


function* getAllRating(action: PayloadAction<string | number>) {
    try{
        const response = yield call(getRating, action.payload) 
        yield put(RatingActions.setSuccses(response))
        yield put(HelperActions.setIsloadingSucsses())
    }catch(error){
        console.log(error)
    }
} 


export default function* watchRating() {
    yield takeLatest(RatingActions.submitRating, getAllRating)
}