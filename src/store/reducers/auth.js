const initialState = {
    isAuthenticated: false,
    userId: null,
    user: null,
};
const authReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case 'AUTHENTICATED':
            return {
                ...state,
                isAuthenticated: true,
                userId: action.userId,
            };
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        case 'LOGOUT':
            return {
                ...state,
                isAuthenticated: false,
                userId: null,
            };
        default:
            return state;
    }
}

export default authReducer;