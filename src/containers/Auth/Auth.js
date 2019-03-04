import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import update from 'immutability-helper';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

import Login from './../../components/Login/Login';
import Signup from '../../components/Signup/Signup';

import * as actions from '../../store/actions/index';


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
    
});

class Auth extends Component {

    state = {
        tabIndex: 0,
        formLoginValues: {
            username: {
                value: '',
            },
            password: {
                value: '',
            }
        },
        formSignUpValues: {
            username: {
                value: '',
            },
            email : {
                value: '',
            },
            password: {
                value: '',
            },
            confirmPassword: {
                value: '',
            }
        },
        error: {
            message: null,
        }

    }

    handleChangeFormLoginValue = (input) => {
        let newState = update(this.state, {
            formLoginValues: {
                [input.name]: {
                    value: { $set: input.value }
                }
            }
        });
        this.setState(newState);
    };

    handleChangeFormSignUpValue = (input) => {
        let newState = update(this.state, {
            formSignUpValues: {
                [input.name]: {
                    value: { $set: input.value }
                }
            }
        });
        this.setState(newState);
    };

    handleChange = (event, tabIndex) => {
        this.props.dialogBoxSetIndex(tabIndex);
    };
    
    handleChangeIndex = index => {
        this.props.dialogBoxSetIndex(index);
    };

    swipe = (swipeTo) => {
        switch(swipeTo) {
            case 'toLogin':
                this.props.dialogBoxSetToLogin();
                break;
            case 'toSignup':
                this.props.dialogBoxSetToSignUp();
                break;
            case 'toForgotPassword':
                this.props.dialogBoxSetToFP();
                break;
            default:
                break;
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.currentTarget.id);
        if(e.currentTarget.id === 'loginForm') {
            this.props.onAuth(this.state.formLoginValues.username.value, this.state.formLoginValues.password.value);
        }
        else if (e.currentTarget.id === 'signUpForm') {
            if(this.state.formSignUpValues.password.value === this.state.formSignUpValues.confirmPassword.value) {
                this.props.signUp(this.state.formSignUpValues.username.value,  this.state.formSignUpValues.email.value, this.state.formSignUpValues.password.value);
            } else {
                let newState = update(this.state, {
                    error: {
                        message: { $set: 'Vos mots de passes ne sont pas identiques' }
                    }
                });
                this.setState(newState);
            }
        }
        
    }

    discordConnect = () => {
        return <Redirect to={{
            pathname: 'connect/discord',
            }}
        />
    }
    
    componentDidMount() {
        this.setState({
            tabIndex: this.props.tabIndex
        });
    }


    render() {

        const { theme } = this.props;
        const dialogBoxStatus = this.props.dialogBox;
        const loginForm = <Login value={this.state.formLoginValues} onChange={this.handleChangeFormLoginValue} />
        const signupForm = <Signup value={this.state.formSignUpValues} onChange={this.handleChangeFormSignUpValue} />

        return (
            <div>
                <div className="head-modal">
                    <Tabs
                        className="login-box-tab"
                        value={dialogBoxStatus.tabIndex}
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
                    index={dialogBoxStatus.tabIndex}
                    onChangeIndex={this.handleChangeIndex}
                >
                    <TabContainer dir={theme.direction}>
                        <form className="form-box" id="loginForm" onSubmit={this.handleSubmit}> 
                            {loginForm}
                            <Link align="right" onClick={() => this.swipe('toForgotPassword')} className="forgot-pwd"><p className="p-modal">Tu as oublié ton mot de passe ?</p></Link>
                            <Button type="submit" variant="text" size="medium" className="modal-box-button">Waveeeen</Button>
                        </form>
                        
                        <Button variant="text" size="medium" className="modal-box-button" onClick={this.discordConnect}>Discord</Button>
                        <Link onClick={() => this.swipe('toSignup')} className="no-account-link"><p className="p-modal">Pas encore inscrit ?</p></Link>
                    </TabContainer>
                    <TabContainer dir={theme.direction}>
                        <form className="form-box" id="signUpForm" onSubmit={this.handleSubmit}>
                            {signupForm}
                            <p>{this.state.error.message ? this.state.error.message : ''}</p>
                            <Button type="submit" variant="text" size="medium" className="modal-box-button">Rejoindre</Button>
                        </form>
                        <Link onClick={() => this.swipe('toLogin')} className="no-account-link"><p className="p-modal">Déjà un compte ?</p></Link>
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

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(actions.auth(email, password)),
        signUp: (username, email, password) => dispatch(actions.signUp(username, email, password)),
        toastIt: (type, message) => dispatch(actions.toastIt(type, message)),
        dialogBoxSetToLogin: () => dispatch(actions.dialogBoxSetToLogin()),
        dialogBoxSetToSignUp: () => dispatch(actions.dialogBoxSetToSignUp()),
        dialogBoxSetToFP: () => dispatch(actions.dialogBoxSetToFP()),
        dialogBoxSetIndex: (index) => dispatch(actions.dialogBoxSetIndex(index)),
    };
}

const mapStateToProps = (state) => ({
    dialogBox: state.dialogBox
})


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(Auth));