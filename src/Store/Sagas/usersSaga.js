import { call, put, takeEvery } from 'redux-saga/effects';
import { getAccountsFirebase } from '../../firebase';
import {GET_USER, getUserReducer} from "../uesrsReducer";

function* getAccounts() {
        const accounts = yield call(getAccountsFirebase);
        yield put(getUserReducer(accounts));

}

export default function* watchUsersSaga() {
    yield takeEvery(GET_USER, getAccounts);
}