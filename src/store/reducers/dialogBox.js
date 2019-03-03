const initialState = {
    open: false,
    tabIndex: null,
};

const dialogBoxReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case 'DIALOG_BOX_CLOSE':
        return {
            ...state,
            open: false,
        };
        case 'DIALOG_BOX_OPEN':
        return {
            ...state,
            open: true,
        };
        case 'DIALOG_BOX_SET_TO_LOGIN':
        return {
            ...state,
            tabIndex: 0,
        };
        case 'DIALOG_BOX_SET_TO_SIGNUP':
        return {
            ...state,
            tabIndex: 1,
        };
        case 'DIALOG_BOX_SET_TO_FP':
        return {
            ...state,
            tabIndex: 2,
        };
        default:
            return state;
    }
}

export default dialogBoxReducer;