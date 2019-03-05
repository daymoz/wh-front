import { combineReducers } from 'redux';
import authReducer from './../reducers/auth';
import toastReducer from './toaster';
import dialogBoxReducer from './../reducers/dialogBox';
import signUpReducer from './../reducers/signUp';
import contentReducer from './../reducers/content';

export default combineReducers({
   auth: authReducer,
   toast: toastReducer,
   dialogBox: dialogBoxReducer,
   signUp: signUpReducer,
   content: contentReducer,
});