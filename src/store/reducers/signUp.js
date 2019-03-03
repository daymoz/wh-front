const initialState = {
    signed: false,
};

const signUpReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case 'SIGNUP_START':
            return {
                ...state,
            };
        case 'SIGNUP_SUCCESS':
            return {
                ...state,
                signed: true,
            };
        case 'SIGNUP_FAIL':
            return {
                ...state,
                signed: false,
            };
        default:
            return state;
    }
}

export default signUpReducer;