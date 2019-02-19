import React, { Component } from 'react'

import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';


import './Auth.scss';

function TabContainer({ children, dir }) {
    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
  };

const styles = theme => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      width: 500,
    },
});

class Auth extends Component {

    state = {
        login: {
            email: {
                elementLabel: 'Ton e-mail ou pseudo',
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
                elementLabel: 'Ton mot de passe',
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Ton mot de passe',
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
        },
        signup: {
            username: {
                elementLabel: 'Ton pseudo',
                elementType: 'input',
                elementConfig: {
                    type: 'text',
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
            email: {
                elementLabel: 'Ton e-mail',
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
                elementLabel: 'Ton mot de passe',
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Ton mot de passe',
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
        },
        tabIndex: 0,
    }

    handleChange = (event, tabIndex) => {
        this.setState({ tabIndex });
    };
    
      handleChangeIndex = index => {
        this.setState({ tabIndex: index });
    };

    swipe = (swipeTo) => {
        switch(swipeTo) {
            case 'toLogin':
                this.setState({
                    tabIndex: 0
                });
                break;
            case 'toSignup':
                this.setState({
                    tabIndex: 1
                });
                break;
            case 'toForgotPassword':
                this.setState({
                    tabIndex: 2
                });
                break;
            default:
                break;
        }
    }
    
    componentDidMount() {
        this.setState({
            tabIndex: this.props.tabIndex
        });
    }


    render() {

        const loginFormElementsArray = [];
        const { classes, theme } = this.props;

        for (let key in this.state.login) {
            loginFormElementsArray.push({
                id: key,
                config: this.state.login[key],
            })
        }

        const loginForm = loginFormElementsArray.map(formElement => (
            <TextField
                key={formElement.id}
                id={'outlined-'+formElement.config.elementConfig.type+'-input'}
                label={formElement.config.elementLabel}
                className=''
                type="text"
                name={formElement.config.elementConfig.type}
                margin="normal"
                //onChange={() => this.handleChange(formElement.config.elementConfig.type)}
                fullWidth   
                required={formElement.config.validation.required}
                InputProps={{
                    startAdornment: (
                    <InputAdornment position="start">
                        {formElement.config.elementConfig.type === 'email' ? <AccountCircle /> : <Lock />}
                    </InputAdornment>
                    ),
                }}
            />
        ));
        const signupFormElementsArray = [];
        for (let key in this.state.signup) {
            signupFormElementsArray.push({
                id: key,
                config: this.state.signup[key],
            })
        }

        const signupForm = signupFormElementsArray.map(formElement => (
            <TextField
                key={formElement.id}
                id={'outlined-'+formElement.config.elementConfig.type+'-input'}
                label={formElement.config.elementLabel}
                className=''
                type="text"
                name={formElement.config.elementConfig.type}
                margin="normal"
                //onChange={() => this.handleChange(formElement.config.elementConfig.type)}
                fullWidth   
                required={formElement.config.validation.required}
                InputProps={{
                    startAdornment: (
                    <InputAdornment position="start">
                        {formElement.config.elementConfig.type === 'email' ? <AccountCircle /> : <Lock />}
                    </InputAdornment>
                    ),
                }}
            />
        ));

        return (
            <div>
                <div className="head-modal">
                    <Tabs
                        className="login-box-tab"
                        value={this.state.tabIndex}
                        onChange={this.handleChange}
                        indicatorColor="secondary"
                        textColor="primary"
                        variant="fullWidth"
                    >
                        <Tab label="Se connecter" className="tab-title" />
                        <Tab label="S'inscrire" className="tab-title" />
                        <Tab label="Oubli de mot de passe" className="tab-title" />
                    </Tabs>
                </div>
                
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={this.state.tabIndex}
                    onChangeIndex={this.handleChangeIndex}
                >
                    <TabContainer dir={theme.direction}>
                        <form className="form-box"> 
                            {loginForm}
                        </form>
                        <Link align="right" component="button" onClick={() => this.swipe('toForgotPassword')} className="forgot-pwd"><p className="p-modal">Tu as oublié ton mot de passe ?</p></Link>
                        
                        <Button variant="text" size="medium" className="modal-box-button">Waveeeen</Button>
                        <Link component="button" onClick={() => this.swipe('toSignup')} className="no-account-link"><p className="p-modal">Pas encore inscrit ?</p></Link>
                    </TabContainer>
                    <TabContainer dir={theme.direction}>
                        <form className="form-box">
                            {signupForm}
                        </form>
                        <Link component="button" onClick={() => this.swipe('toLogin')} className="no-account-link"><p className="p-modal">Déjà un compte ?</p></Link>
                    </TabContainer>
                    <TabContainer dir={theme.direction}>
                        Forgot password ?
                    </TabContainer>
                </SwipeableViews>
            </div>
        );
    }
}

Auth.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Auth);