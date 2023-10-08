import { call, put, takeEvery } from 'redux-saga/effects';
import {GET_ROOM, getRoomReducer} from "../roomsReducer";
import {getRoomsFirebase} from "../../firebase";
import {NOTIFICATION_MESSAGE, NOTIFICATION_STATUS, showNotification} from "../notificationReducer";

function* getRooms() {
    try{
        const rooms = yield call(getRoomsFirebase);
        yield put(getRoomReducer(rooms));
    } catch (err){
        yield put(showNotification(NOTIFICATION_STATUS.ERROR, NOTIFICATION_MESSAGE.GET_ROOMS_ERROR));
    }


}

export default function* watchRoomsSaga() {
    yield takeEvery(GET_ROOM, getRooms);
}