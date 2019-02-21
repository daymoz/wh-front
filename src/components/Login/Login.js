import React, { Component, Fragment } from 'react';
import TextField from '@material-ui/core/TextField';

import InputAdornment from '@material-ui/core/InputAdornment';

import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
class Login extends Component {

    handleChangeFormLoginValue = (e) => {
        const inputValues = {
            name: e.target.name,
            value: e.target.value
        };
        this.props.onChange(inputValues);
    }

    componentDidMount() {
        console.log(this.props.value.username);
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
                    onChange={this.handleChangeFormLoginValue}
                    fullWidth
                    value={this.props.value.username.value}
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
                    onChange={this.handleChangeFormLoginValue}
                    fullWidth  
                    value={this.props.value.password.value}
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