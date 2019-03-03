

const initialState = {
    messageType: null,
    message: null,
    open: false,
};

const toastReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'TOAST_IT':
            return {
                ...state,
                messageType: action.messageType,
                message: action.message,
                open: true,
            };
        case 'TOAST_CLOSE':
            return {
                ...state,
                open: false,
            };
        case 'TOAST_OPEN':
            return {
                ...state,
                open: true,
            };
        default:
            return state;
    }
}

export default toastReducer;