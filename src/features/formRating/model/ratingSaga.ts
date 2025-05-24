
import { call, put, takeLatest } from "redux-saga/effects"
import { getRating } from "../../../shared/api/ratingApi"
import { RatingActions } from "./ratingSlice"


function* getAllRating(): Generator {
    try{
        yield call(getRating) 
        yield put(RatingActions.setSuccses(''))
    }catch(error){
        console.log(error)
    }
} 


export default function* watchRating() {
    yield takeLatest(RatingActions.submitRating, getAllRating)
}