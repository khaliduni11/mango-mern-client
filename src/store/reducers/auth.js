import { CURRENT_USER, CHANGE_PASSWORD, GET_AUTHENTICATION_ERROR, FORGET_PASSWORD } from "../actionType";


const initialState = {
    isAuthenticated: false,
    user: {},
    message: null,
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !!Object.keys(action.payload).length,
                user: action.payload,
                error: null
            }
        case CHANGE_PASSWORD:
            return {
                ...state,
                message: action.payload,
                error: null
            }
        case GET_AUTHENTICATION_ERROR: 
            return {
                ...state,
                error: action.payload,
                message: null
            }
        case FORGET_PASSWORD:
            return {
                ...state,
                message: action.payload,
                error: null
            }
        default:
            return state;
    }
}