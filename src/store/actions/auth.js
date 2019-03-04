import * as actionTypes from './actionTypes';
import * as dialogBoxActions from './dialogBox';
import * as toasterActions from './toaster';
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
        userId: jwt.id,
    }
}

export const logout = () => {
    return {
        type: actionTypes.LOGOUT,
    }
}

export const setUser = (user) => {
    console.log(user);
    return {
        type: actionTypes.SET_USER,
        user: user[0],
    }
}

export const getUser = (jwt) => {
    return dispatch => {
        let userId = jwtDecode(jwt)._id;
        axios.get(config.backEndDomain+'/users', {
            params: {
                _id: userId,
            }
        }).then(res => {
            dispatch(setUser(res.data));
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        })
    };
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
            dispatch(authenticated(res.data.jwt));
            dispatch(getUser(res.data.jwt));
            dispatch(dialogBoxActions.dialogBoxClose());
            dispatch(toasterActions.toastIt('success', 'Vous êtes connecté ! Bienvenue '+res.data.user.username+' :)'));
        }).catch(err => {
            console.log(err.response.data);
            dispatch(authFail(err.response.data));
        })
    };
}