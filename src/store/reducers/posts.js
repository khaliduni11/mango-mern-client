import { ADD_POST, GET_POSTS, GET_ERROR_POST, UPDATE_POST, DELETE_POST} from "../actionType";

const initialState = {
    posts: [],
    error: null
}


export default (state = initialState, action) => {
    switch(action.type){
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload,
                erorr: null
            }
        case GET_ERROR_POST:
            return {
                ...state,
                error: action.payload,
                posts: null,
            }
        case ADD_POST: 
            return {
                ...state,
                posts: [action.payload, ...state.posts],
                error: null
            }
        case UPDATE_POST:
            return {
                ...state,
                posts: state.posts.map(post => 
                    post._id === action.payload._id ?
                    (post = action.payload)
                    : post
                    ),
                    errror: null
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post._id !== action.payload),
                error: null
            }
        default: 
            return state
    }
}