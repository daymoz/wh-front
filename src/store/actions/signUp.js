import * as actionTypes from './actionTypes';
import * as dialogBoxActions from './dialogBox';
import * as toasterActions from './toaster';
import * as config from './../../config';
import axios from 'axios';

export const signUpStart = () => {
    return {
        type: actionTypes.SIGNUP_START,
    };
}

export const signUpFail = (error) => {
    return {
        type: actionTypes.SIGNUP_FAIL,
    };
}

export const signUpSuccess = () => {
    return {
        type: actionTypes.SIGNUP_SUCCESS,
    };
}

export const signUp = (username, email, password) => {
    return dispatch => {
        dispatch(signUpStart());
        axios
        .post(config.backEndDomain+'/auth/local/register', {
            username: username,
            email: email,
            password: password,
        }).then(res => {
            dispatch(dialogBoxActions.dialogBoxSetToLogin());
            console.log(res.data);
        }).catch(err => {
            dispatch(toasterActions.toastIt('error', err.response.data.message));
            console.log(err.response.data);
        })
    };
}