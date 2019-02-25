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

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const initialState = {};

const store = createStore(rootReducer, initialState, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()));

const jwt = localStorage.getItem('token');

if(jwt) {
    store.dispatch(actions.authenticated());
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
