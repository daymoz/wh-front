import * as actionTypes from './actionTypes';

export const toastIt = (type, message) => {
    return {
        type: actionTypes.TOAST_IT,
        messageType: type,
        message: message,
    };
}

export const closeToast = () => {
    return {
        type: actionTypes.TOAST_CLOSE,
        open: false,
    };
}

export const openToast = () => {
    return {
        type: actionTypes.TOAST_OPEN,
        open: true,
    };
}