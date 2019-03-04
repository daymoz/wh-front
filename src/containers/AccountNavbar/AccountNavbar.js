import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import DialogBox from './../../containers/DialogBox/DialogBox';
import IconButton from '@material-ui/core/IconButton';
import ExitToApp from '@material-ui/icons/ExitToApp';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';

import * as config from './../../config';
import AccountBox from './../../components/AccountBox/AccountBox';

import defaultAvatar from './../../assets/default_avatar.png';
import './AccountNavbar.scss';

import * as actions from '../../store/actions';
class AccountNavbar extends Component {

    state = {
      open: false,
      contentToDisplay: null,
      tabIndex: null,
      isAuthenticated: false,
      currentUser: null,
    };

    handleClickOpen = (value) => {
      switch(value) {
        case 'login':
          this.setState({ 
            contentToDisplay: value,
          });
          this.props.dialogBoxSetToLogin();
          this.props.openDialogBox();
          break;
        case 'signup':
          this.setState({ 
            contentToDisplay: value,
          });
          this.props.dialogBoxSetToSignUp();
          this.props.openDialogBox();
          break;
        case 'logout':
          Cookies.remove('token');
          this.setState({ 
            isAuthenticated: false,
            currentUser: null,
          });
          this.props.logout();
          this.props.toastIt('', 'Vous vous êtes déconnecté. A bientôt !');
          break;
        default:
          break;
      }
    };

    handleClose = () => {
      this.props.closeDialogBox();
    };


    componentDidMount() {
      const isAuthenticated = this.props.auth;
      if(isAuthenticated) {
        this.props.closeDialogBox();
      }
    }


    render() {
      let buttons = null;
      const { isAuthenticated, user } = this.props.auth;
      const dialogBoxStatus = this.props.dialogBox;
      if(!isAuthenticated) {
        buttons = <>
                    <Button className="sign-in nav-bar item" onClick={() => this.handleClickOpen('login')}>Se connecter</Button>
                    <Button className="sign-up nav-bar item" onClick={() => this.handleClickOpen('signup')}>S'inscrire</Button>
                  </>;
      } else {
        if(user) {
          // this.handleClose();
          buttons = <>
                  <AccountBox avatar={user.avatar ? config.backEndDomain+user.avatar.url : defaultAvatar} name={user.username} />
                  <IconButton className="logout-button" aria-label="Logout" onClick={() => this.handleClickOpen('logout')}><ExitToApp /></IconButton>
                </>;
        }
          
      }

      return (
          <div id="account">
              <nav id="account-navbar" role="navigation">
                  {buttons}
              </nav>

              <DialogBox open={dialogBoxStatus.open} onClose={this.handleClose} tabIndex={dialogBoxStatus.tabIndex} />
          </div>
      );
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout()),
        openDialogBox: () => dispatch(actions.dialogBoxOpen()),
        closeDialogBox: () => dispatch(actions.dialogBoxClose()),
        dialogBoxSetToLogin: () => dispatch(actions.dialogBoxSetToLogin()),
        dialogBoxSetToSignUp: () => dispatch(actions.dialogBoxSetToSignUp()),
        dialogBoxSetToFP: () => dispatch(actions.dialogBoxSetToFP()),
        toastIt: (type, message) => dispatch(actions.toastIt(type, message)),
    };
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    dialogBox: state.dialogBox
})
  
  export default connect(mapStateToProps, mapDispatchToProps)(AccountNavbar);