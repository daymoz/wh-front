import React, { Component } from 'react'

import TextField from '@material-ui/core/TextField';

import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

class Auth extends Component {

    state = {
        controls: {
            email: {
                elementLabel: 'Votre e-mail',
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your email'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true,
                },
                valid: false,
                touched: false
            },
            password: {
                elementLabel: 'Votre mot-de-passe',
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Your password',
                    showPassword: false,
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6,
                },
                valid: false,
                touched: false
            }
        }
    }

    handleChange = prop => event => {
        this.setState({
            
        })
    };

    render () {

        const formElementsArray = [];

        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key],
            })
        }

        const form = formElementsArray.map(formElement => (
            <TextField
                key={formElement.id}
                id={'outlined-'+formElement.config.elementConfig.type+'-input'}
                label={formElement.config.elementLabel}
                className=''
                type={formElement.config.elementConfig.type}
                name={formElement.config.elementConfig.type}
                margin="normal"
                variant="outlined"
                onChange={this.handleChange(formElement.config.elementConfig.type)}
            />
        ));

        return (
            <div>
                <form>
                    {form}
                </form>
            </div>
        );
    }
}

export default Auth;