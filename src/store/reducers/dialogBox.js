const initialState = {
    open: false,
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
        default:
            return state;
    }
}

export default dialogBoxReducer;