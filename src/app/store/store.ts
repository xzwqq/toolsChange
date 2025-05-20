import rootSaga from './rootsaga.ts';
import createSagaMiddleware from 'redux-saga';
import helperSlice from '../../utils/helper/helperSlice.ts'
import { configureStore } from '@reduxjs/toolkit';
import { registerSlice } from '../../features/formRegister/index.ts';
import { loginSlice } from "../../features/formLogin/index.ts";
import { toolsSendSlice } from "../../features/formToolsSend/index.ts";
import { containerSlice } from '../../features/container/index.ts';
import { editSlice } from '../../features/editContainer/index.ts';
import { headerSlice } from '../../widgets/Header/index.ts';
import { ratingSlice } from '../../features/formRating/index.ts';
import { advertSlice } from '../../features/FormAdvert/index.ts';
import { notifSlice } from '../../features/notificationForm/index.ts';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        helper : helperSlice,
        header: headerSlice,
        register: registerSlice,
        login: loginSlice,
        toolsSend: toolsSendSlice,
        container: containerSlice,
        edit: editSlice,
        rating: ratingSlice, 
        advert: advertSlice,
        notif: notifSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ['toolsSend/submit'],
          ignoredPaths: ['payload.files']
        }
      }).concat(sagaMiddleware),
});

//здесь был зек виталя

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;