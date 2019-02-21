import { combineReducers } from 'redux';
import authReducer from './../reducers/auth';
import toastReducer from './../reducers/toast';

export default combineReducers({
   auth: authReducer,
   toast: toastReducer
});