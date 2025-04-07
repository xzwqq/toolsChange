import {all} from 'redux-saga/effects';
import {watchRegister} from '../../features/formRegister/index.ts';
import {watchLogin} from "../../features/formLogin/index.ts";
import {watchingToolsForm} from "../../features/formToolsSend/index.ts";
import { watchContainer } from '../../features/container/index.ts';
import { watchEdit } from '../../features/editContainer/index.ts';

export default function* rootSaga() {
    yield all([
        watchRegister(),
        watchLogin(),
        watchingToolsForm(),
        watchContainer(),
        watchEdit(),
    ]);
}