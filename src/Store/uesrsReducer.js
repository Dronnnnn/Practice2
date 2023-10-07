export const GET_USER = 'GET_USER',
    ADD_USER = 'ADD_USER',
    UPDATE_USER = 'UPDATE_USER',
    DELETE_USER = 'DELETE_USER';

const defaultState = {
    users: []
};



export const usersReducer = (state = defaultState, action) => {

    switch (action.type) {
        case GET_USER:
            return { ...state, users: [...state.users, ...action.payload] }
        case ADD_USER:
            return { ...state, users: [...state.users, action.payload] }
        case UPDATE_USER:
            return {
                ...state, users: state.users.map(
                    user => user.id === action.payload.id ?
                        user= action.payload
                        : user
                )
            }
        case DELETE_USER:
            return { ...state, users: state.users.filter(user => user.id !== action.payload) }
        default:
            return state
    }

}

export const getUserReducer = (payload) => ({ type: GET_USER, payload })
export const addUserReducer = (payload) => ({ type: ADD_USER, payload })
export const updateUserReducer = (payload) => ({ type: UPDATE_USER, payload })
export const deleteUserReducer = (payload) => ({ type: DELETE_USER, payload })