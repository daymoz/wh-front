import React, { Component, Fragment } from 'react';
import TextField from '@material-ui/core/TextField';

import InputAdornment from '@material-ui/core/InputAdornment';

import Face from '@material-ui/icons/Face';
import AlternateEmail from '@material-ui/icons/AlternateEmail';
import Lock from '@material-ui/icons/Lock';
class Signup extends Component {

    state = {
        username: {
            value: '',
            minLength: 3,
        },
        email: {
            value: '',  
        },
        password: {
            value: '',
            minLength: 8,
        },
        validPassword: {
            value: '',
        }
    }

    handleChangeFormSignUpValue = (e) => {
        const inputValues = {
            name: e.target.name,
            value: e.target.value
        };
        this.props.onChange(inputValues);
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
                    id='signup-form-username-input'
                    label='Ton pseudo'
                    className=''
                    type='text'
                    name='username'
                    margin="normal"
                    helperText={this.state.username.value.length < this.state.username.minLength ? this.state.username.minLength +" caractères minimum" : ''}
                    onChange={this.handleChangeFormSignUpValue}
                    error={this.props.value.username.value.length < this.state.username.minLength ? true : false }
                    fullWidth  
                    value={this.props.value.username.value}
                    InputProps={{
                        endAdornment: (
                        <InputAdornment position="start">
                            <Face />
                        </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    id='signup-form-email-input'
                    label='Ton e-mail'
                    className=''
                    type='email'
                    name='email'
                    margin="normal"
                    onChange={this.handleChangeFormSignUpValue}
                    fullWidth  
                    value={this.props.value.email.value}
                    InputProps={{
                        endAdornment: (
                        <InputAdornment position="start">
                            <AlternateEmail />
                        </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    id='signup-form-password-input'
                    label='Ton mot de passe'
                    className=''
                    type='password'
                    name='password'
                    margin="normal"
                    helperText={this.state.password.value.length < this.state.password.minLength ? this.state.password.minLength +" caractères minimum" : ''}
                    onChange={this.handleChangeFormSignUpValue}
                    error={this.props.value.password.value.length < this.state.password.minLength ? true : false }
                    fullWidth  
                    value={this.props.value.password.value}
                    InputProps={{
                        endAdornment: (
                        <InputAdornment position="start">
                            <Lock />
                        </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    id='signup-form-valid-password-input'
                    label='Confirme ton mot de passe'
                    className=''
                    type='password'
                    name='confirmPassword'
                    margin="normal"
                    onChange={this.handleChangeFormSignUpValue}
                    fullWidth  
                    value={this.props.value.confirmPassword.value}
                    InputProps={{
                        endAdornment: (
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
  
  export default Signup;