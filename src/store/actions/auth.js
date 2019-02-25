import * as actionTypes from './actionTypes';
import * as config from './../../config';
import axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
};

export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    }
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
};

export const authenticated = () => {
    return {
        type: actionTypes.AUTHENTICATED,
    }
}

export const auth = (username, password) => {
    return dispatch => {
        console.log(username+' '+password);
        dispatch(authStart());
        axios.post(config.backEndDomain+'/auth/local', {
            identifier: username,
            password: password
        }).then(res => {
            console.log(res.data);
            localStorage.setItem('token', res.data.jwt);
            localStorage.setItem('user', res.data.user);
            dispatch(authSuccess(res.data));
            dispatch(authenticated());
        }).catch(err => {
            console.log(err.response.data);
            dispatch(authFail(err.response.data));
        })
    };
}