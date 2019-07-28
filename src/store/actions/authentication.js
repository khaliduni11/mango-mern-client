import {CURRENT_USER, GET_AUTHENTICATION_ERROR, CHANGE_PASSWORD, FORGET_PASSWORD} from "../actionType"
import {setAuthToken} from "../../token/setAuthToken"
import axios from "axios";
import jwtDecode from "jwt-decode";

export const setCurrentUser = decoded => {
    return {
        type: CURRENT_USER,
        payload: decoded
    }
}

export const logOut = () => dispatch => {
    localStorage.removeItem("jwtToken")
    setAuthToken(false);
    dispatch(setCurrentUser({}))
}

export const signin = userData => dispatch => {
    return axios.post("/mango/user/auth/signin", userData)
    .then(res => {
        const {token}  = res.data;
        localStorage.setItem("jwtToken", token);
        setAuthToken(token);
        const decoded = jwtDecode(token);
        dispatch(setCurrentUser(decoded));
    })
    .catch(err => {
        dispatch({
            type: GET_AUTHENTICATION_ERROR,
            payload: err.response
        })
    })
}

export const signup = userData => dispatch => {
    return axios.post("/mango/user/auth/signup", userData)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        dispatch({
            type: GET_AUTHENTICATION_ERROR,
            payload: err.response
        })
    })
}


export const verify = (userId, randomNumber) => dispatch => {
    return axios.put(`/mango/user/auth/${userId}/${randomNumber}/verify`)
    .then(res => {
        const {token}  = res.data;
        localStorage.setItem("jwtToken", token);
        setAuthToken(token);
        const decoded = jwtDecode(token);
        dispatch(setCurrentUser(decoded));
    })
    .catch(err => {
        dispatch({
            type: GET_AUTHENTICATION_ERROR,
            payload: err.response
        })
    })
}

export const resend = email => dispatch => {
    return axios.post(`/mango/user/auth/resend`, email)
    .then(res => {})
    .catch(err => {
        dispatch({
            type: GET_AUTHENTICATION_ERROR,
            payload: err.response
        })
    })
}

export const changePassword = passwords => (dispatch, getState) => {
    const {authentication} = getState();
    const userId = authentication.user.id
    return axios.put(`/user/auth/${userId}/change_password`, passwords)
    .then(res => {
        dispatch({
            type: CHANGE_PASSWORD,
            payload: res.data.message
        })
    })
    .catch(err => {
        dispatch({
            type: GET_AUTHENTICATION_ERROR,
            payload: err.response
        })
    })
}

export const forgetPassword = email => dispatch => {
    return axios.put("/mango/user/auth//forget_password", email)
    .then(res => {
        dispatch({
            type: FORGET_PASSWORD,
            payload: res
        })
    })
    .catch(err => {
        dispatch({
            type: GET_AUTHENTICATION_ERROR,
            payload: err.response
        })
    })
}

export const changeForgotPassword = (password, userId, randomNumber) => dispatch =>  {
    return axios.put(`/mango/user/auth/forgot_password/${userId}/${randomNumber}`, password)
    .then(res => {
        const {token}  = res.data;
        localStorage.setItem("jwtToken", token);
        setAuthToken(token);
        const decoded = jwtDecode(token);
        dispatch(setCurrentUser(decoded));

    })
    .catch(err => {
        dispatch({
            type: GET_AUTHENTICATION_ERROR,
            payload: err.response
        })
    })
}