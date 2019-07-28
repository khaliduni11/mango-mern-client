import axios from "axios";
import {GET_POSTS, UPDATE_POST, DELETE_POST, ADD_POST, GET_ERROR_POST} from "../actionType";

export const getPosts = () => (dispatch, getState) => {
    const {authentication} = getState();
    const userId = authentication.user.id;
    return axios.get(`/mango/post/${userId}`)
    .then(res => {
        dispatch({
            type: GET_POSTS,
            payload: res.data.foundPost
        })
    })
    .catch(err => {
        dispatch({
            type: GET_ERROR_POST,
            payload: err.response
        })
    })
}

export const addPost = inputData => (dispatch, getState) => {
    const {authentication} = getState();
    const userId = authentication.user.id;
    return axios.post(`/mango/post/${userId}/post`, inputData)
    .then(res => {
        dispatch({
            type: ADD_POST,
            payload: res.data.foundPost
        })
    })
    .catch(err => {
        dispatch({
            type: GET_ERROR_POST,
            payload: err.response
        })
    })
}

export const updatePost = (inputData, post_id) => (dispatch, getState) => {
    const {authentication} = getState();
    const userId = authentication.user.id;
    return axios.put(`/mango/post/${userId}/${post_id}`, inputData)
    .then(res => {
        dispatch({
            type: UPDATE_POST,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch({
            type: GET_ERROR_POST,
            payload: err.response
        })
    })
}


export const deletePost = post_id => (dispatch, getState) => {
    const {authentication} = getState();
    const userId = authentication.user.id;
    return axios.delete(`/mango/post/${userId}/${post_id}`)
    .then(res => {
        dispatch({
            type: DELETE_POST
        })
    })
    .catch(err => {
        dispatch({
            type: GET_ERROR_POST,
            payload: err.response
        })
    })
}