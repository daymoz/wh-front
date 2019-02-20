import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, composer, combineReducers } from 'redux';

import reducer from './store/reducers/auth';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const store = createStore(reducer, applyMiddleware(thunk));

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
