import { combineReducers } from "redux";
import posts from "./posts";
import auth from "./auth";
export default combineReducers({
    //Key and values are the same  so only keep one posts: posts
    posts,
    auth
})