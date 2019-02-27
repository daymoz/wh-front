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