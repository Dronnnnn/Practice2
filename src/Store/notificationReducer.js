import {LOGOUT_SUCCESS} from "./usersReducer";

export const NOTIFICATION_STATUS = {
    SUCCESS: 'success',
    ERROR: 'error',
};

export const SHOW_NOTIFICATION= 'CLEAR_NOTIFICATIONS',
    CLEAR_NOTIFICATIONS = 'CLEAR_NOTIFICATIONS';

export const NOTIFICATION_MESSAGE = {
    GET_ACCOUNTS_ERROR: 'Accounts is not available now. Try again later.',
    GET_ROOMS_ERROR: 'Rooms is not available now. Try again later.',
    LOGIN_ERROR: 'Invalid username or password.',
};

const initialState = { status: '', message: '', isShow: false };

export default function notificationsReducer(state = initialState, { type, payload }) {
    switch (type) {
        case SHOW_NOTIFICATION:
            return payload;
        case CLEAR_NOTIFICATIONS:
        case LOGOUT_SUCCESS:
            return initialState;
        default:
            return state;
    }
}

export const showNotification = (status, message) => ({
    type: SHOW_NOTIFICATION,
    payload: { status, message, isShow: true },
});

export const clearNotifications = () => ({ type: CLEAR_NOTIFICATIONS });