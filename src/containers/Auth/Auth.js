import React, { Component } from 'react'
import { connect } from 'react-redux';
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

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onAuth(this.state.formLoginValues.username.value, this.state.formLoginValues.password.value);
    }
    
    componentDidMount() {
        this.setState({
            tabIndex: this.props.tabIndex
        });
    }


    render() {

        const { theme } = this.props;

        const loginForm = <Login value={this.state.formLoginValues} onChange={this.handleChangeFormLoginValue} />
        const signupForm = <Signup />

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
                        <form className="form-box" onSubmit={this.handleSubmit}> 
                            {loginForm}
                            <Link align="right" onClick={() => this.swipe('toForgotPassword')} className="forgot-pwd"><p className="p-modal">Tu as oublié ton mot de passe ?</p></Link>
                            <Button type="submit" variant="text" size="medium" className="modal-box-button">Waveeeen</Button>
                        </form>
                        
                        <Link onClick={() => this.swipe('toSignup')} className="no-account-link"><p className="p-modal">Pas encore inscrit ?</p></Link>
                    </TabContainer>
                    <TabContainer dir={theme.direction}>
                        <form className="form-box">
                            {signupForm}
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
        onAuth: (email, password) => dispatch(actions.auth(email, password))
    };
}
//connect(null, mapDispatchToProps)
export default connect(null, mapDispatchToProps)(withStyles(styles, { withTheme: true })(Auth));