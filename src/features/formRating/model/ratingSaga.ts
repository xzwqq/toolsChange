import { PayloadAction } from "@reduxjs/toolkit"
import { call, put, takeLatest } from "redux-saga/effects"
import { getRating } from "../../../shared/api/ratingApi"
import { RatingActions } from "./ratingSlice"


function* getAllRating(action: PayloadAction<string>): Generator {
    try{
        yield call(getRating, action.payload) 
        yield put(RatingActions.setSuccses(''))
    }catch(error){
        console.log(error)
    }
} 


export default function* watchRating() {
    yield takeLatest(RatingActions.submitRating, getAllRating)
}