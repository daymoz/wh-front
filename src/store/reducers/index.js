import { combineReducers } from 'redux';
import authReducer from './../reducers/auth';
import toastReducer from './../reducers/toast';
import dialogBoxReducer from './../reducers/dialogBox';

export default combineReducers({
   auth: authReducer,
   toast: toastReducer,
   dialogBox: dialogBoxReducer,
});