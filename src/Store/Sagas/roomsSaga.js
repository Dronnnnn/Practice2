import { call, put, takeEvery } from 'redux-saga/effects';
import {GET_ROOM, getRoomReducer} from "../roomsReducer";
import {getRoomsFirebase} from "../../firebase";

function* getRooms() {

        const rooms = yield call(getRoomsFirebase);
        yield put(getRoomReducer(rooms));

}

export default function* watchRoomsSaga() {
    yield takeEvery(GET_ROOM, getRooms);
}