const defaultState = {
    users: {},
    authUser: {
        isAuthorized: false,
        username: '',
    },
};

export const GET_USER = 'GET_USER',
    GET_USER_SUCCESS = 'GET_USER_SUCCESS',
    LOGIN = 'LOGIN',
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    LOGOUT = 'LOGOUT',
    LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';



export const usersReducer = (state = defaultState, action) => {

    switch (action.type) {
        case GET_USER:
            return { ...state, users: [...state.users, ...action.payload] }
        case LOGIN_SUCCESS:
            return {
                ...state,
                authUser: { ...state.authUser, isAuthorized: true, ...action.payload },
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                authUser: { isAuthorized: false, username: '' },
            };
        // case ADD_USER:
        //     return { ...state, users: [...state.users, action.payload] }
        // case UPDATE_USER:
        //     return {
        //         ...state, users: state.users.map(
        //             user => user.id === action.payload.id ?
        //                 user= action.payload
        //                 : user
        //         )
        //     }
        // case DELETE_USER:
        //     return { ...state, users: state.users.filter(user => user.id !== action.payload) }
        default:
            return state
    }

}

export const getUserReducer = (payload) => ({ type: GET_USER, payload })
export const getAccountsSuccessReducer = (payload) => ({ type: GET_USER_SUCCESS, payload: payload });
export const logInReducer = (payload) => ({ type: LOGIN, payload: payload });
export const logInSuccessReducer = (payload) => ({ type: LOGIN_SUCCESS, payload: payload });
export const logOutReducer = () => ({ type: LOGOUT });
export const logOutSuccessReducer = () => ({ type: LOGOUT_SUCCESS });