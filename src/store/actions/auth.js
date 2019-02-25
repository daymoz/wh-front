import * as actionTypes from './actionTypes';
import * as config from './../../config';
import axios from 'axios';
import Cookies from 'js-cookie';
import * as jwtDecode from 'jwt-decode';

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

export const authenticated = (jwt) => {
    return {
        type: actionTypes.AUTHENTICATED,
        userId: jwt.id
    }
}

export const auth = (username, password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post(config.backEndDomain+'/auth/local', {
            identifier: username,
            password: password
        }).then(res => {
            console.log(res.data);
            Cookies.set('token', res.data.jwt);
            Cookies.set('user', res.data.user);
            dispatch(authSuccess(res.data));
            dispatch(authenticated(jwtDecode(res.data.jwt)));
        }).catch(err => {
            console.log(err.response.data);
            dispatch(authFail(err.response.data));
        })
    };
}