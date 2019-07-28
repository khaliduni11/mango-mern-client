import {combineReducers} from "redux";
import auth from "./auth";
import posts from "./posts";

const rootReducer = combineReducers({
    authentication: auth,
    posts: posts
})

export default rootReducer;