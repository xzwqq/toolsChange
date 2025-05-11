import { PayloadAction } from "@reduxjs/toolkit";
import {call, put, takeLatest} from 'redux-saga/effects'
import { ContainerActions } from "../../../features/container/model/containerSlice";
import { HeaderActions } from "./headerSlice";
import { getContFilter } from "../../../shared/api/headerApi";
import { Pidorok } from "../../../features/editContainer/type/editType";

function filterPost (data: Object) {
    let dataPost = ""
    Object.entries(data).filter(([_, value]) => value !== '') .map(( filter ) => {
        filter.map((item, index ) => {
            if(index === 0){
                dataPost +=  `${item}=`
            }else{
                dataPost +=  `${item}&`
            }
            console.log(item)
        })
    })
    return dataPost.slice(0, -1)
}


function* getContainerByFilter(action: PayloadAction<Object>) {
    const data = action.payload
    const dataPost = filterPost(data)    
    try{
        const response:Pidorok = yield call(getContFilter, dataPost)
        yield put(ContainerActions.setSuccses(response))
    }catch(error){
        console.log(error)
    }
}

export default function* watchHeader(){
    yield takeLatest(HeaderActions.submitFilter, getContainerByFilter)
}