

export const GET_ROOM = 'GET_ROOM',
    UPDATE_ROOM = 'UPDATE_ROOM',
    DELETE_ROOM = 'DELETE_ROOM',
    ADD_ROOM = 'ADD_ROOM';

const defaultState = {
    rooms: []
};



export const roomsReducer = (state = defaultState, action) => {

    switch (action.type) {
        case GET_ROOM:
            return  {...state, rooms: [...state.rooms, ...action.payload]}
        case ADD_ROOM:
            return  {...state, rooms: [...state.rooms, action.payload]}
        case UPDATE_ROOM:
            return  {...state, rooms: state.rooms.map(
                    room => room.id === action.payload.id ?{
                            title : action.payload.title,
                            body : action.payload.body,
                        }
                        : room
                )}
        case DELETE_ROOM:
            return  {...state, rooms: state.rooms.filter(room => room.id !== action.payload)}
        default:
            return state
    }

}

export const getRoomReducer = (payload) => ({type: GET_ROOM, payload})
export const addRoomReducer = (payload) => ({type: ADD_ROOM, payload})
export const updateRoomReducer = (payload) => ({type: UPDATE_ROOM, payload})
export const deleteRoomReducer = (payload) => ({type: DELETE_ROOM, payload})