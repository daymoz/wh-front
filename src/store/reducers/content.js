

const initialState = {
    content: null,
};

const contentReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_CONTENT':
            return {
                ...state,
                content: action.content,
            };
        default:
            return state;
    }
}

export default contentReducer;