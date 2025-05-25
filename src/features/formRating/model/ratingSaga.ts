import { call, put, takeLatest } from "redux-saga/effects"
import { getRating } from "../../../shared/api/ratingApi"
import { RatingActions } from "./ratingSlice"
import { ratingsucsses } from "../type/rating,type"


function* getAllRating(): Generator {
    try{
        const response: ratingsucsses = yield call(getRating) 
        yield put(RatingActions.setSuccses(response))
    }catch(error){
        console.log(error)
    }
} 


export default function* watchRating() {
    yield takeLatest(RatingActions.submitRating, getAllRating)
}