import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { getChatApi, getQueueApi, postChatApi } from "../../../shared/api/chatApi";
import { ChatAction } from "./chatslice";
import { chatikmessage } from "../type/chat.type";


function* getQueueSaga (): Generator {
  try{
    const response = yield call(getQueueApi)
    yield put(ChatAction.setSuccsesQueue(response))
  }catch(error){
    console.log(error)
  }
}
function* getChatSaga (action: PayloadAction<string>): Generator {
  try{
    const response = yield call(getChatApi, action.payload)
    yield put(ChatAction.setSuccsesChat(response.messages))
    yield put(ChatAction.setNameChat(response.user))
  }catch(error){
    console.log(error)
  }
}
function* postChatSaga (action: PayloadAction<chatikmessage>): Generator {
  yield put(ChatAction.setIsbuttonLoading(true))
  try{
    const response = yield call(postChatApi, action.payload)
    yield put(ChatAction.setSuccsesChat(response))
    yield put(ChatAction.setIsbuttonLoading(false))
  }catch(error){
    console.log(error)
  }
}

export default function* watchChat() {
  yield takeLatest(ChatAction.getQueueSlice, getQueueSaga)
  yield takeLatest(ChatAction.getChatSlice, getChatSaga)
  yield takeLatest(ChatAction.postChatSlice, postChatSaga)
}