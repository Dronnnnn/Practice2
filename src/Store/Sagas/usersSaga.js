import { call, put, takeEvery, select } from 'redux-saga/effects';
import { getAccountsFirebase } from '../../firebase';
import {GET_USER, getUserReducer, LOGIN, logInSuccessReducer, LOGOUT, logOutSuccessReducer} from "../usersReducer";
import {getAccountsState} from "../selectors/usersSelectors";
import {NOTIFICATION_MESSAGE, NOTIFICATION_STATUS, showNotification} from "../notificationReducer";

function* getAccounts() {
        const accounts = yield call(getAccountsFirebase);
        yield put(getUserReducer(accounts));

}
function* userLogIn({ payload }) {
    const { username, pass, remember } = payload;
    const accounts = yield select(getAccountsState);
    const currentAccount = accounts[username];
    const isValid = !!(currentAccount && currentAccount.password === pass);
    if (isValid) {
        yield put(logInSuccessReducer({ username, image: currentAccount.image }));
        if (remember) {
            yield call([localStorage, 'setItem'], 'authData', JSON.stringify({ username, pass }));
        }
    } else {
        yield put(showNotification(NOTIFICATION_STATUS.ERROR, NOTIFICATION_MESSAGE.LOGIN_ERROR));
    }
}

function* userLogOut() {
    yield call([localStorage, 'removeItem'], 'authData');
    yield put(logOutSuccessReducer());
}
export default function* watchUsersSaga() {
    yield takeEvery(GET_USER, getAccounts);
    yield takeEvery(LOGIN, userLogIn);
    yield takeEvery(LOGOUT, userLogOut);
}