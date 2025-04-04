import {all} from 'redux-saga/effects';
import {watchRegister} from '../../features/formRegister/index.js';
import {watchLogin} from "../../features/formLogin/index.js";
import {watchingToolsForm} from "../../features/formToolsSend/index.js";
import { watchContainer } from '../../features/container/index.js';
import { watchEdit } from '../../features/editContainer/index.js';

export default function* rootSaga() {
    yield all([
        watchRegister(),
        watchLogin(),
        watchingToolsForm(),
        watchContainer(),
        watchEdit(),
    ]);
}