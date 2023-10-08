import {applyMiddleware, legacy_createStore, combineReducers} from 'redux';

//import rootReducer from 'path-to-your-rootReducer';

import middleware from './middleware';
import {usersReducer} from "./usersReducer";
import {roomsReducer} from "./roomsReducer";
import {composeWithDevTools} from "@redux-devtools/extension";
import rootSaga from "./Sagas";

const rootReducer = combineReducers({
    rooms: roomsReducer,
    users: usersReducer,
})
export const store = legacy_createStore(rootReducer, composeWithDevTools(applyMiddleware(middleware)),);

middleware.run(rootSaga);