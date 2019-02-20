import React, { Component, Fragment } from 'react';
import TextField from '@material-ui/core/TextField';

import InputAdornment from '@material-ui/core/InputAdornment';

import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
class Login extends Component {

    state = {
        username: {
            value: '',
            minLength: 3,
        },
        password: {
            value: '',
            minLength: 8,
        },
    }

    handleChangeFormValue = (name) => (event) => {
        this.setState({
            [name]: {
                value: event.target.value,
                minLength: this.state[name].minLength,
            }
        });
    }

    render() {
        return (
            <Fragment>
                <TextField
                    id='login-form-username-input'
                    label='Ton e-mail ou pseudo'
                    className=''
                    type='text'
                    name='username'
                    margin="normal"
                    onChange={this.handleChangeFormValue('username')}
                    fullWidth  
                    value={this.state.username.value}
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    id='login-form-password-input'
                    label='Ton mot de passe'
                    className=''
                    type='password'
                    name='password'
                    margin="normal"
                    onChange={this.handleChangeFormValue('password')}
                    fullWidth  
                    value={this.state.password.value}
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                            <Lock />
                        </InputAdornment>
                        ),
                    }}
                />
            </Fragment>
        );
    }
  }
  
  export default Login;