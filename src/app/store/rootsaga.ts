import {all} from 'redux-saga/effects';
import {watchRegister} from '../../features/formRegister/index.ts';
import {watchLogin} from "../../features/formLogin/index.ts";
import {watchingToolsForm} from "../../features/formToolsSend/index.ts";
import { watchContainer } from '../../features/container/index.ts';
import { watchEdit } from '../../features/editContainer/index.ts';
import {watchHeader} from '../../widgets/Header/index.ts';
import { watchRating } from '../../features/formRating/index.ts';
import { watchAdvert } from '../../features/FormAdvert/index.ts';
import { wathNotif } from '../../features/notificationForm/index.ts';
import { watchChat } from '../../features/formChat/index.ts';

export default function* rootSaga() {
    yield all([
        watchHeader(),
        watchRegister(),
        watchLogin(),
        watchingToolsForm(),
        watchContainer(),
        watchEdit(),
        watchRating(),
        watchAdvert(),
        wathNotif(),
        watchChat(),
    ]);
}