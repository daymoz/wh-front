import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    authenticated: false,
    user: {},
};
const authReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case 'AUTH_SUCCESS':
            return {
                ...state,
                isAuthenticated: true,
                user: action.authData,
            };
        case 'AUTHENTICATED':
        console.log(action);
        return {
            ...state,
            isAuthenticated: true,
            user: action.userId,
        }
        default:
            return state;
    }
}

export default authReducer;