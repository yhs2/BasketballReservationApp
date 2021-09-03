import * as api from "../api";
import { FETCH_ALL, CREATE, UPDATE,DELETE,LIKEPOST,FETCH_BY_SEARCH, START_LOADING, END_LOADING, FETCH_POST } from "../constants/actionType";
//action creators

export const getPosts = (page) => async (dispatch) => {

    try {
        dispatch({type: START_LOADING})
        const info = await api.fetchPosts(page);
        const data = info.data;
        console.log(data);
        dispatch({
            type: FETCH_ALL,
            payload: data
        });
        dispatch({type: END_LOADING})
        
    } catch (error) {
        console.log(error.message);
    }
    
}

export const getPost = (id) => async (dispatch) => {

    try {
        dispatch({type: START_LOADING})
        const info = await api.fetchPost(id);
        const data = info.data;
        console.log(data);
        dispatch({
            type: FETCH_POST,
            payload: data
        });
        dispatch({type: END_LOADING})
        
    } catch (error) {
        console.log(error.message);
    }
    
}

export const getPostsBySearch = (searchQuery) => async (dispatch) => {

    try {
        console.log(searchQuery);
        dispatch({type: START_LOADING})
        const { data: {data}}= await api.fetchPostsByItem(searchQuery);
        console.log(data);
        dispatch({
            type: FETCH_BY_SEARCH,
            payload: data
        });
        dispatch({type: END_LOADING})
    } catch (error) {
        console.log(error.message);
    }
    
}

export const createPost = (post) => async (dispatch) => {
    try {
        dispatch({type: START_LOADING})
        const { data } = await api.createPost(post);
        console.log(data);
        dispatch({ 
            type: CREATE, 
            payload: data
        });
        dispatch({type: END_LOADING})
    } catch (error) {
        console.log(error.message);
    }
}

export const updatePost = (id,post) => async (dispatch) => {
    try {
        const {data} = await api.updatePost(id,post);
        dispatch({ 
            type: UPDATE, 
            payload: data
        });
    } catch (error) {
        console.log(error.message);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({ 
            type: DELETE, 
            payload: id
        })
    } catch (error) {
        console.log(error.message);
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const info = await api.likePost(id);
        // console.log(info);
        const data = info.data;
        dispatch({ 
            type: LIKEPOST, 
            payload: data
        })
    } catch (error) {
        console.log(error.message);
    }
}
