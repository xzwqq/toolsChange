import { call, put, takeLatest } from "redux-saga/effects"
import { getIDRating, getRating } from "../../../shared/api/ratingApi"
import { RatingActions } from "./ratingSlice"
import { ratingsucsses } from "../type/rating,type"
import { PayloadAction } from "@reduxjs/toolkit"


function* getMyRating(): Generator {
    try{
        const response: ratingsucsses = yield call(getRating) 
        yield put(RatingActions.setSuccses(response))
    }catch(error){
        console.log(error)
    }
} 
function* getAllRating(action: PayloadAction<string>): Generator {
    try{
        const response: ratingsucsses = yield call(getIDRating, action.payload) 
        yield put(RatingActions.setSuccses(response))
    }catch(error){
        console.log(error)
    }
} 


export default function* watchRating() {
    yield takeLatest(RatingActions.submitRating, getMyRating)
    yield takeLatest(RatingActions.submitRatingid, getAllRating)
}