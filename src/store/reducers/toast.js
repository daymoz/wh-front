

const initialState = {
    message: null,
};

const toastReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'AUTH_SUCCESS':
            return {
                ...state,
                message: 'Connecté avec succès ! Bienvenue sur Waven HUB',
            }
        default:
            return state;
    }
}

export default toastReducer;