import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

import * as actions from './store/actions/index';
import rootReducer from './store/reducers/index';
import Cookies from 'js-cookie';
import * as jwtDecode from 'jwt-decode';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const initialState = {};


const store = createStore(rootReducer, initialState, compose(applyMiddleware(thunk)));

const jwt = Cookies.get('token');
if(jwt) {
    store.dispatch(actions.authenticated(jwtDecode(jwt)));
    store.dispatch(actions.getUser(jwt));
}

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#00c8d8',
        },
        secondary: {
            main: '#98dadd',
        }
    },
    typography: {
        fontFamily: [
            '"Open Sans"',
        ].join(','),
    }
});

ReactDOM.render(
        <Provider store={store}>
            <MuiThemeProvider theme={theme}>
                <App />
            </MuiThemeProvider>
        </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
