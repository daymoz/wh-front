import * as actionTypes from './actionTypes';

export const dialogBoxClose = () => {
    return {
        type: actionTypes.DIALOG_BOX_CLOSE,
    }
};

export const dialogBoxOpen = () => {
    return {
        type: actionTypes.DIALOG_BOX_OPEN,
    }
};

export const dialogBoxSetToLogin = () => {
    return {
        type: actionTypes.DIALOG_BOX_SET_TO_LOGIN,
    }
};

export const dialogBoxSetToSignUp = () => {
    return {
        type: actionTypes.DIALOG_BOX_SET_TO_SIGNUP,
    }
};

export const dialogBoxSetToFP = () => {
    return {
        type: actionTypes.DIALOG_BOX_SET_TO_FP,
    }
};

export const dialogBoxSetIndex = (index) => {
    return {
        type: actionTypes.DIALOG_BOX_SET_INDEX,
        index: index,
    }
}