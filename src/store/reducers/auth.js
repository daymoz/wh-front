import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    authenticated: false,
    token: null,
};
const reducer = ( state = initialState, action ) => {
    return state;
}

export default reducer;