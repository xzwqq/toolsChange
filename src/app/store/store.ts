import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import rootSaga from './rootsaga.ts';
import helperSlice from '../../utils/helper/helperSlice.ts'
import {registerSlice} from '../../features/formRegister/index.ts';
import {loginSlice} from "../../features/formLogin/index.ts";
import {toolsSendSlice} from "../../features/formToolsSend/index.ts";
import { containerSlice } from '../../features/container/index.ts';
import { editSlice } from '../../features/editContainer/index.ts';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        helper : helperSlice,
        register: registerSlice,
        login: loginSlice,
        toolsSend: toolsSendSlice,
        container: containerSlice,
        edit: editSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

//здесь был зек виталя

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;